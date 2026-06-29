/* ============================================
   CodePilot – Languages & Multi-Step Lessons
   ============================================ */

const LANGUAGES = [
    {
        id: 'html', name: 'HTML', emoji: '🌐',
        desc: 'Die Sprache des Internets – jede Webseite besteht aus HTML!',
        available: true
    },
    {
        id: 'css', name: 'CSS', emoji: '🎨',
        desc: 'Mach deine Webseiten schön – Farben, Layouts & Animationen!',
        available: false
    },
    {
        id: 'javascript', name: 'JavaScript', emoji: '⚡',
        desc: 'Mach deine Webseiten interaktiv – Logik & Funktionen!',
        available: false
    },
    {
        id: 'python', name: 'Python', emoji: '🐍',
        desc: 'Die einfachste Programmiersprache – perfekt für Anfänger!',
        available: false
    }
];

/* ============================================
   HTML LESSONS – Each lesson has multiple steps
   Step types: 'info', 'quiz', 'fill', 'write'
   ============================================ */

const LESSONS = {
    html: [
        // ===== LEKTION 1: Was ist HTML? =====
        {
            num: 1, title: 'Was ist HTML?', xp: 20,
            subtitle: 'Die Sprache des Internets verstehen',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>📖 Was ist HTML?</h3>
                        <p>Stell dir vor, du baust ein Haus. Du brauchst einen <strong>Bauplan</strong>, der sagt: "Hier kommt eine Tür, hier ein Fenster, hier eine Wand."</p>
                        <p><strong>HTML ist genau so ein Bauplan – aber für Webseiten!</strong></p>
                        <p>HTML sagt dem Browser (z.B. Chrome oder Edge):</p>
                        <div class="highlight-box">
                            <p>📌 "Das hier ist eine <strong>Überschrift</strong>"</p>
                            <p>📌 "Das hier ist ein <strong>Absatz</strong>"</p>
                            <p>📌 "Das hier ist ein <strong>Bild</strong>"</p>
                        </div>
                        <p>HTML steht für <strong>HyperText Markup Language</strong>.</p>
                        <p>Keine Sorge – du musst dir den Namen nicht merken! 😄</p>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Was macht HTML?',
                    options: [
                        'Es beschreibt die Struktur einer Webseite (wie ein Bauplan)',
                        'Es macht Computerspiele'
                    ],
                    correct: 0,
                    explanation: 'Genau! HTML ist wie ein Bauplan – es sagt dem Browser, welche Teile eine Webseite hat.'
                },
                {
                    type: 'info',
                    content: `
                        <h3>💡 Gut zu wissen</h3>
                        <p>HTML ist <strong>keine Programmiersprache</strong> – es ist eine <strong>Auszeichnungssprache</strong>.</p>
                        <p>Was bedeutet das?</p>
                        <div class="highlight-box tip">
                            <p>🔹 <strong>Programmiersprache</strong> = sagt dem Computer was er TUN soll</p>
                            <p>🔹 <strong>Auszeichnungssprache</strong> = sagt dem Computer was etwas IST</p>
                        </div>
                        <p>HTML sagt: "Das ist eine Überschrift" – aber es sagt <em>nicht</em> "rechne 2 + 2".</p>
                        <p>Dafür gibt es später <strong>JavaScript</strong>! 😊</p>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Ist HTML eine Programmiersprache?',
                    options: [
                        'Ja, HTML ist eine Programmiersprache',
                        'Nein, HTML ist eine Auszeichnungssprache'
                    ],
                    correct: 1,
                    explanation: 'Richtig! HTML beschreibt nur die Struktur. Zum Programmieren braucht man z.B. JavaScript oder Python.'
                },
                {
                    type: 'info',
                    content: `
                        <h3>🌍 HTML ist überall!</h3>
                        <p>JEDE Webseite die du jemals besucht hast, benutzt HTML:</p>
                        <p>✅ Google – benutzt HTML</p>
                        <p>✅ YouTube – benutzt HTML</p>
                        <p>✅ Instagram – benutzt HTML</p>
                        <p>✅ Diese Seite hier – benutzt HTML! 😄</p>
                        <div class="highlight-box">
                            <p>💡 <strong>Tipp:</strong> Du kannst den HTML-Code jeder Webseite sehen!</p>
                            <p>Drücke <code>F12</code> oder <code>Rechtsklick → Untersuchen</code> in deinem Browser.</p>
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Wofür steht das "H" in HTML?',
                    options: [
                        'HyperText',
                        'HighTech'
                    ],
                    correct: 0,
                    explanation: 'HTML = HyperText Markup Language. "HyperText" bedeutet Text mit Links zu anderen Seiten!'
                }
            ]
        },

        // ===== LEKTION 2: HTML Tags =====
        {
            num: 2, title: 'HTML Tags verstehen', xp: 20,
            subtitle: 'Die Bausteine von HTML kennenlernen',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>🏷️ Was sind Tags?</h3>
                        <p><strong>Tags</strong> sind die Bausteine von HTML. Sie stehen in <strong>spitzen Klammern</strong>.</p>
                        <p>Stell dir Tags wie <strong>Verpackungen</strong> vor:</p>
                        <div class="code-example">
                            &lt;p&gt;Hallo Welt!&lt;/p&gt;
                        </div>
                        <p>📦 <code>&lt;p&gt;</code> = <strong>Schachtel AUF</strong> (öffnender Tag)</p>
                        <p>📝 <code>Hallo Welt!</code> = <strong>Inhalt</strong> (was reinkommt)</p>
                        <p>📦 <code>&lt;/p&gt;</code> = <strong>Schachtel ZU</strong> (schließender Tag)</p>
                        <div class="highlight-box tip">
                            <p>⚡ Der schließende Tag hat IMMER einen <strong>Schrägstrich /</strong> vor dem Namen!</p>
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Welcher ist der schließende Tag?',
                    options: [
                        '<p> (ohne Schrägstrich)',
                        '</p> (mit Schrägstrich)'
                    ],
                    correct: 1,
                    explanation: 'Genau! Der Schrägstrich / bedeutet "mach zu!" → </p>'
                },
                {
                    type: 'info',
                    content: `
                        <h3>📝 Verschiedene Tags</h3>
                        <p>Es gibt viele verschiedene Tags – jeder hat eine Aufgabe:</p>
                        <div class="code-example">
                            &lt;h1&gt;Das ist eine Überschrift&lt;/h1&gt;
                            &lt;p&gt;Das ist ein Absatz&lt;/p&gt;
                            &lt;b&gt;Das ist fetter Text&lt;/b&gt;
                        </div>
                        <p><code>&lt;h1&gt;</code> = <strong>Überschrift</strong> (heading)</p>
                        <p><code>&lt;p&gt;</code> = <strong>Absatz</strong> (paragraph)</p>
                        <p><code>&lt;b&gt;</code> = <strong>Fett</strong> (bold)</p>
                    `
                },
                {
                    type: 'fill',
                    instruction: 'Vervollständige den schließenden Tag:',
                    code: '&lt;h1&gt;Meine Überschrift&lt;/___&gt;',
                    answers: ['h1']
                },
                {
                    type: 'info',
                    content: `
                        <h3>⚡ Zusammenfassung</h3>
                        <div class="highlight-box">
                            <p>✅ Tags stehen in spitzen Klammern: <code>&lt;tag&gt;</code></p>
                            <p>✅ Meistens kommen Tags in Paaren: öffnend + schließend</p>
                            <p>✅ Schließender Tag hat einen <strong>/</strong> → <code>&lt;/tag&gt;</code></p>
                            <p>✅ Der Inhalt steht ZWISCHEN den Tags</p>
                        </div>
                    `
                },
                {
                    type: 'fill',
                    instruction: 'Schreibe einen Absatz mit dem p-Tag:',
                    code: '&lt;___&gt;Hallo Welt!&lt;/___&gt;',
                    answers: ['p', 'p']
                }
            ]
        },

        // ===== LEKTION 3: HTML Grundstruktur =====
        {
            num: 3, title: 'Die HTML Grundstruktur', xp: 25,
            subtitle: 'So sieht jede Webseite von innen aus',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>🏗️ Jede Webseite hat die gleiche Basis</h3>
                        <p>Jede HTML-Seite braucht eine bestimmte Grundstruktur – wie ein Haus ein Fundament braucht.</p>
                        <div class="code-example">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Meine Seite&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    Hier kommt alles hin!
  &lt;/body&gt;
&lt;/html&gt;
                        </div>
                        <p>Sieht erstmal viel aus – aber wir gehen Schritt für Schritt durch! 😊</p>
                    `
                },
                {
                    type: 'info',
                    content: `
                        <h3>📋 Die 4 wichtigen Teile</h3>
                        <p>1️⃣ <code>&lt;!DOCTYPE html&gt;</code></p>
                        <p>→ Sagt dem Browser: "Hey, das ist HTML5!"</p>
                        <br>
                        <p>2️⃣ <code>&lt;html&gt;</code></p>
                        <p>→ Der große Container für ALLES</p>
                        <br>
                        <p>3️⃣ <code>&lt;head&gt;</code></p>
                        <p>→ Unsichtbare Infos (Titel, Einstellungen)</p>
                        <p>→ 🧠 Stell dir das wie das <strong>Gehirn</strong> der Seite vor</p>
                        <br>
                        <p>4️⃣ <code>&lt;body&gt;</code></p>
                        <p>→ Alles was du SIEHST auf der Seite</p>
                        <p>→ 💪 Stell dir das wie den <strong>Körper</strong> der Seite vor</p>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Was steht im <body>-Tag?',
                    options: [
                        'Unsichtbare Einstellungen der Seite',
                        'Alles was man auf der Webseite SIEHT'
                    ],
                    correct: 1,
                    explanation: 'Richtig! body = Körper = alles Sichtbare. head = Gehirn = unsichtbare Infos.'
                },
                {
                    type: 'fill',
                    instruction: 'Fülle die Lücken der HTML-Grundstruktur:',
                    code: '&lt;!DOCTYPE ___&gt;\n&lt;html&gt;\n  &lt;___&gt;\n    &lt;title&gt;Meine Seite&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;___&gt;\n    &lt;h1&gt;Hallo!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;',
                    answers: ['html', 'head', 'body']
                },
                {
                    type: 'info',
                    content: `
                        <h3>💡 Merkhilfe</h3>
                        <div class="highlight-box tip">
                            <p>🧠 <code>&lt;head&gt;</code> = <strong>Gehirn</strong> → unsichtbar, aber wichtig</p>
                            <p>💪 <code>&lt;body&gt;</code> = <strong>Körper</strong> → das was man sieht</p>
                        </div>
                        <p>Der <code>&lt;title&gt;</code>-Tag im Head bestimmt den Text im <strong>Browser-Tab</strong> – probier es aus!</p>
                    `
                },
                {
                    type: 'write',
                    task: 'Schreibe eine komplette HTML-Seite mit einer Überschrift "Hallo Welt"!',
                    starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Meine Seite</title>\n</head>\n<body>\n  \n</body>\n</html>',
                    hint: 'Schreibe <h1>Hallo Welt</h1> zwischen <body> und </body>',
                    checks: [
                        { type: 'contains', value: '<h1>', desc: 'Enthält <h1> Überschrift' },
                        { type: 'regex', value: '<h1>.*hallo.*welt.*</h1>', desc: 'Überschrift sagt "Hallo Welt"' }
                    ]
                }
            ]
        },

        // ===== LEKTION 4: Überschriften =====
        {
            num: 4, title: 'Überschriften h1-h6', xp: 20,
            subtitle: 'Verschiedene Größen für Überschriften',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>📝 6 Größen für Überschriften</h3>
                        <p>HTML hat <strong>6 verschiedene Überschriften</strong> – von riesig bis winzig:</p>
                        <p style="font-size:1.6rem;font-weight:bold;color:var(--accent-purple);">h1 – Die Hauptüberschrift</p>
                        <p style="font-size:1.35rem;font-weight:bold;color:var(--accent-cyan);">h2 – Unterüberschrift</p>
                        <p style="font-size:1.15rem;font-weight:bold;color:var(--accent-pink);">h3 – Abschnitt</p>
                        <p style="font-size:1rem;font-weight:bold;">h4 – Klein</p>
                        <p style="font-size:0.9rem;font-weight:bold;">h5 – Kleiner</p>
                        <p style="font-size:0.8rem;font-weight:bold;">h6 – Am kleinsten</p>
                        <div class="highlight-box">
                            <p>📌 <strong>Regel:</strong> Jede Seite sollte nur EINE <code>&lt;h1&gt;</code> haben!</p>
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Welche Überschrift ist die GRÖSSTE?',
                    options: ['<h1> (Nummer 1 = größte)', '<h6> (Nummer 6 = größte)'],
                    correct: 0,
                    explanation: 'h1 = Nummer 1 = die wichtigste und größte Überschrift! h6 ist die kleinste.'
                },
                {
                    type: 'info',
                    content: `
                        <h3>📰 Wie in einer Zeitung</h3>
                        <p>Stell dir eine Zeitung vor:</p>
                        <div class="code-example">
&lt;h1&gt;BREAKING NEWS&lt;/h1&gt;
&lt;h2&gt;Sport&lt;/h2&gt;
&lt;h3&gt;Fussball-Ergebnisse&lt;/h3&gt;
&lt;p&gt;Bayern hat 3:0 gewonnen.&lt;/p&gt;
                        </div>
                        <p>Die <code>&lt;h1&gt;</code> ist die große Schlagzeile, <code>&lt;h2&gt;</code> die Rubrik, <code>&lt;h3&gt;</code> der Artikel-Titel.</p>
                    `
                },
                {
                    type: 'fill',
                    instruction: 'Erstelle eine h1-Überschrift:',
                    code: '&lt;___&gt;Willkommen auf meiner Seite!&lt;/___&gt;',
                    answers: ['h1', 'h1']
                },
                {
                    type: 'fill',
                    instruction: 'Jetzt eine h2-Unterüberschrift:',
                    code: '&lt;___&gt;Über mich&lt;/h2&gt;\n&lt;p&gt;Ich lerne HTML!&lt;/___&gt;',
                    answers: ['h2', 'p']
                },
                {
                    type: 'write',
                    task: 'Erstelle eine Seite mit einer h1-Überschrift und einer h2-Unterüberschrift!',
                    starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  \n</body>\n</html>',
                    hint: 'Schreibe <h1>Titel</h1> und darunter <h2>Untertitel</h2>',
                    checks: [
                        { type: 'contains', value: '<h1>', desc: 'Enthält <h1>' },
                        { type: 'contains', value: '<h2>', desc: 'Enthält <h2>' }
                    ]
                }
            ]
        },

        // ===== LEKTION 5: Absätze & Text =====
        {
            num: 5, title: 'Absätze & Text', xp: 20,
            subtitle: 'Text auf Webseiten schreiben',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>📃 Der p-Tag (Absatz)</h3>
                        <p><code>&lt;p&gt;</code> steht für <strong>"paragraph"</strong> – das ist Englisch für Absatz.</p>
                        <div class="code-example">
&lt;p&gt;Das ist der erste Absatz.&lt;/p&gt;
&lt;p&gt;Das ist der zweite Absatz.&lt;/p&gt;
                        </div>
                        <p>Der Browser macht automatisch <strong>Abstand</strong> zwischen Absätzen! 👍</p>
                        <div class="highlight-box warning">
                            <p>⚠️ <strong>Achtung:</strong> Die Enter-Taste im Code macht KEINEN Zeilenumbruch im Browser! Dafür brauchst du <code>&lt;p&gt;</code>.</p>
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Was passiert wenn du im HTML-Code Enter drückst?',
                    options: [
                        'Es gibt einen Zeilenumbruch auf der Webseite',
                        'Nichts – der Browser ignoriert einfache Zeilenumbrüche'
                    ],
                    correct: 1,
                    explanation: 'Richtig! Der Browser ignoriert Enter. Für Zeilenumbrüche brauchst du Tags wie <p> oder <br>.'
                },
                {
                    type: 'info',
                    content: `
                        <h3>↩️ Zeilenumbruch mit br</h3>
                        <p>Manchmal willst du einen Umbruch OHNE neuen Absatz.</p>
                        <p>Dafür gibt es <code>&lt;br&gt;</code> (break):</p>
                        <div class="code-example">
&lt;p&gt;Zeile eins&lt;br&gt;Zeile zwei&lt;/p&gt;
                        </div>
                        <div class="highlight-box tip">
                            <p>💡 <code>&lt;br&gt;</code> ist ein <strong>selbstschließender Tag</strong> – er hat keinen schließenden Tag!</p>
                        </div>
                    `
                },
                {
                    type: 'fill',
                    instruction: 'Erstelle zwei Absätze:',
                    code: '&lt;___&gt;Erster Absatz.&lt;/p&gt;\n&lt;___&gt;Zweiter Absatz.&lt;/p&gt;',
                    answers: ['p', 'p']
                },
                {
                    type: 'write',
                    task: 'Schreibe eine Seite mit einer Überschrift und zwei Absätzen darunter!',
                    starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  \n</body>\n</html>',
                    hint: 'Nutze <h1>Titel</h1> und dann <p>Text</p> <p>Noch mehr Text</p>',
                    checks: [
                        { type: 'contains', value: '<h1>', desc: 'Enthält eine Überschrift' },
                        { type: 'contains', value: '<p>', desc: 'Enthält Absätze' }
                    ]
                }
            ]
        },

        // ===== LEKTION 6: Fett & Kursiv =====
        {
            num: 6, title: 'Fett & Kursiv', xp: 20,
            subtitle: 'Text hervorheben und betonen',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>✨ Text formatieren</h3>
                        <p>Du kannst Text <strong>fett</strong> oder <em>kursiv</em> machen:</p>
                        <div class="code-example">
&lt;strong&gt;Dieser Text ist fett&lt;/strong&gt;
&lt;em&gt;Dieser Text ist kursiv&lt;/em&gt;
                        </div>
                        <p><code>&lt;strong&gt;</code> = <strong>fett</strong> (strong = stark)</p>
                        <p><code>&lt;em&gt;</code> = <em>kursiv</em> (em = emphasis = Betonung)</p>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Welcher Tag macht Text fett?',
                    options: ['<strong>', '<em>'],
                    correct: 0,
                    explanation: '<strong> = fett (stark!). <em> = kursiv (betont).'
                },
                {
                    type: 'info',
                    content: `
                        <h3>🔀 Kombinieren!</h3>
                        <p>Du kannst Tags auch <strong>kombinieren</strong>:</p>
                        <div class="code-example">
&lt;p&gt;Das ist &lt;strong&gt;wichtig&lt;/strong&gt; und das ist &lt;em&gt;betont&lt;/em&gt;.&lt;/p&gt;
&lt;p&gt;Das ist &lt;strong&gt;&lt;em&gt;fett UND kursiv&lt;/em&gt;&lt;/strong&gt;!&lt;/p&gt;
                        </div>
                    `
                },
                {
                    type: 'fill',
                    instruction: 'Mache "wichtig" fett:',
                    code: 'Das ist &lt;___&gt;wichtig&lt;/strong&gt; für dich.',
                    answers: ['strong']
                },
                {
                    type: 'fill',
                    instruction: 'Mache "besonders" kursiv:',
                    code: 'Das ist &lt;___&gt;besonders&lt;/em&gt; cool.',
                    answers: ['em']
                },
                {
                    type: 'write',
                    task: 'Schreibe einen Absatz mit einem fetten und einem kursiven Wort!',
                    starterCode: '<p>\n  \n</p>',
                    hint: 'Nutze <strong>fett</strong> und <em>kursiv</em> innerhalb des <p>-Tags',
                    checks: [
                        { type: 'contains', value: '<strong>', desc: 'Enthält fetten Text' },
                        { type: 'contains', value: '<em>', desc: 'Enthält kursiven Text' }
                    ]
                }
            ]
        },

        // ===== LEKTION 7: Links =====
        {
            num: 7, title: 'Links erstellen', xp: 25,
            subtitle: 'Verbinde Seiten miteinander',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>🔗 Links – Das Herzstück des Internets</h3>
                        <p>Links verbinden Webseiten miteinander. Ohne Links gäbe es kein Internet!</p>
                        <p>So erstellst du einen Link:</p>
                        <div class="code-example">
&lt;a href="https://google.de"&gt;Zu Google&lt;/a&gt;
                        </div>
                        <p><code>&lt;a&gt;</code> = <strong>Anchor</strong> (Anker – weil er dich "verankert")</p>
                        <p><code>href</code> = <strong>Wohin</strong> der Link führt (die URL)</p>
                        <p><code>Zu Google</code> = Der <strong>Text</strong>, den man klickt</p>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Was steht im href-Attribut?',
                    options: [
                        'Die Adresse (URL) wohin der Link führt',
                        'Die Farbe des Links'
                    ],
                    correct: 0,
                    explanation: 'href = "hypertext reference" = die Ziel-Adresse des Links!'
                },
                {
                    type: 'info',
                    content: `
                        <h3>🔓 Links in neuem Tab öffnen</h3>
                        <p>Willst du, dass der Link in einem <strong>neuen Tab</strong> aufgeht?</p>
                        <p>Füge <code>target="_blank"</code> hinzu:</p>
                        <div class="code-example">
&lt;a href="https://google.de" target="_blank"&gt;Google (neuer Tab)&lt;/a&gt;
                        </div>
                    `
                },
                {
                    type: 'fill',
                    instruction: 'Erstelle einen Link zu YouTube:',
                    code: '&lt;___ href="https://youtube.com"&gt;Zu YouTube&lt;/a&gt;',
                    answers: ['a']
                },
                {
                    type: 'write',
                    task: 'Erstelle einen Link zu einer beliebigen Webseite!',
                    starterCode: '<p>Besuche meine Lieblingsseite:</p>\n',
                    hint: 'Schreibe <a href="https://...">Linktext</a>',
                    checks: [
                        { type: 'contains', value: '<a ', desc: 'Enthält einen Link' },
                        { type: 'contains', value: 'href=', desc: 'Link hat ein href-Attribut' }
                    ]
                }
            ]
        },

        // ===== LEKTION 8: Bilder =====
        {
            num: 8, title: 'Bilder einbinden', xp: 25,
            subtitle: 'Bilder auf deiner Webseite zeigen',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>🖼️ Bilder mit img</h3>
                        <p>Bilder werden mit dem <code>&lt;img&gt;</code>-Tag eingebunden:</p>
                        <div class="code-example">
&lt;img src="foto.jpg" alt="Ein schönes Foto"&gt;
                        </div>
                        <p><code>src</code> = <strong>Source</strong> (Quelle) – wo das Bild ist</p>
                        <p><code>alt</code> = <strong>Alternativtext</strong> – Beschreibung für Blinde oder wenn das Bild nicht lädt</p>
                        <div class="highlight-box">
                            <p>💡 <code>&lt;img&gt;</code> hat <strong>keinen schließenden Tag</strong>! Es ist selbstschließend.</p>
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Braucht der img-Tag einen schließenden Tag?',
                    options: [
                        'Ja, man braucht </img>',
                        'Nein, img ist selbstschließend'
                    ],
                    correct: 1,
                    explanation: 'Richtig! <img> ist wie <br> – selbstschließend, kein </img> nötig!'
                },
                {
                    type: 'fill',
                    instruction: 'Binde ein Bild ein:',
                    code: '&lt;___ src="hund.jpg" ___="Ein süßer Hund"&gt;',
                    answers: ['img', 'alt']
                },
                {
                    type: 'info',
                    content: `
                        <h3>♿ Warum ist alt so wichtig?</h3>
                        <p>Der <code>alt</code>-Text ist <strong>super wichtig</strong>:</p>
                        <p>🔹 Blinde Menschen nutzen <strong>Screenreader</strong> die den alt-Text vorlesen</p>
                        <p>🔹 Wenn ein Bild nicht lädt, sieht man den alt-Text</p>
                        <p>🔹 Google benutzt den alt-Text um Bilder zu finden</p>
                        <div class="highlight-box warning">
                            <p>⚠️ <strong>Immer</strong> einen alt-Text schreiben! Das ist guter Stil.</p>
                        </div>
                    `
                },
                {
                    type: 'write',
                    task: 'Erstelle eine Seite mit einer Überschrift und einem Bild (mit alt-Text)!',
                    starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>Meine Bilder</h1>\n  \n</body>\n</html>',
                    hint: 'Füge <img src="bild.jpg" alt="Beschreibung"> unter der Überschrift ein',
                    checks: [
                        { type: 'contains', value: '<img ', desc: 'Enthält ein Bild' },
                        { type: 'contains', value: 'alt=', desc: 'Bild hat einen alt-Text' }
                    ]
                }
            ]
        },

        // ===== LEKTION 9: Listen =====
        {
            num: 9, title: 'Listen erstellen', xp: 25,
            subtitle: 'Aufzählungen und nummerierte Listen',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>📋 Zwei Arten von Listen</h3>
                        <p>HTML hat <strong>zwei Listentypen</strong>:</p>
                        <p>🔹 <code>&lt;ul&gt;</code> = <strong>Unordered List</strong> (Punkte •)</p>
                        <p>🔹 <code>&lt;ol&gt;</code> = <strong>Ordered List</strong> (Nummern 1. 2. 3.)</p>
                        <p>Jeder Eintrag wird mit <code>&lt;li&gt;</code> geschrieben (list item):</p>
                        <div class="code-example">
&lt;ul&gt;
  &lt;li&gt;Äpfel&lt;/li&gt;
  &lt;li&gt;Bananen&lt;/li&gt;
  &lt;li&gt;Kirschen&lt;/li&gt;
&lt;/ul&gt;
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Welcher Tag erstellt eine nummerierte Liste?',
                    options: ['<ol> (ordered list)', '<ul> (unordered list)'],
                    correct: 0,
                    explanation: 'ol = ordered = geordnet = mit Nummern! ul = unordered = ungeordnet = mit Punkten.'
                },
                {
                    type: 'fill',
                    instruction: 'Erstelle eine Einkaufsliste:',
                    code: '&lt;___&gt;\n  &lt;li&gt;Milch&lt;/li&gt;\n  &lt;___&gt;Brot&lt;/li&gt;\n  &lt;li&gt;Eier&lt;/li&gt;\n&lt;/ul&gt;',
                    answers: ['ul', 'li']
                },
                {
                    type: 'write',
                    task: 'Erstelle eine nummerierte Liste (ol) mit 3 Dingen die du heute machen willst!',
                    starterCode: '<h2>Meine To-Do Liste</h2>\n',
                    hint: 'Nutze <ol> <li>Sache 1</li> <li>Sache 2</li> <li>Sache 3</li> </ol>',
                    checks: [
                        { type: 'contains', value: '<ol>', desc: 'Enthält <ol>' },
                        { type: 'contains', value: '<li>', desc: 'Enthält Listeneinträge' }
                    ]
                }
            ]
        },

        // ===== LEKTION 10: Kommentare =====
        {
            num: 10, title: 'Kommentare', xp: 20,
            subtitle: 'Geheime Notizen im Code',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>💬 Unsichtbare Notizen</h3>
                        <p>Kommentare sind <strong>unsichtbar</strong> im Browser – nur du siehst sie im Code!</p>
                        <div class="code-example">
&lt;!-- Das ist ein Kommentar --&gt;
&lt;p&gt;Das sieht man.&lt;/p&gt;
&lt;!-- Das sieht niemand --&gt;
                        </div>
                        <p>Beginnt mit <code>&lt;!--</code> und endet mit <code>--&gt;</code></p>
                        <div class="highlight-box warning">
                            <p>⚠️ NICHT mit <code>//</code> wie in JavaScript! In HTML immer <code>&lt;!-- --&gt;</code></p>
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Wie schreibt man einen Kommentar in HTML?',
                    options: [
                        '<!-- Kommentar -->',
                        '// Kommentar'
                    ],
                    correct: 0,
                    explanation: 'In HTML nutzt man <!-- --> für Kommentare. // ist für JavaScript!'
                },
                {
                    type: 'fill',
                    instruction: 'Schreibe einen Kommentar:',
                    code: '&lt;!___ Das ist eine Notiz ___&gt;\n&lt;p&gt;Sichtbarer Text&lt;/p&gt;',
                    answers: ['--', '--']
                },
                {
                    type: 'write',
                    task: 'Schreibe einen Kommentar und darunter einen sichtbaren Absatz!',
                    starterCode: '',
                    hint: '<!-- Dein Kommentar --> und dann <p>Sichtbarer Text</p>',
                    checks: [
                        { type: 'contains', value: '<!--', desc: 'Enthält einen Kommentar' },
                        { type: 'contains', value: '<p>', desc: 'Enthält sichtbaren Text' }
                    ]
                }
            ]
        },

        // ===== LEKTION 11: Attribute =====
        {
            num: 11, title: 'HTML Attribute', xp: 25,
            subtitle: 'Extra-Infos für deine Tags',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>⚙️ Was sind Attribute?</h3>
                        <p>Attribute geben Tags <strong>Extra-Informationen</strong>.</p>
                        <p>Stell dir vor, ein Tag ist ein Paket – Attribute sind die <strong>Aufkleber</strong> drauf:</p>
                        <div class="code-example">
&lt;a href="https://google.de"&gt;Google&lt;/a&gt;
&lt;img src="foto.jpg" alt="Foto"&gt;
                        </div>
                        <p><code>href</code>, <code>src</code>, <code>alt</code> – das sind alles <strong>Attribute</strong>!</p>
                        <div class="highlight-box">
                            <p>📌 Attribute stehen IMMER im <strong>öffnenden Tag</strong></p>
                            <p>📌 Format: <code>name="wert"</code></p>
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Wo stehen Attribute?',
                    options: [
                        'Im öffnenden Tag: <tag attribut="wert">',
                        'Im schließenden Tag: </tag attribut="wert">'
                    ],
                    correct: 0,
                    explanation: 'Attribute stehen IMMER im öffnenden Tag!'
                },
                {
                    type: 'fill',
                    instruction: 'Gib dem Link das richtige Attribut:',
                    code: '&lt;a ___="https://youtube.com"&gt;YouTube&lt;/a&gt;',
                    answers: ['href']
                },
                {
                    type: 'write',
                    task: 'Erstelle einen Link mit href UND target="_blank" (öffnet in neuem Tab)!',
                    starterCode: '',
                    hint: '<a href="https://..." target="_blank">Linktext</a>',
                    checks: [
                        { type: 'contains', value: 'href=', desc: 'Enthält href' },
                        { type: 'contains', value: 'target=', desc: 'Enthält target' }
                    ]
                }
            ]
        },

        // ===== LEKTION 12: Verschachtelung =====
        {
            num: 12, title: 'Tags verschachteln', xp: 25,
            subtitle: 'Tags in Tags – die richtige Reihenfolge',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>🪆 Verschachtelung</h3>
                        <p>Tags können <strong>ineinander</strong> stehen – wie russische Puppen:</p>
                        <div class="code-example">
&lt;body&gt;
  &lt;h1&gt;Titel&lt;/h1&gt;
  &lt;p&gt;Text mit &lt;strong&gt;fettem&lt;/strong&gt; Wort.&lt;/p&gt;
&lt;/body&gt;
                        </div>
                        <div class="highlight-box">
                            <p>📌 <strong>Goldene Regel:</strong> Was zuerst geöffnet wird, wird ZULETZT geschlossen!</p>
                            <p>✅ Richtig: <code>&lt;p&gt;&lt;strong&gt;...&lt;/strong&gt;&lt;/p&gt;</code></p>
                            <p>❌ Falsch: <code>&lt;p&gt;&lt;strong&gt;...&lt;/p&gt;&lt;/strong&gt;</code></p>
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Welche Verschachtelung ist RICHTIG?',
                    options: [
                        '<p><strong>Text</strong></p>',
                        '<p><strong>Text</p></strong>'
                    ],
                    correct: 0,
                    explanation: 'Wie Klammern: ( [ text ] ) ✅ nicht ( [ text ) ] ❌'
                },
                {
                    type: 'fill',
                    instruction: 'Verschachtle die Tags richtig:',
                    code: '&lt;p&gt;Das ist &lt;em&gt;kursiv&lt;/___&gt;&lt;/___&gt;',
                    answers: ['em', 'p']
                },
                {
                    type: 'write',
                    task: 'Schreibe einen Absatz mit einem fetten Link darin!',
                    starterCode: '<p>\n  \n</p>',
                    hint: '<p>Klicke <strong><a href="...">hier</a></strong>!</p>',
                    checks: [
                        { type: 'contains', value: '<p>', desc: 'Enthält <p>' },
                        { type: 'contains', value: '<strong>', desc: 'Enthält <strong>' },
                        { type: 'contains', value: '<a ', desc: 'Enthält einen Link' }
                    ]
                }
            ]
        },

        // ===== LEKTION 13: Tabellen =====
        {
            num: 13, title: 'Tabellen erstellen', xp: 25,
            subtitle: 'Daten in Zeilen und Spalten ordnen',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>📊 Tabellen in HTML</h3>
                        <p>Tabellen bestehen aus 4 Tags:</p>
                        <p><code>&lt;table&gt;</code> = Die ganze Tabelle</p>
                        <p><code>&lt;tr&gt;</code> = Eine <strong>Zeile</strong> (table row)</p>
                        <p><code>&lt;th&gt;</code> = <strong>Kopfzelle</strong> (table header) – fett!</p>
                        <p><code>&lt;td&gt;</code> = <strong>Datenzelle</strong> (table data) – normal</p>
                        <div class="code-example">
&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Name&lt;/th&gt;
    &lt;th&gt;Alter&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Max&lt;/td&gt;
    &lt;td&gt;25&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Welcher Tag erstellt eine Tabellenzeile?',
                    options: ['<tr> (table row)', '<td> (table data)'],
                    correct: 0,
                    explanation: 'tr = table ROW = Zeile. td = einzelne Datenzelle IN einer Zeile.'
                },
                {
                    type: 'fill',
                    instruction: 'Vervollständige die Tabelle:',
                    code: '&lt;___&gt;\n  &lt;tr&gt;\n    &lt;___&gt;Produkt&lt;/th&gt;\n    &lt;th&gt;Preis&lt;/th&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;',
                    answers: ['table', 'th']
                },
                {
                    type: 'write',
                    task: 'Erstelle eine kleine Tabelle mit 2 Spalten und 2 Zeilen!',
                    starterCode: '<table>\n  \n</table>',
                    hint: 'Nutze <tr> für Zeilen, <th> für Kopf, <td> für Daten',
                    checks: [
                        { type: 'contains', value: '<tr>', desc: 'Enthält Zeilen' },
                        { type: 'contains', value: '<td>', desc: 'Enthält Datenzellen' }
                    ]
                }
            ]
        },

        // ===== LEKTION 14: Formulare =====
        {
            num: 14, title: 'Formulare', xp: 25,
            subtitle: 'Eingabefelder und Buttons erstellen',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>📝 Formulare – Nutzereingaben</h3>
                        <p>Mit Formularen können Benutzer Daten eingeben (Name, E-Mail, Nachrichten...).</p>
                        <div class="code-example">
&lt;form&gt;
  &lt;input type="text" placeholder="Dein Name"&gt;
  &lt;button&gt;Absenden&lt;/button&gt;
&lt;/form&gt;
                        </div>
                        <p><code>&lt;form&gt;</code> = Container für das ganze Formular</p>
                        <p><code>&lt;input&gt;</code> = Eingabefeld (selbstschließend!)</p>
                        <p><code>&lt;button&gt;</code> = Klickbarer Button</p>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Welcher Tag erstellt ein Eingabefeld?',
                    options: ['<input>', '<textfield>'],
                    correct: 0,
                    explanation: '<input> erstellt Eingabefelder. Es gibt verschiedene Typen: text, email, password...'
                },
                {
                    type: 'info',
                    content: `
                        <h3>🔤 Verschiedene Input-Typen</h3>
                        <div class="code-example">
&lt;input type="text"&gt;      → Normaler Text
&lt;input type="email"&gt;     → E-Mail
&lt;input type="password"&gt;  → Passwort (versteckt)
&lt;input type="number"&gt;    → Nur Zahlen
                        </div>
                    `
                },
                {
                    type: 'fill',
                    instruction: 'Erstelle ein Formular mit E-Mail-Feld:',
                    code: '&lt;___&gt;\n  &lt;input type="___" placeholder="Deine E-Mail"&gt;\n  &lt;button&gt;Senden&lt;/button&gt;\n&lt;/form&gt;',
                    answers: ['form', 'email']
                },
                {
                    type: 'write',
                    task: 'Erstelle ein Kontaktformular mit einem Namensfeld und einem Button!',
                    starterCode: '<h2>Kontakt</h2>\n',
                    hint: '<form> <input type="text" placeholder="Name"> <button>Senden</button> </form>',
                    checks: [
                        { type: 'contains', value: '<form>', desc: 'Enthält <form>' },
                        { type: 'contains', value: '<input', desc: 'Enthält Eingabefeld' },
                        { type: 'contains', value: '<button>', desc: 'Enthält Button' }
                    ]
                }
            ]
        },

        // ===== LEKTION 15: Semantische Tags =====
        {
            num: 15, title: 'Semantische Struktur', xp: 30,
            subtitle: 'Deine Seite professionell aufbauen',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>🏗️ Semantisches HTML</h3>
                        <p><strong>Semantische Tags</strong> beschreiben die <em>Bedeutung</em> des Inhalts:</p>
                        <p><code>&lt;header&gt;</code> = Kopfbereich der Seite</p>
                        <p><code>&lt;nav&gt;</code> = Navigation (Menü)</p>
                        <p><code>&lt;main&gt;</code> = Hauptinhalt</p>
                        <p><code>&lt;footer&gt;</code> = Fußbereich der Seite</p>
                        <div class="code-example">
&lt;header&gt;
  &lt;h1&gt;Meine Seite&lt;/h1&gt;
  &lt;nav&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;
  &lt;p&gt;Hier ist der Inhalt!&lt;/p&gt;
&lt;/main&gt;
&lt;footer&gt;
  &lt;p&gt;© 2025&lt;/p&gt;
&lt;/footer&gt;
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Welcher Tag enthält den Hauptinhalt der Seite?',
                    options: ['<main>', '<body>'],
                    correct: 0,
                    explanation: '<main> markiert den Hauptinhalt. <body> enthält ALLES (auch header und footer).'
                },
                {
                    type: 'fill',
                    instruction: 'Fülle die semantische Struktur:',
                    code: '&lt;___&gt;\n  &lt;h1&gt;Meine Seite&lt;/h1&gt;\n&lt;/header&gt;\n&lt;___&gt;\n  &lt;p&gt;Inhalt...&lt;/p&gt;\n&lt;/main&gt;\n&lt;___&gt;\n  &lt;p&gt;© 2025&lt;/p&gt;\n&lt;/footer&gt;',
                    answers: ['header', 'main', 'footer']
                },
                {
                    type: 'write',
                    task: 'Erstelle eine komplette Seite mit header, main und footer!',
                    starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  \n</body>\n</html>',
                    hint: 'Nutze <header>, <main>, <footer> mit Inhalt darin',
                    checks: [
                        { type: 'contains', value: '<header>', desc: 'Enthält <header>' },
                        { type: 'contains', value: '<main>', desc: 'Enthält <main>' },
                        { type: 'contains', value: '<footer>', desc: 'Enthält <footer>' }
                    ]
                }
            ]
        }
    ]
};
