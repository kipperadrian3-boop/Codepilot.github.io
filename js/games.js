/* ============================================
   CodePilot – Step Renderers (Multi-Step Lessons)
   ============================================ */

const StepRenderer = {

    // ========== INFO STEP ==========
    renderInfo(step) {
        const area = document.getElementById('lesson-content');
        area.innerHTML = `<div class="step-info">${step.content}</div>`;
        enableNextButton();
    },

    // ========== QUIZ STEP (2 options) ==========
    renderQuiz(step) {
        const area = document.getElementById('lesson-content');
        const letters = ['A', 'B'];

        area.innerHTML = `
            <div class="step-info">
                <h3>❓ Quiz</h3>
                ${step.quickInfo ? `<div class="highlight-box" style="margin-bottom: 1.5rem; font-size: 0.95rem; border-color: rgba(139,92,246,0.3); background: rgba(139,92,246,0.05); padding: 0.75rem 1rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-purple); text-align: left;">${step.quickInfo}</div>` : ''}
                <p style="font-size: 1.1rem; margin-bottom: 1.5rem; font-weight: 600;">${step.question}</p>
            </div>
            <div class="quiz-options-simple" id="quiz-options">
                ${step.options.map((opt, i) => `
                    <button class="quiz-option-simple" onclick="StepRenderer.checkQuiz(${i}, ${step.correct})" data-index="${i}">
                        <span class="option-letter">${letters[i]}</span>
                        <span>${opt}</span>
                    </button>
                `).join('')}
            </div>
            <div class="check-btn-area" style="margin-top: 1.5rem;">
                ${step.hint ? `<button class="btn btn-glass hidden" id="quiz-hint-btn" onclick="StepRenderer.showHint('quiz')">💡 Show Hint</button>` : ''}
            </div>
            <div id="quiz-feedback" style="margin-top: 1rem;"></div>
        `;
        disableNextButton();
    },

    checkQuiz(selected, correct) {
        const options = document.querySelectorAll('.quiz-option-simple');
        if (document.querySelector('.quiz-option-simple.correct')) return;

        options.forEach((opt, i) => {
            opt.style.pointerEvents = 'none';
            if (i === correct) opt.classList.add('correct');
            if (i === selected && selected !== correct) opt.classList.add('wrong');
        });

        const feedback = document.getElementById('quiz-feedback');
        const step = getCurrentStep();

        if (selected === correct) {
            feedback.innerHTML = `
                <div class="step-feedback correct">
                    <span class="feedback-icon">✅</span>
                    <span class="feedback-text">Correct! Well done.</span>
                    ${step.explanation ? `<p class="feedback-explanation">${step.explanation}</p>` : ''}
                </div>
            `;
            enableNextButton();
        } else {
            feedback.innerHTML = `
                <div class="step-feedback wrong">
                    <span class="feedback-icon">❌</span>
                    <span class="feedback-text">Incorrect. Look at the correct answer highlighted in green.</span>
                    ${step.explanation ? `<p class="feedback-explanation">${step.explanation}</p>` : ''}
                </div>
            `;
            // Show hint button on error!
            const hintBtn = document.getElementById('quiz-hint-btn');
            if (hintBtn) hintBtn.classList.remove('hidden');

            setTimeout(() => enableNextButton(), 1500);
        }
    },

    // ========== FILL STEP ==========
    activeBlankIndex: 0,

    renderFill(step) {
        const area = document.getElementById('lesson-content');
        let blankIdx = 0;
        const codeHtml = step.code.replace(/___/g, () => {
            const idx = blankIdx++;
            return `<input type="text" class="fill-blank" id="blank-${idx}" data-index="${idx}" placeholder="..." autocomplete="off" readonly style="cursor: pointer;">`;
        });

        const distractors = step.distractors || ['div', 'span'];
        const allWords = [...step.answers, ...distractors];
        allWords.sort(() => Math.random() - 0.5);

        area.innerHTML = `
            <div class="step-info">
                <h3>✏️ Fill the Blanks</h3>
                ${step.quickInfo ? `<div class="highlight-box" style="margin-bottom: 1.5rem; font-size: 0.95rem; border-color: rgba(139,92,246,0.3); background: rgba(139,92,246,0.05); padding: 0.75rem 1rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-purple); text-align: left;">${step.quickInfo}</div>` : ''}
                <p style="font-weight: 500; color: var(--text-secondary);">${step.instruction}</p>
            </div>
            <div class="fill-area">${codeHtml}</div>
            
            <p style="font-size:0.85rem; color:var(--text-muted); margin-top:1.5rem; margin-bottom:0.5rem; text-align:center;">📦 Tap a word to fill the active blank (or tap a blank to clear it):</p>
            <div class="word-bank" id="fill-word-bank">
                ${allWords.map(word => `<button class="word-btn" onclick="StepRenderer.selectWord(this, '${word}')">${word}</button>`).join('')}
            </div>

            <div class="check-btn-area" style="margin-top: 1.5rem;">
                <button class="btn btn-primary" onclick="StepRenderer.checkFill()">✅ Verify</button>
                ${step.hint ? `<button class="btn btn-glass hidden" id="fill-hint-btn" onclick="StepRenderer.showHint('fill')" style="margin-left:0.5rem;">💡 Show Hint</button>` : ''}
            </div>
            <div id="fill-feedback" style="margin-top: 1rem;"></div>
        `;

        disableNextButton();
        this.activeBlankIndex = 0;
        this.updateActiveBlankHighlight();

        document.querySelectorAll('.fill-blank').forEach(blank => {
            blank.addEventListener('click', () => {
                if (blank.disabled) return;
                const idx = parseInt(blank.dataset.index);
                if (blank.value) {
                    const returnedWord = blank.value;
                    const btns = document.querySelectorAll('#fill-word-bank .word-btn');
                    for (let btn of btns) {
                        if (btn.textContent === returnedWord && btn.classList.contains('used')) {
                            btn.classList.remove('used');
                            btn.disabled = false;
                            break;
                        }
                    }
                    blank.value = '';
                    blank.classList.remove('correct', 'wrong');
                }
                this.activeBlankIndex = idx;
                this.updateActiveBlankHighlight();
            });
        });
    },

    updateActiveBlankHighlight() {
        document.querySelectorAll('.fill-blank').forEach((blank, idx) => {
            if (idx === this.activeBlankIndex) {
                blank.classList.add('active-blank');
            } else {
                blank.classList.remove('active-blank');
            }
        });
    },

    selectWord(btn, word) {
        const blanks = document.querySelectorAll('.fill-blank');
        const activeBlank = document.getElementById(`blank-${this.activeBlankIndex}`);
        
        if (activeBlank && !activeBlank.disabled) {
            if (activeBlank.value) {
                const oldWord = activeBlank.value;
                const oldBtns = document.querySelectorAll('#fill-word-bank .word-btn');
                for (let oldBtn of oldBtns) {
                    if (oldBtn.textContent === oldWord && oldBtn.classList.contains('used')) {
                        oldBtn.classList.remove('used');
                        oldBtn.disabled = false;
                        break;
                    }
                }
            }

            activeBlank.value = word;
            btn.classList.add('used');
            btn.disabled = true;

            // Shift focus to the next empty blank
            let nextIndex = -1;
            for (let i = 0; i < blanks.length; i++) {
                const b = document.getElementById(`blank-${i}`);
                if (b && !b.value && !b.disabled) {
                    nextIndex = i;
                    break;
                }
            }

            if (nextIndex !== -1) {
                this.activeBlankIndex = nextIndex;
            } else {
                this.activeBlankIndex = blanks.length - 1;
            }
            this.updateActiveBlankHighlight();
        }
    },

    checkFill() {
        const step = getCurrentStep();
        const blanks = document.querySelectorAll('.fill-blank');
        let allCorrect = true;

        blanks.forEach((blank, i) => {
            const user = blank.value.trim().toLowerCase();
            const valid = step.answers[i].toLowerCase().split('|').map(a => a.trim());

            if (valid.includes(user)) {
                blank.classList.remove('wrong');
                blank.classList.add('correct');
                blank.disabled = true;
            } else {
                blank.classList.remove('correct');
                blank.classList.add('wrong');
                allCorrect = false;
            }
        });

        const feedback = document.getElementById('fill-feedback');
        if (allCorrect) {
            feedback.innerHTML = `
                <div class="step-feedback correct">
                    <span class="feedback-icon">✅</span>
                    <span class="feedback-text">Perfect! All blanks are filled correctly!</span>
                </div>
            `;
            enableNextButton();
        } else {
            feedback.innerHTML = `
                <div class="step-feedback wrong">
                    <span class="feedback-icon">❌</span>
                    <span class="feedback-text">Almost! Correct the items highlighted in red.</span>
                </div>
            `;
            // Show hint button on error!
            const hintBtn = document.getElementById('fill-hint-btn');
            if (hintBtn) hintBtn.classList.remove('hidden');
        }
    },

    // ========== WRITE STEP ==========
    renderWrite(step) {
        const area = document.getElementById('lesson-content');

        area.innerHTML = `
            <div class="step-info">
                <h3>💻 Write Code</h3>
                ${step.quickInfo ? `<div class="highlight-box" style="margin-bottom: 1.5rem; font-size: 0.95rem; border-color: rgba(139,92,246,0.3); background: rgba(139,92,246,0.05); padding: 0.75rem 1rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-purple); text-align: left;">${step.quickInfo}</div>` : ''}
                <div class="highlight-box tip">
                    <p>📝 <strong>Task:</strong> ${step.task}</p>
                </div>
            </div>
            <div class="write-area">
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                    <div>
                        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;">✏️ Your Code:</p>
                        <textarea class="write-textarea" id="write-editor" oninput="StepRenderer.updatePreview()" placeholder="Write your HTML code here...">${step.starterCode || ''}</textarea>
                    </div>
                    <div>
                        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;">👁️ Preview:</p>
                        <iframe class="write-preview" id="write-preview" sandbox="allow-same-origin"></iframe>
                    </div>
                </div>
            </div>
            <div class="check-btn-area">
                <button class="btn btn-primary" onclick="StepRenderer.checkWrite()">✅ Verify</button>
                ${step.hint ? `<button class="btn btn-glass hidden" id="write-hint-btn" onclick="StepRenderer.showHint('write')" style="margin-left:0.5rem;">💡 Show Hint</button>` : ''}
            </div>
            <div id="write-feedback" style="margin-top: 1rem;"></div>
        `;

        disableNextButton();
        this.updatePreview();
    },

    updatePreview() {
        const editor = document.getElementById('write-editor');
        const preview = document.getElementById('write-preview');
        if (editor && preview) {
            const doc = preview.contentDocument || preview.contentWindow.document;
            doc.open();
            doc.write(editor.value);
            doc.close();
        }
    },

    checkWrite() {
        const code = document.getElementById('write-editor').value.toLowerCase().replace(/\s+/g, ' ').trim();
        const step = getCurrentStep();
        let allPassed = true;

        const results = step.checks.map(check => {
            let passed = false;
            if (check.type === 'contains') passed = code.includes(check.value.toLowerCase());
            else if (check.type === 'regex') passed = new RegExp(check.value, 'i').test(code);
            if (!passed) allPassed = false;
            return { ...check, passed };
        });

        const feedback = document.getElementById('write-feedback');
        if (allPassed) {
            feedback.innerHTML = `
                <div class="step-feedback correct">
                    <span class="feedback-icon">✅</span>
                    <span class="feedback-text">Excellent! Your code meets all requirements.</span>
                    <div style="margin-top:0.75rem;">
                        ${results.map(r => `<div style="color:var(--accent-green);font-size:0.85rem;">✅ ${r.desc}</div>`).join('')}
                    </div>
                </div>
            `;
            enableNextButton();
        } else {
            feedback.innerHTML = `
                <div class="step-feedback wrong">
                    <span class="feedback-icon">❌</span>
                    <span class="feedback-text">Not complete yet. Please check:</span>
                    <div style="margin-top:0.75rem;">
                        ${results.map(r => `<div style="color:${r.passed ? 'var(--accent-green)' : 'var(--accent-red)'};font-size:0.85rem;">
                            ${r.passed ? '✅' : '❌'} ${r.desc}
                        </div>`).join('')}
                    </div>
                </div>
            `;
            // Show hint button on error!
            const hintBtn = document.getElementById('write-hint-btn');
            if (hintBtn) hintBtn.classList.remove('hidden');
        }
    },

    // ========== GENERAL HINT RENDERER ==========
    showHint(type) {
        const step = getCurrentStep();
        const feedback = document.getElementById(`${type}-feedback`);
        if (feedback && step.hint) {
            feedback.innerHTML = `
                <div class="step-feedback" style="background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.3);animation:fadeIn 0.3s ease;">
                    <span class="feedback-icon">💡</span>
                    <span class="feedback-text">Hint: ${step.hint}</span>
                </div>
            `;
        }
    }
};
