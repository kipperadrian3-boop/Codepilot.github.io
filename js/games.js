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
                <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">${step.question}</p>
            </div>
            <div class="quiz-options-simple" id="quiz-options">
                ${step.options.map((opt, i) => `
                    <button class="quiz-option-simple" onclick="StepRenderer.checkQuiz(${i}, ${step.correct})" data-index="${i}">
                        <span class="option-letter">${letters[i]}</span>
                        <span>${opt}</span>
                    </button>
                `).join('')}
            </div>
            <div id="quiz-feedback"></div>
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
                    <span class="feedback-text">Richtig!</span>
                    ${step.explanation ? `<p class="feedback-explanation">${step.explanation}</p>` : ''}
                </div>
            `;
            enableNextButton();
        } else {
            feedback.innerHTML = `
                <div class="step-feedback wrong">
                    <span class="feedback-icon">❌</span>
                    <span class="feedback-text">Nicht ganz – schau dir die grüne Antwort an.</span>
                    ${step.explanation ? `<p class="feedback-explanation">${step.explanation}</p>` : ''}
                </div>
            `;
            // Allow continuing after wrong answer too
            setTimeout(() => enableNextButton(), 1500);
        }
    },

    // ========== FILL STEP ==========
    renderFill(step) {
        const area = document.getElementById('lesson-content');
        let blankIdx = 0;
        const codeHtml = step.code.replace(/___/g, () => {
            const idx = blankIdx++;
            return `<input type="text" class="fill-blank" id="blank-${idx}" data-index="${idx}" placeholder="..." autocomplete="off" spellcheck="false">`;
        });

        area.innerHTML = `
            <div class="step-info">
                <h3>✏️ Lücken füllen</h3>
                <p>${step.instruction}</p>
            </div>
            <div class="fill-area">${codeHtml}</div>
            <div class="check-btn-area">
                <button class="btn btn-primary" onclick="StepRenderer.checkFill()">✅ Überprüfen</button>
            </div>
            <div id="fill-feedback"></div>
        `;

        disableNextButton();

        // Focus first blank
        const first = document.getElementById('blank-0');
        if (first) first.focus();

        // Tab/Enter between blanks
        document.querySelectorAll('.fill-blank').forEach(blank => {
            blank.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === 'Tab') {
                    e.preventDefault();
                    const next = document.getElementById(`blank-${parseInt(blank.dataset.index) + 1}`);
                    if (next) next.focus();
                    else StepRenderer.checkFill();
                }
            });
        });
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
                    <span class="feedback-text">Perfekt! Alles richtig!</span>
                </div>
            `;
            enableNextButton();
        } else {
            feedback.innerHTML = `
                <div class="step-feedback wrong">
                    <span class="feedback-icon">💡</span>
                    <span class="feedback-text">Fast! Korrigiere die rot markierten Felder.</span>
                </div>
            `;
        }
    },

    // ========== WRITE STEP ==========
    renderWrite(step) {
        const area = document.getElementById('lesson-content');

        area.innerHTML = `
            <div class="step-info">
                <h3>💻 Selbst schreiben</h3>
                <div class="highlight-box tip">
                    <p>📝 <strong>Aufgabe:</strong> ${step.task}</p>
                </div>
            </div>
            <div class="write-area">
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                    <div>
                        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;">✏️ Dein Code:</p>
                        <textarea class="write-textarea" id="write-editor" oninput="StepRenderer.updatePreview()" placeholder="Schreibe deinen HTML-Code hier...">${step.starterCode || ''}</textarea>
                    </div>
                    <div>
                        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;">👁️ Vorschau:</p>
                        <iframe class="write-preview" id="write-preview" sandbox="allow-same-origin"></iframe>
                    </div>
                </div>
            </div>
            <div class="check-btn-area">
                <button class="btn btn-primary" onclick="StepRenderer.checkWrite()">✅ Überprüfen</button>
                ${step.hint ? `<button class="btn btn-glass" onclick="StepRenderer.showHint()" style="margin-left:0.5rem;">💡 Hinweis</button>` : ''}
            </div>
            <div id="write-feedback"></div>
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
                    <span class="feedback-text">Super gemacht!</span>
                    <div style="margin-top:0.75rem;">
                        ${results.map(r => `<div style="color:var(--accent-green);font-size:0.85rem;">✅ ${r.desc}</div>`).join('')}
                    </div>
                </div>
            `;
            enableNextButton();
        } else {
            feedback.innerHTML = `
                <div class="step-feedback wrong">
                    <span class="feedback-icon">📝</span>
                    <span class="feedback-text">Noch nicht ganz – prüfe:</span>
                    <div style="margin-top:0.75rem;">
                        ${results.map(r => `<div style="color:${r.passed ? 'var(--accent-green)' : 'var(--accent-red)'};font-size:0.85rem;">
                            ${r.passed ? '✅' : '❌'} ${r.desc}
                        </div>`).join('')}
                    </div>
                </div>
            `;
        }
    },

    showHint() {
        const step = getCurrentStep();
        const feedback = document.getElementById('write-feedback');
        feedback.innerHTML = `
            <div class="step-feedback" style="background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.3);">
                <span class="feedback-icon">💡</span>
                <span class="feedback-text">${step.hint}</span>
            </div>
        `;
    }
};
