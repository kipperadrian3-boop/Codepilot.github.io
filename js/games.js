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
                <div id="step-error-hint"></div>
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
            // Show yellow warning hint box directly at the top!
            const errorHint = document.getElementById('step-error-hint');
            if (errorHint && step.hint) {
                errorHint.innerHTML = `
                    <div class="highlight-box warning" style="margin-bottom: 1.5rem; font-size: 0.95rem; text-align: left; animation: fadeIn 0.3s ease;">
                        ⚠️ <strong>Hint:</strong> ${step.hint}
                    </div>
                `;
            }
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
                <div id="step-error-hint"></div>
                <p style="font-weight: 500; color: var(--text-secondary);">${step.instruction}</p>
            </div>
            <div class="fill-area">${codeHtml}</div>
            
            <p style="font-size:0.85rem; color:var(--text-muted); margin-top:1.5rem; margin-bottom:0.5rem; text-align:center;">📦 Tap a word to fill the active blank (or tap a blank to clear it):</p>
            <div class="word-bank" id="fill-word-bank">
                ${allWords.map(word => `<button class="word-btn" onclick="StepRenderer.selectWord(this, '${word}')">${word}</button>`).join('')}
            </div>

            <div class="check-btn-area" style="margin-top: 1.5rem;">
                <button class="btn btn-primary" onclick="StepRenderer.checkFill()">✅ Verify</button>
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
            // Show yellow warning hint box directly at the top!
            const errorHint = document.getElementById('step-error-hint');
            if (errorHint && step.hint) {
                errorHint.innerHTML = `
                    <div class="highlight-box warning" style="margin-bottom: 1.5rem; font-size: 0.95rem; text-align: left; animation: fadeIn 0.3s ease;">
                        ⚠️ <strong>Hint:</strong> ${step.hint}
                    </div>
                `;
       // ========== WRITE STEP ==========
    renderWrite(step) {
        const area = document.getElementById('lesson-content');
        const isLuau = (typeof currentLanguage !== 'undefined' && currentLanguage === 'luau');

        area.innerHTML = `
            <div class="step-info">
                <h3>💻 Write Code</h3>
                ${step.quickInfo ? `<div class="highlight-box" style="margin-bottom: 1.5rem; font-size: 0.95rem; border-color: rgba(139,92,246,0.3); background: rgba(139,92,246,0.05); padding: 0.75rem 1rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-purple); text-align: left;">${step.quickInfo}</div>` : ''}
                <div id="step-error-hint"></div>
                <div class="highlight-box tip">
                    <p>📝 <strong>Task:</strong> ${step.task}</p>
                </div>
            </div>
            <div class="write-area">
                <div style="display:flex; flex-direction:column; gap:1.25rem;">
                    <div>
                        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;">✏️ Your Code:</p>
                        <textarea class="write-textarea" id="write-editor" oninput="StepRenderer.updatePreview()" placeholder="${isLuau ? 'Write your Luau script here...' : 'Write your HTML code here...'}" style="width:100%; min-height:180px; font-family:Consolas, monospace; font-size:14px; box-sizing:border-box;">${step.starterCode || ''}</textarea>
                    </div>
                    <div>
                        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;">👁️ ${isLuau ? 'Roblox Output Console' : 'Webpage Preview'}:</p>
                        <iframe class="write-preview" id="write-preview" sandbox="allow-same-origin" style="width:100%; min-height:160px; border-radius:var(--radius-md); border:2px solid rgba(255,255,255,0.08); box-sizing:border-box; margin-top:0;"></iframe>
                    </div>
                </div>
            </div>
            <div class="check-btn-area">
                <button class="btn btn-primary" onclick="StepRenderer.checkWrite()">✅ Verify</button>
            </div>
            <div id="write-feedback" style="margin-top: 1rem;"></div>
        `;

        disableNextButton();
        this.updatePreview();
    },

    updatePreview() {
        const editor = document.getElementById('write-editor');
        const preview = document.getElementById('write-preview');
        if (!editor || !preview) return;

        const isLuau = (typeof currentLanguage !== 'undefined' && currentLanguage === 'luau');
        preview.style.background = isLuau ? '#121212' : '#ffffff';

        if (isLuau) {
            this.runLuauPreview(editor.value, preview);
        } else {
            const doc = preview.contentDocument || preview.contentWindow.document;
            doc.open();
            doc.write(editor.value);
            doc.close();
        }
    },

    runLuauPreview(code, iframe) {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        
        doc.open();
        doc.write(`
            <html>
            <head>
                <style>
                    body {
                        background-color: #121212;
                        color: #d4d4d4;
                        font-family: 'Consolas', 'Courier New', monospace;
                        font-size: 13px;
                        margin: 0;
                        padding: 10px;
                        line-height: 1.5;
                        overflow-y: auto;
                        height: calc(100vh - 20px);
                    }
                    .log-line {
                        margin-bottom: 4px;
                        white-space: pre-wrap;
                    }
                    .log-print { color: #ffffff; }
                    .log-info { color: #569cd6; }
                    .log-error { color: #f44747; font-weight: bold; }
                    .log-warn { color: #cca700; }
                    .log-header {
                        color: #808080;
                        font-size: 11px;
                        border-bottom: 1px solid #2d2d2d;
                        padding-bottom: 5px;
                        margin-bottom: 8px;
                    }
                </style>
            </head>
            <body>
                <div class="log-header">Roblox Studio Output Console</div>
                <div id="console-output"></div>
            </body>
            </html>
        `);
        doc.close();

        const consoleContainer = doc.getElementById('console-output');
        const logs = [];

        const log = (text, type = 'print') => {
            logs.push({ text, type });
        };

        // Mock environment
        const mockWorkspace = {
            Part: {
                Position: { x: 0, y: 0, z: 0, toString: () => 'Vector3(0, 0, 0)' },
                Anchored: false,
                Transparency: 0,
                Touched: {
                    Connect: (fn) => {
                        log('🔔 Event: game.Workspace.Part.Touched connected successfully.', 'info');
                        try {
                            fn({ Parent: 'CharacterModel' });
                        } catch (err) {
                            log(err.message, 'error');
                        }
                    }
                },
                Play: () => { log('🔊 Playing sound at game.Workspace.Part...', 'info'); },
                Clone: function() {
                    log('🔨 Cloned template object successfully.', 'info');
                    return { Parent: null, Name: 'ClonedPart' };
                }
            },
            Baseplate: { Transparency: 0, Position: { x: 0, y: 0, z: 0, toString: () => 'Vector3(0, 0, 0)' } },
            Glass: { Transparency: 0 },
            Spike: { Position: { x: 0, y: 0, z: 0, toString: () => 'Vector3(0, 0, 0)' } },
            Gold: { Anchored: false },
            Wall: { Anchored: false },
            GoldCoin: { Position: { x: 0, y: 0, z: 0 } },
            LobbyMusic: {
                Play: () => { log('🔊 Playing LobbyMusic at volume 0.5...', 'info'); }
            }
        };

        const mockVector3 = {
            new: (x, y, z) => {
                return { x, y, z, toString: () => `Vector3(${x}, ${y}, ${z})` };
            }
        };

        const mockInstance = {
            new: (className) => {
                log(`🔨 Created new Instance of class "${className}"`, 'info');
                return { Name: className, Parent: null };
            }
        };

        const mockGame = {
            Workspace: mockWorkspace,
            Players: {
                GetPlayerFromCharacter: (character) => {
                    log(`👤 GetPlayerFromCharacter hit verification successful.`, 'info');
                    return { Name: 'Player1', UserId: 123456 };
                }
            },
            GetService: (name) => {
                log(`⚙️ GetService loaded service: ${name}`, 'info');
                if (name === 'TweenService') {
                    return {
                        Create: (obj, info, goals) => {
                            log('🎬 Tween animation created successfully.', 'info');
                            return {
                                Play: () => { log('▶️ Running smooth Tween animation...', 'info'); }
                            };
                        }
                    };
                }
                return {};
            }
        };

        const mockTask = {
            wait: (n) => {
                log(`⏳ task.wait(${n}) yielded thread`, 'info');
            }
        };

        try {
            let jsCode = code;

            jsCode = jsCode.replace(/--.*/g, '');
            jsCode = jsCode.replace(/:(\w+)/g, '.$1');
            jsCode = jsCode.replace(/local\s+function\s+(\w+)/g, 'function $1');
            jsCode = jsCode.replace(/local\s+(\w+)\s*=/g, 'let $1 =');
            jsCode = jsCode.replace(/\bend\b/g, '}');
            jsCode = jsCode.replace(/\bif\s+(.*?)\s+then\b/g, 'if ($1) {');
            jsCode = jsCode.replace(/while\s+true\s+do/g, 'for (let _i = 0; _i < 3; _i++) {');

            // Support both game.Workspace and global workspace shortcut
            const execFunction = new Function(
                'workspace', 'Vector3', 'Instance', 'game', 'task', 'print', 'remote', 'myTween',
                jsCode
            );

            const mockRemote = {
                FireServer: () => {
                    log('📡 RemoteEvent:FireServer() invoked. Client triggered transaction request.', 'info');
                }
            };

            const mockMyTween = {
                Play: () => {
                    log('▶️ Playing tween transition on myTween...', 'info');
                }
            };

            const customPrint = (...args) => {
                const text = args.map(arg => {
                    if (arg && typeof arg === 'object') {
                        return arg.toString ? arg.toString() : JSON.stringify(arg);
                    }
                    return String(arg);
                }).join(' ');
                log(text, 'print');
            };

            execFunction(
                mockWorkspace, mockVector3, mockInstance, mockGame, mockTask, customPrint, mockRemote, mockMyTween
            );

        } catch (err) {
            log(`❌ Luau Runtime Error: ${err.message}`, 'error');
        }

        if (consoleContainer) {
            if (logs.length === 0) {
                consoleContainer.innerHTML = `<div class="log-line log-info">Ready. Write code and check output.</div>`;
            } else {
                consoleContainer.innerHTML = logs.map(l => {
                    return `<div class="log-line log-${l.type}">${l.text}</div>`;
                }).join('');
            }
        }
    },

    executeUserLuau(code) {
        const mockWorkspace = {
            Part: {
                Position: { x: 0, y: 0, z: 0, toString: () => 'Vector3(0, 0, 0)' },
                Anchored: false,
                Transparency: 0,
                Touched: { Connect: (fn) => { try { fn({ Parent: 'CharacterModel' }); } catch(e){} } },
                Play: () => {},
                Clone: function() { return { Parent: null, Name: 'ClonedPart' }; }
            },
            Baseplate: { Transparency: 0, Position: { x: 0, y: 0, z: 0, toString: () => 'Vector3(0, 0, 0)' } },
            Glass: { Transparency: 0 },
            Spike: { Position: { x: 0, y: 0, z: 0, toString: () => 'Vector3(0, 0, 0)' } },
            Gold: { Anchored: false },
            Wall: { Anchored: false },
            GoldCoin: { Position: { x: 0, y: 0, z: 0 } },
            LobbyMusic: { Play: () => {} }
        };

        const mockVector3 = {
            new: (x, y, z) => {
                return { x, y, z, toString: () => `Vector3(${x}, ${y}, ${z})` };
            }
        };

        const mockInstance = {
            new: (className) => { return { Name: className, Parent: null }; }
        };

        let tweenPlayed = false;
        const mockGame = {
            Workspace: mockWorkspace,
            Players: {
                GetPlayerFromCharacter: (character) => { return { Name: 'Player1', UserId: 123456 }; }
            },
            GetService: (name) => {
                if (name === 'TweenService') {
                    return {
                        Create: (obj, info, goals) => {
                            return { Play: () => { tweenPlayed = true; } };
                        }
                    };
                }
                return {};
            }
        };

        const mockTask = { wait: (n) => {} };
        const prints = [];

        try {
            let jsCode = code;
            jsCode = jsCode.replace(/--.*/g, '');
            jsCode = jsCode.replace(/:(\w+)/g, '.$1');
            jsCode = jsCode.replace(/local\s+function\s+(\w+)/g, 'function $1');
            jsCode = jsCode.replace(/local\s+(\w+)\s*=/g, 'let $1 =');
            jsCode = jsCode.replace(/\bend\b/g, '}');
            jsCode = jsCode.replace(/\bif\s+(.*?)\s+then\b/g, 'if ($1) {');
            jsCode = jsCode.replace(/while\s+true\s+do/g, 'for (let _i = 0; _i < 3; _i++) {');

            const execFunction = new Function(
                'workspace', 'Vector3', 'Instance', 'game', 'task', 'print', 'remote', 'myTween',
                jsCode
            );

            let remoteFired = false;
            const mockRemote = {
                FireServer: () => { remoteFired = true; }
            };

            const mockMyTween = {
                Play: () => { tweenPlayed = true; }
            };

            const customPrint = (...args) => {
                prints.push(args.join(' ').toLowerCase());
            };

            execFunction(
                mockWorkspace, mockVector3, mockInstance, mockGame, mockTask, customPrint, mockRemote, mockMyTween
            );

            return {
                workspace: mockWorkspace,
                game: mockGame,
                prints,
                remoteFired,
                tweenPlayed,
                success: true
            };
        } catch (err) {
            return {
                success: false,
                error: err.message
            };
        }
    },

    checkWrite() {
        const editor = document.getElementById('write-editor');
        if (!editor) return;
        const codeText = editor.value;
        const codeNormalized = codeText.toLowerCase().replace(/\s+/g, ' ').trim();
        const step = getCurrentStep();
        let allPassed = true;

        const isLuau = (typeof currentLanguage !== 'undefined' && currentLanguage === 'luau');
        let executionResult = null;
        if (isLuau) {
            executionResult = this.executeUserLuau(codeText);
        }

        const results = step.checks.map(check => {
            let passed = false;
            if (check.type === 'contains') {
                passed = codeNormalized.includes(check.value.toLowerCase());
            } else if (check.type === 'regex') {
                passed = new RegExp(check.value, 'i').test(codeNormalized);
            } else if (check.type === 'state') {
                if (isLuau && executionResult) {
                    try {
                        const evaluator = new Function('res', 'code', `return !!(${check.value});`);
                        passed = evaluator(executionResult, codeNormalized);
                    } catch (e) {
                        passed = false;
                    }
                }
            }
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
            const errorHint = document.getElementById('step-error-hint');
            if (errorHint && step.hint) {
                errorHint.innerHTML = `
                    <div class="highlight-box warning" style="margin-bottom: 1.5rem; font-size: 0.95rem; text-align: left; animation: fadeIn 0.3s ease;">
                        ⚠️ <strong>Hint:</strong> ${step.hint}
                    </div>
                `;
            }
        }
    }
};
