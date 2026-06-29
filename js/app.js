/* ============================================
   CodePilot – Main Application
   ============================================ */

let currentView = 'home';
let currentLevelData = null;
let currentLevelNum = 0;

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initHeroAnimation();
    navigateTo('home');
    updateNavXP();
});

// ========== NAVIGATION ==========
function navigateTo(view) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

    // Show target view
    const target = document.getElementById(`view-${view}`);
    if (target) {
        target.classList.add('active');
        currentView = view;
    }

    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });

    // Render view-specific content
    if (view === 'map') renderLevelMap();
    if (view === 'profile') renderProfile();

    // Scroll to top
    window.scrollTo(0, 0);
}

// ========== HERO CODE ANIMATION ==========
function initHeroAnimation() {
    const codeEl = document.getElementById('hero-code');
    if (!codeEl) return;

    const codeLines = [
        '<span class="comment">&lt;!-- Willkommen bei CodePilot! 🚀 --&gt;</span>',
        '<span class="tag">&lt;html&gt;</span>',
        '  <span class="tag">&lt;head&gt;</span>',
        '    <span class="tag">&lt;title&gt;</span><span class="text">Meine erste Webseite</span><span class="tag">&lt;/title&gt;</span>',
        '  <span class="tag">&lt;/head&gt;</span>',
        '  <span class="tag">&lt;body&gt;</span>',
        '    <span class="tag">&lt;h1</span> <span class="attr">class</span>=<span class="string">"cool"</span><span class="tag">&gt;</span>',
        '      <span class="text">Hallo Welt! 🌍</span>',
        '    <span class="tag">&lt;/h1&gt;</span>',
        '    <span class="tag">&lt;p&gt;</span><span class="text">Ich lerne HTML!</span><span class="tag">&lt;/p&gt;</span>',
        '  <span class="tag">&lt;/body&gt;</span>',
        '<span class="tag">&lt;/html&gt;</span>',
    ];

    let lineIndex = 0;
    codeEl.innerHTML = '';

    function typeLine() {
        if (lineIndex < codeLines.length) {
            const line = document.createElement('div');
            line.innerHTML = codeLines[lineIndex];
            line.style.opacity = '0';
            line.style.transform = 'translateX(-10px)';
            codeEl.appendChild(line);

            requestAnimationFrame(() => {
                line.style.transition = 'all 0.3s ease';
                line.style.opacity = '1';
                line.style.transform = 'translateX(0)';
            });

            lineIndex++;
            setTimeout(typeLine, 150);
        } else {
            // Restart after delay
            setTimeout(() => {
                lineIndex = 0;
                codeEl.innerHTML = '';
                typeLine();
            }, 5000);
        }
    }

    typeLine();
}

// ========== LEVEL MAP ==========
function renderLevelMap() {
    const container = document.getElementById('level-map-content');
    const saveData = Storage.load();
    const completedCount = saveData.completedLevels.length;

    // Update progress
    document.getElementById('map-progress-text').textContent = `${completedCount} / 50 Level abgeschlossen`;
    document.getElementById('map-progress-bar').style.width = `${(completedCount / 50) * 100}%`;

    let html = '';

    CHAPTERS.forEach(chapter => {
        const [start, end] = chapter.levels.split('-').map(Number);
        const chapterLevels = LEVELS.filter(l => l.num >= start && l.num <= end);
        const chapterCompleted = chapterLevels.filter(l => saveData.completedLevels.includes(l.num)).length;

        html += `
            <div class="chapter">
                <div class="chapter-header">
                    <div class="chapter-num">${chapter.emoji}</div>
                    <div>
                        <div class="chapter-title">Kapitel ${chapter.num}: ${chapter.title}</div>
                        <div class="chapter-subtitle">${chapter.subtitle} • ${chapterCompleted}/${chapterLevels.length} ✅</div>
                    </div>
                </div>
                <div class="levels-grid">
                    ${chapterLevels.map(level => {
                        const isCompleted = saveData.completedLevels.includes(level.num);
                        const isUnlocked = level.num <= saveData.currentLevel;
                        const isCurrent = level.num === saveData.currentLevel;
                        const badgeClass = getBadgeClass(level.type);

                        if (!isUnlocked) {
                            return `
                                <div class="level-card locked">
                                    <span class="lock-icon">🔒</span>
                                    <span class="level-name">${level.title}</span>
                                </div>
                            `;
                        }

                        return `
                            <div class="level-card ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}"
                                 onclick="startLevel(${level.num})">
                                <span class="level-num">${level.num}</span>
                                <span class="level-name">${level.title}</span>
                                <span class="level-type-badge ${badgeClass}">${getTypeName(level.type)}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function getBadgeClass(type) {
    const map = {
        'quiz': 'badge-quiz',
        'completion': 'badge-completion',
        'match': 'badge-match',
        'bughunt': 'badge-bughunt',
        'sorter': 'badge-sorter',
        'livecode': 'badge-livecode'
    };
    return map[type] || '';
}

function getTypeName(type) {
    const map = {
        'quiz': '❓ Quiz',
        'completion': '✏️ Lückentext',
        'match': '🔗 Zuordnung',
        'bughunt': '🐛 Bug Hunt',
        'sorter': '🔀 Sortieren',
        'livecode': '💻 Live Code'
    };
    return map[type] || type;
}

// ========== START LEVEL ==========
function startLevel(num) {
    const level = LEVELS.find(l => l.num === num);
    if (!level) return;

    // Check if unlocked
    if (!Storage.isUnlocked(num)) return;

    currentLevelData = level;
    currentLevelNum = num;

    // Update UI
    document.getElementById('game-level-num').textContent = `Level ${num}`;
    document.getElementById('game-title').textContent = level.title;
    document.getElementById('game-xp-reward').textContent = `+${level.xp} XP`;
    document.getElementById('game-description').innerHTML = level.description;

    // Hide feedback and modal
    document.getElementById('game-feedback').classList.add('hidden');
    document.getElementById('level-complete-modal').classList.add('hidden');

    // Render the appropriate game
    switch (level.type) {
        case 'quiz':
            Games.renderQuiz(level);
            break;
        case 'completion':
            Games.renderCompletion(level);
            break;
        case 'match':
            Games.renderMatch(level);
            break;
        case 'bughunt':
            Games.renderBugHunt(level);
            break;
        case 'sorter':
            Games.renderSorter(level);
            break;
        case 'livecode':
            Games.renderLiveCode(level);
            break;
    }

    navigateTo('game');
}

function startLearning() {
    const saveData = Storage.load();
    startLevel(saveData.currentLevel);
}

// ========== COMPLETE LEVEL ==========
function completeCurrentLevel() {
    if (!currentLevelData) return;

    const saveData = Storage.completeLevel(currentLevelData.num, currentLevelData.xp);

    // Update nav XP
    updateNavXP();

    // Check achievements
    checkAchievements(saveData);

    // Show completion modal
    showCompletionModal(currentLevelData.xp);
}

function showCompletionModal(xp) {
    const modal = document.getElementById('level-complete-modal');
    document.getElementById('modal-xp').textContent = `+${xp} XP`;

    // Check if there's a next level
    const nextLevel = LEVELS.find(l => l.num === currentLevelNum + 1);
    const nextBtn = document.getElementById('btn-next-level');
    if (!nextLevel) {
        nextBtn.textContent = '🏆 Alle Level fertig!';
        nextBtn.onclick = () => navigateTo('profile');
    } else {
        nextBtn.textContent = 'Nächstes Level →';
        nextBtn.onclick = () => nextLevel && startLevel(nextLevel.num);
    }

    modal.classList.remove('hidden');

    // Spawn confetti
    spawnConfetti();
}

function nextLevel() {
    const next = LEVELS.find(l => l.num === currentLevelNum + 1);
    if (next) {
        startLevel(next.num);
    } else {
        navigateTo('profile');
    }
}

// ========== CONFETTI ==========
function spawnConfetti() {
    const container = document.getElementById('modal-confetti');
    container.innerHTML = '';
    const colors = ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#ef4444'];

    for (let i = 0; i < 30; i++) {
        const piece = document.createElement('div');
        piece.classList.add('confetti-piece');
        piece.style.left = Math.random() * 100 + '%';
        piece.style.top = Math.random() * 20 + '%';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = Math.random() * 0.5 + 's';
        piece.style.animationDuration = (1 + Math.random()) + 's';
        piece.style.width = (5 + Math.random() * 10) + 'px';
        piece.style.height = (5 + Math.random() * 10) + 'px';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        container.appendChild(piece);
    }
}

// ========== NAV XP UPDATE ==========
function updateNavXP() {
    const saveData = Storage.load();
    document.getElementById('nav-level').textContent = `Lvl ${saveData.level}`;
    document.getElementById('nav-xp').textContent = `${saveData.xp} / 100 XP`;
    document.getElementById('nav-xp-bar').style.width = `${saveData.xp}%`;
}

// ========== PROFILE ==========
function renderProfile() {
    const data = Storage.load();

    document.getElementById('profile-name').textContent = data.name;
    document.getElementById('profile-rank').textContent = Storage.getRank(data.level);
    document.getElementById('profile-level-num').textContent = data.level;
    document.getElementById('profile-xp-current').textContent = `${data.xp} / 100 XP`;
    document.getElementById('profile-xp-bar').style.width = `${data.xp}%`;
    document.getElementById('profile-total-xp').textContent = `Gesamt: ${data.totalXp} XP`;

    document.getElementById('stat-completed').textContent = data.completedLevels.length;
    document.getElementById('stat-xp').textContent = data.totalXp;
    document.getElementById('stat-streak').textContent = data.streak;
    document.getElementById('stat-achievements').textContent = data.achievements.length;

    // Render achievements
    const grid = document.getElementById('achievements-grid');
    grid.innerHTML = ACHIEVEMENTS.map(ach => {
        const unlocked = data.achievements.includes(ach.id);
        return `
            <div class="achievement-item ${unlocked ? 'unlocked' : 'locked'}">
                <span class="achievement-icon">${unlocked ? ach.icon : '🔒'}</span>
                <div class="achievement-text">
                    <h5>${ach.name}</h5>
                    <p>${ach.desc}</p>
                </div>
            </div>
        `;
    }).join('');
}

// ========== ACHIEVEMENTS ==========
function checkAchievements(data) {
    ACHIEVEMENTS.forEach(ach => {
        if (!data.achievements.includes(ach.id) && ach.condition(data)) {
            const unlocked = Storage.unlockAchievement(ach.id);
            if (unlocked) {
                showAchievementPopup(ach);
            }
        }
    });
}

function showAchievementPopup(achievement) {
    const popup = document.getElementById('achievement-popup');
    document.getElementById('achievement-popup-icon').textContent = achievement.icon;
    document.getElementById('achievement-popup-text').textContent = achievement.name + ' – ' + achievement.desc;

    popup.classList.remove('hidden');
    // Remove and re-add for animation restart
    popup.style.animation = 'none';
    popup.offsetHeight; // trigger reflow
    popup.style.animation = '';

    setTimeout(() => {
        popup.classList.add('hidden');
    }, 4000);
}

// ========== RESET ==========
function confirmReset() {
    if (confirm('⚠️ Willst du wirklich deinen gesamten Fortschritt löschen? Das kann nicht rückgängig gemacht werden!')) {
        Storage.reset();
        updateNavXP();
        renderProfile();
        alert('Fortschritt zurückgesetzt! 🗑️');
    }
}

// ========== PARTICLE BACKGROUND ==========
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height, particles;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    function createParticles() {
        particles = [];
        const count = Math.min(80, Math.floor((width * height) / 15000));
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.1,
                color: Math.random() > 0.5 ? '139, 92, 246' : '6, 182, 212'
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
            ctx.fill();
        });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(139, 92, 246, ${0.08 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
        resize();
        createParticles();
    });
}
