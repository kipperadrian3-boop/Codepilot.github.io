/* ============================================
   CodePilot – Main Application v2 (English)
   ============================================ */

let currentView = 'home';
let currentLanguage = null;
let currentLesson = null;
let currentStepIndex = 0;
let stepCompleted = false;

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initHeroAnimation();
    initMusic();
    navigateTo('home');
    updateNavXP();
});

// ========== NAVIGATION ==========
function navigateTo(view) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById(`view-${view}`);
    if (target) { target.classList.add('active'); currentView = view; }

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });

    if (view === 'languages') renderLanguages();
    if (view === 'profile') renderProfile();

    document.getElementById('level-complete-modal').classList.add('hidden');
    window.scrollTo(0, 0);
}

// ========== MUSIC ==========
function initMusic() {
    const data = Storage.load();
    const toggle = document.getElementById('music-toggle');
    const icon = document.getElementById('music-icon');
    if (data.musicOn) {
        icon.textContent = '🔊';
        toggle.classList.add('active');
    }
}

function toggleMusic() {
    const audio = document.getElementById('bg-music');
    const icon = document.getElementById('music-icon');
    const toggle = document.getElementById('music-toggle');
    const data = Storage.load();

    if (audio.paused) {
        audio.volume = 0.3;
        audio.play().catch(() => {});
        icon.textContent = '🔊';
        toggle.classList.add('active');
        Storage.setMusic(true);
    } else {
        audio.pause();
        icon.textContent = '🔇';
        toggle.classList.remove('active');
        Storage.setMusic(false);
    }
}

// ========== HERO ANIMATION ==========
function initHeroAnimation() {
    const codeEl = document.getElementById('hero-code');
    if (!codeEl) return;
    const lines = [
        '<span class="comment">&lt;!-- Welcome to CodePilot! --&gt;</span>',
        '<span class="tag">&lt;html&gt;</span>',
        '  <span class="tag">&lt;body&gt;</span>',
        '    <span class="tag">&lt;h1&gt;</span><span class="text">Hello World! 🌍</span><span class="tag">&lt;/h1&gt;</span>',
        '    <span class="tag">&lt;p&gt;</span><span class="text">I am learning HTML!</span><span class="tag">&lt;/p&gt;</span>',
        '    <span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="string">"#"</span><span class="tag">&gt;</span><span class="text">Click me</span><span class="tag">&lt;/a&gt;</span>',
        '  <span class="tag">&lt;/body&gt;</span>',
        '<span class="tag">&lt;/html&gt;</span>',
    ];
    let i = 0;
    codeEl.innerHTML = '';
    function type() {
        if (i < lines.length) {
            const div = document.createElement('div');
            div.innerHTML = lines[i];
            div.style.opacity = '0'; div.style.transform = 'translateX(-10px)';
            codeEl.appendChild(div);
            requestAnimationFrame(() => { div.style.transition = 'all 0.3s ease'; div.style.opacity = '1'; div.style.transform = 'translateX(0)'; });
            i++; setTimeout(type, 200);
        } else { setTimeout(() => { i = 0; codeEl.innerHTML = ''; type(); }, 5000); }
    }
    type();
}

// ========== LANGUAGES ==========
function renderLanguages() {
    const grid = document.getElementById('languages-grid');
    const data = Storage.load();

    grid.innerHTML = LANGUAGES.map(lang => {
        const lessons = LESSONS[lang.id] || [];
        const completed = lessons.filter(l => data.completedLessons.includes(`${lang.id}-${l.num}`)).length;

        return `
            <div class="language-card ${lang.available ? '' : 'locked'}" onclick="${lang.available ? `selectLanguage('${lang.id}')` : ''}">
                <span class="language-emoji">${lang.emoji}</span>
                <div class="language-name">${lang.name}</div>
                <div class="language-desc">${lang.desc}</div>
                ${lang.available
                    ? `<div class="language-progress">${completed} / ${lessons.length} Lessons</div>
                       <span class="language-badge badge-available">✅ Available</span>`
                    : `<span class="language-badge badge-coming">🔜 Coming Soon</span>`
                }
            </div>
        `;
    }).join('');
}

function selectLanguage(langId) {
    currentLanguage = langId;
    renderTopics(langId);
    navigateTo('topics');
}

// ========== TOPICS ==========
function renderTopics(langId) {
    const lang = LANGUAGES.find(l => l.id === langId);
    const lessons = LESSONS[langId] || [];
    const data = Storage.load();

    document.getElementById('topics-header').innerHTML = `
        <span class="topics-header-emoji">${lang.emoji}</span>
        <h2>${lang.name} Lessons</h2>
        <p>${lessons.filter(l => data.completedLessons.includes(`${langId}-${l.num}`)).length} of ${lessons.length} completed</p>
    `;

    document.getElementById('topics-list').innerHTML = lessons.map(lesson => {
        const completed = data.completedLessons.includes(`${langId}-${lesson.num}`);
        const unlocked = Storage.isUnlocked(langId, lesson.num);

        return `
            <div class="topic-card ${completed ? 'completed' : ''} ${!unlocked ? 'locked' : ''}"
                 onclick="${unlocked ? `startLesson('${langId}', ${lesson.num})` : ''}">
                <div class="topic-num ${completed ? 'completed' : unlocked ? 'unlocked' : 'locked'}">
                    ${completed ? '✅' : unlocked ? lesson.num : '🔒'}
                </div>
                <div class="topic-info">
                    <div class="topic-title">${lesson.title}</div>
                    <div class="topic-subtitle">${lesson.subtitle}</div>
                </div>
                <div class="topic-status">
                    ${completed ? '' : unlocked ? '→' : ''}
                </div>
            </div>
        `;
    }).join('');
}

// ========== LESSON (Multi-Step) ==========
function startLesson(langId, lessonNum) {
    const lessons = LESSONS[langId] || [];
    currentLesson = lessons.find(l => l.num === lessonNum);
    currentLanguage = langId;
    currentStepIndex = 0;

    if (!currentLesson) return;

    document.getElementById('lesson-xp-badge').textContent = `+${currentLesson.xp} XP`;
    navigateTo('lesson');
    renderStep();
}

function renderStep() {
    if (!currentLesson) return;

    const totalSteps = currentLesson.steps.length;
    const step = currentLesson.steps[currentStepIndex];

    // Update progress
    document.getElementById('lesson-step-text').textContent = `Step ${currentStepIndex + 1} of ${totalSteps}`;
    document.getElementById('lesson-progress-fill').style.width = `${((currentStepIndex + 1) / totalSteps) * 100}%`;

    // Show/hide back button
    document.getElementById('btn-step-back').style.visibility = currentStepIndex > 0 ? 'visible' : 'hidden';

    // Render based on step type
    switch (step.type) {
        case 'info': StepRenderer.renderInfo(step); break;
        case 'quiz': StepRenderer.renderQuiz(step); break;
        case 'fill': StepRenderer.renderFill(step); break;
        case 'write': StepRenderer.renderWrite(step); break;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getCurrentStep() {
    return currentLesson ? currentLesson.steps[currentStepIndex] : null;
}

function nextStep() {
    if (!currentLesson) return;

    if (currentStepIndex < currentLesson.steps.length - 1) {
        currentStepIndex++;
        renderStep();
    } else {
        // Lesson complete!
        completeCurrentLesson();
    }
}

function prevStep() {
    if (currentStepIndex > 0) {
        currentStepIndex--;
        renderStep();
    }
}

function enableNextButton() {
    const btn = document.getElementById('btn-step-next');
    btn.disabled = false;

    // Check if last step
    if (currentStepIndex === currentLesson.steps.length - 1) {
        btn.textContent = '✅ Finish';
        btn.className = 'btn btn-success btn-lg';
    } else {
        btn.textContent = 'Continue →';
        btn.className = 'btn btn-primary btn-lg';
    }
}

function disableNextButton() {
    const btn = document.getElementById('btn-step-next');
    btn.disabled = true;
    btn.textContent = 'Continue →';
    btn.className = 'btn btn-primary btn-lg';
}

function exitLesson() {
    if (confirm('Are you sure you want to exit the lesson?')) {
        renderTopics(currentLanguage);
        navigateTo('topics');
    }
}

// ========== LESSON COMPLETE ==========
function completeCurrentLesson() {
    if (!currentLesson) return;

    const data = Storage.completeLesson(currentLanguage, currentLesson.num, currentLesson.xp);
    updateNavXP();
    checkAchievements(data);
    showCompletionModal();
}

function showCompletionModal() {
    document.getElementById('modal-xp').textContent = `+${currentLesson.xp} XP`;

    // Check next lesson
    const lessons = LESSONS[currentLanguage] || [];
    const nextLessonData = lessons.find(l => l.num === currentLesson.num + 1);
    const nextBtn = document.getElementById('btn-next-lesson');

    if (nextLessonData) {
        nextBtn.textContent = 'Continue →';
        nextBtn.onclick = () => startLesson(currentLanguage, nextLessonData.num);
    } else {
        nextBtn.textContent = '🏠 Home';
        nextBtn.onclick = () => { renderTopics(currentLanguage); navigateTo('topics'); };
    }

    document.getElementById('level-complete-modal').classList.remove('hidden');
    spawnConfetti();
}

function nextLesson() {
    const lessons = LESSONS[currentLanguage] || [];
    const next = lessons.find(l => l.num === currentLesson.num + 1);
    if (next) startLesson(currentLanguage, next.num);
    else { renderTopics(currentLanguage); navigateTo('topics'); }
}

function startLearning() {
    const data = Storage.load();
    const htmlLessons = LESSONS.html || [];
    const nextLesson = htmlLessons.find(l => !data.completedLessons.includes(`html-${l.num}`));
    if (nextLesson) startLesson('html', nextLesson.num);
    else navigateTo('languages');
}

// ========== CONFETTI ==========
function spawnConfetti() {
    const c = document.getElementById('modal-confetti');
    c.innerHTML = '';
    const colors = ['#8b5cf6','#06b6d4','#ec4899','#10b981','#f59e0b'];
    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.classList.add('confetti-piece');
        p.style.left = Math.random()*100+'%';
        p.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
        p.style.animationDelay = Math.random()*0.5+'s';
        p.style.animationDuration = (1+Math.random())+'s';
        c.appendChild(p);
    }
}

// ========== NAV XP ==========
function updateNavXP() {
    const data = Storage.load();
    document.getElementById('nav-level').textContent = `Lvl ${data.level}`;
    document.getElementById('nav-xp-bar').style.width = `${data.xp}%`;
}

// ========== PROFILE ==========
function renderProfile() {
    const data = Storage.load();
    document.getElementById('profile-rank').textContent = Storage.getRank(data.level);
    document.getElementById('profile-level-num').textContent = data.level;
    document.getElementById('profile-xp-current').textContent = `${data.xp} / 100 XP`;
    document.getElementById('profile-xp-bar').style.width = `${data.xp}%`;
    document.getElementById('profile-total-xp').textContent = `Total: ${data.totalXp} XP`;
    document.getElementById('stat-completed').textContent = data.completedLessons.length;
    document.getElementById('stat-xp').textContent = data.totalXp;
    document.getElementById('stat-streak').textContent = data.streak;
    document.getElementById('stat-achievements').textContent = data.achievements.length;

    document.getElementById('achievements-grid').innerHTML = ACHIEVEMENTS.map(ach => {
        const unlocked = data.achievements.includes(ach.id);
        return `
            <div class="achievement-item ${unlocked ? 'unlocked' : 'locked'}">
                <span class="achievement-icon">${unlocked ? ach.icon : '🔒'}</span>
                <div class="achievement-text"><h5>${ach.name}</h5><p>${ach.desc}</p></div>
            </div>
        `;
    }).join('');
}

// ========== ACHIEVEMENTS ==========
function checkAchievements(data) {
    ACHIEVEMENTS.forEach(ach => {
        if (!data.achievements.includes(ach.id) && ach.condition(data)) {
            if (Storage.unlockAchievement(ach.id)) {
                showAchievementPopup(ach);
            }
        }
    });
}

function showAchievementPopup(ach) {
    const popup = document.getElementById('achievement-popup');
    document.getElementById('achievement-popup-icon').textContent = ach.icon;
    document.getElementById('achievement-popup-text').textContent = ach.name + ' – ' + ach.desc;
    popup.classList.remove('hidden');
    popup.style.animation = 'none';
    popup.offsetHeight;
    popup.style.animation = '';
    setTimeout(() => popup.classList.add('hidden'), 4000);
}

// ========== RESET ==========
function confirmReset() {
    if (confirm('⚠️ Are you sure you want to reset all progress? This action cannot be undone!')) {
        Storage.reset();
        updateNavXP();
        renderProfile();
        alert('Progress reset successfully!');
    }
}

// ========== PARTICLES ==========
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles;

    function resize() { w = canvas.width = innerWidth; h = canvas.height = innerHeight; }

    function create() {
        particles = [];
        const count = Math.min(60, Math.floor((w*h)/20000));
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random()*w, y: Math.random()*h,
                vx: (Math.random()-0.5)*0.4, vy: (Math.random()-0.5)*0.4,
                size: Math.random()*2+0.5,
                opacity: Math.random()*0.4+0.1,
                color: Math.random()>0.5 ? '139,92,246' : '6,182,212'
            });
        }
    }

    function draw() {
        ctx.clearRect(0,0,w,h);
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x<0) p.x=w; if (p.x>w) p.x=0;
            if (p.y<0) p.y=h; if (p.y>h) p.y=0;
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
            ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
            ctx.fill();
        });
        for (let i=0;i<particles.length;i++) {
            for (let j=i+1;j<particles.length;j++) {
                const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
                const dist=Math.sqrt(dx*dx+dy*dy);
                if (dist<100) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x,particles[i].y);
                    ctx.lineTo(particles[j].x,particles[j].y);
                    ctx.strokeStyle=`rgba(139,92,246,${0.06*(1-dist/100)})`;
                    ctx.lineWidth=0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    }

    resize(); create(); draw();
    window.addEventListener('resize', () => { resize(); create(); });
}
