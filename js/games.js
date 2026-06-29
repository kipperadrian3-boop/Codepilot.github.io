/* ============================================
   CodePilot – Mini-Game Engines
   ============================================ */

const Games = {

    // ========== QUIZ GAME ==========
    renderQuiz(level) {
        const area = document.getElementById('game-area');
        const q = level.gameData;

        area.innerHTML = `
            <div class="quiz-question">
                <p style="font-size: 1.1rem; margin-bottom: 1.5rem; color: var(--text-primary);">${q.question}</p>
                ${q.code ? `<pre class="code-completion-area" style="margin-bottom: 1.5rem;">${q.code}</pre>` : ''}
            </div>
            <div class="quiz-options" id="quiz-options">
                ${q.options.map((opt, i) => `
                    <button class="quiz-option" onclick="Games.checkQuiz(${i}, ${q.correct}, this)" data-index="${i}">
                        <span class="quiz-option-letter">${String.fromCharCode(65 + i)}</span>
                        <span>${opt}</span>
                    </button>
                `).join('')}
            </div>
            <div id="quiz-feedback" style="margin-top: 1.5rem;"></div>
        `;
    },

    checkQuiz(selected, correct, btn) {
        const options = document.querySelectorAll('.quiz-option');
        // Prevent multiple clicks
        if (document.querySelector('.quiz-option.correct') || document.querySelector('.quiz-option.wrong')) return;

        options.forEach((opt, i) => {
            opt.style.pointerEvents = 'none';
            if (i === correct) opt.classList.add('correct');
            if (i === selected && selected !== correct) opt.classList.add('wrong');
        });

        const feedback = document.getElementById('quiz-feedback');
        if (selected === correct) {
            feedback.innerHTML = `
                <div class="game-feedback correct">
                    <span class="feedback-icon">✅</span>
                    <span class="feedback-text">Richtig! Super gemacht!</span>
                    ${currentLevelData.gameData.explanation ? `<p class="feedback-explanation">${currentLevelData.gameData.explanation}</p>` : ''}
                </div>
            `;
            setTimeout(() => completeCurrentLevel(), 1500);
        } else {
            feedback.innerHTML = `
                <div class="game-feedback wrong">
                    <span class="feedback-icon">❌</span>
                    <span class="feedback-text">Leider falsch. Die richtige Antwort ist ${String.fromCharCode(65 + correct)}.</span>
                    ${currentLevelData.gameData.explanation ? `<p class="feedback-explanation">${currentLevelData.gameData.explanation}</p>` : ''}
                </div>
                <div class="game-check-area">
                    <button class="btn btn-primary" onclick="Games.renderQuiz(currentLevelData)">🔄 Nochmal versuchen</button>
                </div>
            `;
        }
    },

    // ========== CODE COMPLETION GAME ==========
    renderCompletion(level) {
        const area = document.getElementById('game-area');
        const q = level.gameData;
        let blankIndex = 0;

        // Replace blanks markers ___ with input fields
        const codeHtml = q.code.replace(/___/g, () => {
            const idx = blankIndex++;
            return `<input type="text" class="code-blank" id="blank-${idx}" data-index="${idx}" placeholder="..." autocomplete="off" spellcheck="false">`;
        });

        area.innerHTML = `
            <p style="margin-bottom: 1rem; color: var(--text-secondary);">${q.instruction}</p>
            <div class="code-completion-area">${codeHtml}</div>
            <div class="game-check-area">
                <button class="btn btn-primary" onclick="Games.checkCompletion()">✅ Überprüfen</button>
            </div>
            <div id="completion-feedback" style="margin-top: 1rem;"></div>
        `;

        // Auto-focus first blank
        const firstBlank = document.getElementById('blank-0');
        if (firstBlank) firstBlank.focus();

        // Tab between blanks
        document.querySelectorAll('.code-blank').forEach(blank => {
            blank.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === 'Tab') {
                    e.preventDefault();
                    const nextIdx = parseInt(blank.dataset.index) + 1;
                    const nextBlank = document.getElementById(`blank-${nextIdx}`);
                    if (nextBlank) {
                        nextBlank.focus();
                    } else {
                        Games.checkCompletion();
                    }
                }
            });
        });
    },

    checkCompletion() {
        const blanks = document.querySelectorAll('.code-blank');
        const answers = currentLevelData.gameData.answers;
        let allCorrect = true;

        blanks.forEach((blank, i) => {
            const userAnswer = blank.value.trim().toLowerCase();
            const correctAnswer = answers[i].toLowerCase();

            // Support multiple correct answers separated by |
            const validAnswers = correctAnswer.split('|').map(a => a.trim());

            if (validAnswers.includes(userAnswer)) {
                blank.classList.remove('wrong');
                blank.classList.add('correct');
                blank.disabled = true;
            } else {
                blank.classList.remove('correct');
                blank.classList.add('wrong');
                allCorrect = false;
            }
        });

        const feedback = document.getElementById('completion-feedback');
        if (allCorrect) {
            feedback.innerHTML = `
                <div class="game-feedback correct">
                    <span class="feedback-icon">✅</span>
                    <span class="feedback-text">Perfekt! Alle Lücken richtig ausgefüllt!</span>
                </div>
            `;
            setTimeout(() => completeCurrentLevel(), 1500);
        } else {
            feedback.innerHTML = `
                <div class="game-feedback wrong">
                    <span class="feedback-icon">💡</span>
                    <span class="feedback-text">Fast! Korrigiere die rot markierten Felder.</span>
                </div>
            `;
        }
    },

    // ========== MATCH PAIRS GAME ==========
    matchState: { selectedLeft: null, selectedRight: null, matched: 0, total: 0 },

    renderMatch(level) {
        const area = document.getElementById('game-area');
        const q = level.gameData;
        this.matchState = { selectedLeft: null, selectedRight: null, matched: 0, total: q.pairs.length };

        // Shuffle right side
        const shuffledRight = [...q.pairs].sort(() => Math.random() - 0.5);

        area.innerHTML = `
            <p style="margin-bottom: 1.5rem; color: var(--text-secondary);">${q.instruction}</p>
            <div class="match-container">
                <div class="match-column" id="match-left">
                    ${q.pairs.map((pair, i) => `
                        <div class="match-item" data-side="left" data-id="${i}" onclick="Games.selectMatch(this, 'left', ${i})">
                            ${pair.left}
                        </div>
                    `).join('')}
                </div>
                <div class="match-connector">⟷</div>
                <div class="match-column" id="match-right">
                    ${shuffledRight.map((pair) => `
                        <div class="match-item" data-side="right" data-id="${q.pairs.indexOf(pair)}" onclick="Games.selectMatch(this, 'right', ${q.pairs.indexOf(pair)})">
                            ${pair.right}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    selectMatch(el, side, id) {
        if (el.classList.contains('matched')) return;

        // Deselect same side
        document.querySelectorAll(`.match-item[data-side="${side}"]`).forEach(item => {
            if (!item.classList.contains('matched')) item.classList.remove('selected');
        });

        el.classList.add('selected');

        if (side === 'left') {
            this.matchState.selectedLeft = id;
        } else {
            this.matchState.selectedRight = id;
        }

        // Check if both sides selected
        if (this.matchState.selectedLeft !== null && this.matchState.selectedRight !== null) {
            if (this.matchState.selectedLeft === this.matchState.selectedRight) {
                // Correct match!
                document.querySelectorAll(`.match-item.selected`).forEach(item => {
                    item.classList.remove('selected');
                    item.classList.add('matched');
                });
                this.matchState.matched++;
                this.matchState.selectedLeft = null;
                this.matchState.selectedRight = null;

                if (this.matchState.matched === this.matchState.total) {
                    setTimeout(() => completeCurrentLevel(), 1000);
                }
            } else {
                // Wrong match
                document.querySelectorAll(`.match-item.selected`).forEach(item => {
                    item.classList.add('wrong');
                });
                setTimeout(() => {
                    document.querySelectorAll(`.match-item.selected`).forEach(item => {
                        item.classList.remove('selected', 'wrong');
                    });
                    this.matchState.selectedLeft = null;
                    this.matchState.selectedRight = null;
                }, 800);
            }
        }
    },

    // ========== BUG HUNT GAME ==========
    renderBugHunt(level) {
        const area = document.getElementById('game-area');
        const q = level.gameData;
        this.bugFound = 0;
        this.totalBugs = q.bugLines.length;

        area.innerHTML = `
            <p style="margin-bottom: 1rem; color: var(--text-secondary);">${q.instruction}</p>
            <p style="margin-bottom: 1.5rem; color: var(--accent-orange); font-size: 0.9rem;">🐛 Finde ${q.bugLines.length} Fehler! Klicke auf die fehlerhafte Zeile.</p>
            <div class="bughunt-code" id="bughunt-code">
                ${q.lines.map((line, i) => `
                    <div class="bughunt-line" data-line="${i}" onclick="Games.checkBugLine(${i})">
                        <span class="line-number">${i + 1}</span>
                        <span class="line-content">${this.escapeHtml(line)}</span>
                        <span class="line-bug-indicator">🐛 Gefunden!</span>
                    </div>
                `).join('')}
            </div>
            <div id="bughunt-feedback" style="margin-top: 1rem;"></div>
        `;
    },

    bugFound: 0,
    totalBugs: 0,

    checkBugLine(lineIndex) {
        const lineEl = document.querySelector(`.bughunt-line[data-line="${lineIndex}"]`);
        if (lineEl.classList.contains('found')) return;

        const q = currentLevelData.gameData;
        const bugInfo = q.bugLines.find(b => b.line === lineIndex);

        if (bugInfo) {
            lineEl.classList.add('found');
            this.bugFound++;

            // Show fix hint
            const feedback = document.getElementById('bughunt-feedback');
            feedback.innerHTML = `
                <div class="game-feedback correct" style="margin-bottom: 0.5rem;">
                    <span class="feedback-icon">🐛</span>
                    <span class="feedback-text">Bug gefunden! ${bugInfo.hint}</span>
                </div>
            `;

            if (this.bugFound === this.totalBugs) {
                setTimeout(() => completeCurrentLevel(), 1500);
            }
        } else {
            lineEl.classList.add('wrong-pick');
            setTimeout(() => lineEl.classList.remove('wrong-pick'), 500);

            const feedback = document.getElementById('bughunt-feedback');
            feedback.innerHTML = `
                <div class="game-feedback wrong">
                    <span class="feedback-icon">❌</span>
                    <span class="feedback-text">Diese Zeile ist korrekt. Suche weiter!</span>
                </div>
            `;
        }
    },

    // ========== CODE SORTER GAME ==========
    sorterItems: [],

    renderSorter(level) {
        const area = document.getElementById('game-area');
        const q = level.gameData;

        // Shuffle the items
        this.sorterItems = q.lines.map((line, i) => ({ text: line, correctIndex: i }));
        this.shuffleArray(this.sorterItems);

        area.innerHTML = `
            <p style="margin-bottom: 1.5rem; color: var(--text-secondary);">${q.instruction}</p>
            <div class="sorter-container" id="sorter-container">
                ${this.sorterItems.map((item, i) => `
                    <div class="sorter-item" draggable="true" data-index="${i}"
                         ondragstart="Games.dragStart(event)" ondragover="Games.dragOver(event)"
                         ondrop="Games.drop(event)" ondragend="Games.dragEnd(event)">
                        <span class="sorter-handle">⋮⋮</span>
                        <span class="sorter-num">${i + 1}</span>
                        <code>${this.escapeHtml(item.text)}</code>
                    </div>
                `).join('')}
            </div>
            <div class="game-check-area">
                <button class="btn btn-primary" onclick="Games.checkSorter()">✅ Überprüfen</button>
            </div>
            <div id="sorter-feedback" style="margin-top: 1rem;"></div>
        `;
    },

    draggedItem: null,

    dragStart(e) {
        this.draggedItem = e.target.closest('.sorter-item');
        this.draggedItem.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
    },

    dragOver(e) {
        e.preventDefault();
        const container = document.getElementById('sorter-container');
        const afterElement = this.getDragAfterElement(container, e.clientY);
        if (afterElement) {
            container.insertBefore(this.draggedItem, afterElement);
        } else {
            container.appendChild(this.draggedItem);
        }
    },

    drop(e) {
        e.preventDefault();
    },

    dragEnd(e) {
        if (this.draggedItem) {
            this.draggedItem.classList.remove('dragging');
        }
        // Update numbers
        document.querySelectorAll('.sorter-item .sorter-num').forEach((num, i) => {
            num.textContent = i + 1;
        });
    },

    getDragAfterElement(container, y) {
        const elements = [...container.querySelectorAll('.sorter-item:not(.dragging)')];
        return elements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset, element: child };
            }
            return closest;
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    },

    checkSorter() {
        const items = document.querySelectorAll('.sorter-item');
        let allCorrect = true;

        // Get current order by reading DOM
        const currentOrder = [];
        items.forEach(item => {
            const idx = parseInt(item.dataset.index);
            currentOrder.push(this.sorterItems[idx].correctIndex);
        });

        items.forEach((item, i) => {
            const originalIdx = parseInt(item.dataset.index);
            if (this.sorterItems[originalIdx].correctIndex === i) {
                item.classList.add('correct-pos');
            } else {
                item.classList.remove('correct-pos');
                allCorrect = false;
            }
        });

        const feedback = document.getElementById('sorter-feedback');
        if (allCorrect) {
            feedback.innerHTML = `
                <div class="game-feedback correct">
                    <span class="feedback-icon">✅</span>
                    <span class="feedback-text">Perfekt! Die Reihenfolge stimmt!</span>
                </div>
            `;
            setTimeout(() => completeCurrentLevel(), 1500);
        } else {
            feedback.innerHTML = `
                <div class="game-feedback wrong">
                    <span class="feedback-icon">🔀</span>
                    <span class="feedback-text">Noch nicht ganz richtig. Verschiebe die Blöcke per Drag & Drop!</span>
                </div>
            `;
        }
    },

    // ========== LIVE CODER GAME ==========
    renderLiveCode(level) {
        const area = document.getElementById('game-area');
        const q = level.gameData;

        area.innerHTML = `
            <div class="livecode-task">
                <h4>📝 Aufgabe:</h4>
                <p>${q.task}</p>
            </div>
            <div class="livecode-container">
                <div class="livecode-editor">
                    <span class="livecode-label">✏️ Dein Code:</span>
                    <textarea class="livecode-textarea" id="livecode-editor" 
                        placeholder="Schreibe deinen HTML-Code hier..."
                        oninput="Games.updatePreview()">${q.starterCode || ''}</textarea>
                </div>
                <div class="livecode-preview">
                    <span class="livecode-label">👁️ Vorschau:</span>
                    <iframe class="livecode-iframe" id="livecode-preview" sandbox="allow-same-origin"></iframe>
                </div>
            </div>
            <div class="game-check-area">
                <button class="btn btn-primary" onclick="Games.checkLiveCode()">✅ Überprüfen</button>
                ${q.hint ? `<button class="btn btn-glass" onclick="Games.showHint()">💡 Hinweis</button>` : ''}
            </div>
            <div id="livecode-feedback" style="margin-top: 1rem;"></div>
        `;

        // Initial preview
        this.updatePreview();
    },

    updatePreview() {
        const editor = document.getElementById('livecode-editor');
        const preview = document.getElementById('livecode-preview');
        if (editor && preview) {
            const doc = preview.contentDocument || preview.contentWindow.document;
            doc.open();
            doc.write(editor.value);
            doc.close();
        }
    },

    checkLiveCode() {
        const editor = document.getElementById('livecode-editor');
        const code = editor.value.toLowerCase().replace(/\s+/g, ' ').trim();
        const q = currentLevelData.gameData;
        let allPassed = true;

        // Check required elements
        const results = q.checks.map(check => {
            let passed = false;
            if (check.type === 'contains') {
                passed = code.includes(check.value.toLowerCase());
            } else if (check.type === 'regex') {
                const re = new RegExp(check.value, 'i');
                passed = re.test(code);
            }
            if (!passed) allPassed = false;
            return { ...check, passed };
        });

        const feedback = document.getElementById('livecode-feedback');
        if (allPassed) {
            feedback.innerHTML = `
                <div class="game-feedback correct">
                    <span class="feedback-icon">✅</span>
                    <span class="feedback-text">Hervorragend! Dein Code erfüllt alle Anforderungen!</span>
                    <div style="margin-top: 0.75rem;">
                        ${results.map(r => `<div style="color: var(--accent-green); font-size: 0.85rem;">✅ ${r.desc}</div>`).join('')}
                    </div>
                </div>
            `;
            setTimeout(() => completeCurrentLevel(), 1500);
        } else {
            feedback.innerHTML = `
                <div class="game-feedback wrong">
                    <span class="feedback-icon">📝</span>
                    <span class="feedback-text">Noch nicht vollständig. Prüfe die Anforderungen:</span>
                    <div style="margin-top: 0.75rem;">
                        ${results.map(r => `<div style="color: ${r.passed ? 'var(--accent-green)' : 'var(--accent-red)'}; font-size: 0.85rem;">
                            ${r.passed ? '✅' : '❌'} ${r.desc}
                        </div>`).join('')}
                    </div>
                </div>
            `;
        }
    },

    showHint() {
        const q = currentLevelData.gameData;
        const feedback = document.getElementById('livecode-feedback');
        feedback.innerHTML = `
            <div class="game-feedback" style="background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.3);">
                <span class="feedback-icon">💡</span>
                <span class="feedback-text">${q.hint}</span>
            </div>
        `;
    },

    // ========== HELPER FUNCTIONS ==========
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
};
