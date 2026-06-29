/* ============================================
   CodePilot – 50 Level Definitions (HTML)
   ============================================ */

const CHAPTERS = [
    { num: 1, title: 'HTML Grundlagen', subtitle: 'Die Basis verstehen', levels: '1-10', emoji: '🏗️' },
    { num: 2, title: 'Text & Formatierung', subtitle: 'Inhalte gestalten', levels: '11-20', emoji: '✍️' },
    { num: 3, title: 'Struktur & Layout', subtitle: 'Seiten aufbauen', levels: '21-30', emoji: '📐' },
    { num: 4, title: 'Multimedia & Einbettung', subtitle: 'Medien einbinden', levels: '31-40', emoji: '🎬' },
    { num: 5, title: 'Fortgeschritten & Projekte', subtitle: 'Zum Meister werden', levels: '41-50', emoji: '🏆' },
];

const LEVELS = [
    // ====================== CHAPTER 1: HTML Grundlagen (1-10) ======================
    {
        num: 1, chapter: 1, title: 'Was ist HTML?', type: 'quiz', xp: 20,
        description: `<h3>📖 Was ist HTML?</h3>
            <p>Stell dir vor, du baust ein Haus. <strong>HTML</strong> ist der Bauplan – es sagt dem Browser, welche Teile die Seite hat!</p>
            <p>HTML steht für <strong>HyperText Markup Language</strong> und ist die Sprache, in der <em>jede</em> Webseite geschrieben ist.</p>
            <p>📌 <strong>Wichtig:</strong> HTML ist <em>keine</em> Programmiersprache – es ist eine <strong>Auszeichnungssprache</strong>, die Inhalte beschreibt.</p>
            <p>💡 <strong>Beispiel:</strong> Wenn du eine Webseite siehst mit einer Überschrift und Text, dann hat jemand HTML benutzt, um dem Browser zu sagen: "Das hier ist eine Überschrift" und "Das hier ist ein Absatz".</p>`,
        gameData: {
            question: 'Wofür steht HTML?',
            options: [
                'HyperText Markup Language',
                'High Tech Modern Language',
                'Home Tool Markup Language',
                'HyperText Machine Language'
            ],
            correct: 0,
            explanation: 'HTML = HyperText Markup Language. Es ist keine Programmiersprache, sondern eine Auszeichnungssprache – wie ein Bauplan für Webseiten!'
        }
    },
    {
        num: 2, chapter: 1, title: 'HTML Tags verstehen', type: 'quiz', xp: 20,
        description: `<h3>🏷️ Was sind HTML Tags?</h3>
            <p>Tags sind die Bausteine von HTML. Sie stehen in <strong>spitzen Klammern</strong> <code>&lt; &gt;</code> und sagen dem Browser, was der Inhalt ist.</p>
            <p>📦 Stell dir Tags wie Verpackungen vor:</p>
            <p><code>&lt;p&gt;</code> <em>← Öffnender Tag (Schachtel auf)</em></p>
            <p><code>Hallo Welt!</code> <em>← Inhalt (was reinkommt)</em></p>
            <p><code>&lt;/p&gt;</code> <em>← Schließender Tag (Schachtel zu)</em></p>
            <p>⚡ Der <strong>schließende Tag</strong> hat immer einen <strong>Schrägstrich /</strong> vor dem Namen!</p>`,
        gameData: {
            question: 'Welches ist der korrekte schließende Tag für <p>?',
            options: ['</p>', '<p/>', '<close p>', '<p>'],
            correct: 0,
            explanation: 'Schließende Tags haben IMMER einen Schrägstrich / vor dem Tag-Namen: </p>. Merke: Schrägstrich = "Mach zu!"'
        }
    },
    {
        num: 3, chapter: 1, title: 'Dein erstes Dokument', type: 'completion', xp: 25,
        description: `<h3>📄 Dein erstes HTML-Dokument</h3>
            <p>Jede HTML-Seite hat eine feste Grundstruktur – wie ein Brief immer Absender, Empfänger und Inhalt hat:</p>
            <p>🔹 <code>&lt;!DOCTYPE html&gt;</code> – Sagt: "Das ist HTML5!"</p>
            <p>🔹 <code>&lt;html&gt;</code> – Der Container für ALLES</p>
            <p>🔹 <code>&lt;head&gt;</code> – Unsichtbare Infos (Titel, Einstellungen)</p>
            <p>🔹 <code>&lt;body&gt;</code> – Alles was man SIEHT</p>
            <p>💡 <strong>Merke:</strong> head = Gehirn (unsichtbar), body = Körper (sichtbar)!</p>`,
        gameData: {
            instruction: 'Fülle die Lücken aus, um ein gültiges HTML-Dokument zu erstellen:',
            code: '&lt;!DOCTYPE ___&gt;\n&lt;___&gt;\n  &lt;head&gt;\n    &lt;title&gt;Meine Seite&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;___&gt;\n    &lt;h1&gt;Hallo Welt!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;',
            answers: ['html', 'html', 'body']
        }
    },
    {
        num: 4, chapter: 1, title: 'Überschriften', type: 'quiz', xp: 20,
        description: `<h3>📝 Überschriften h1 bis h6</h3>
            <p>HTML hat <strong>6 Größen</strong> für Überschriften – wie in einer Zeitung:</p>
            <p style="font-size: 1.5rem; font-weight: bold;">h1 – Hauptüberschrift (riesig!)</p>
            <p style="font-size: 1.3rem; font-weight: bold;">h2 – Unterüberschrift</p>
            <p style="font-size: 1.1rem; font-weight: bold;">h3 – Abschnitts-Titel</p>
            <p style="font-size: 0.95rem; font-weight: bold;">h4 – Kleiner Titel</p>
            <p style="font-size: 0.85rem; font-weight: bold;">h5 – Noch kleiner</p>
            <p style="font-size: 0.75rem; font-weight: bold;">h6 – Am kleinsten</p>
            <p>📌 <strong>Regel:</strong> Jede Seite sollte nur EINE <code>&lt;h1&gt;</code> haben!</p>`,
        gameData: {
            question: 'Welcher Tag erzeugt die größte Überschrift?',
            options: ['<h1>', '<h6>', '<heading>', '<big>'],
            correct: 0,
            explanation: '<h1> ist die größte Überschrift (1 = wichtigste!), <h6> die kleinste. Tags wie <heading> oder <big> gibt es nicht!'
        }
    },
    {
        num: 5, chapter: 1, title: 'Absätze', type: 'completion', xp: 25,
        description: `<h3>📃 Absätze mit &lt;p&gt;</h3>
            <p>Der <code>&lt;p&gt;</code>-Tag steht für <strong>"paragraph"</strong> (englisch für Absatz).</p>
            <p>📌 <strong>So funktioniert's:</strong></p>
            <p><code>&lt;p&gt;Das ist ein Absatz.&lt;/p&gt;</code></p>
            <p><code>&lt;p&gt;Das ist ein zweiter Absatz.&lt;/p&gt;</code></p>
            <p>💡 <strong>Tipp:</strong> Der Browser fügt automatisch Abstand zwischen Absätzen ein – du musst keine Leerzeilen machen!</p>
            <p>⚠️ <strong>Achtung:</strong> Einfache Enter-Tasten im Code erzeugen KEINEN Zeilenumbruch im Browser! Dafür brauchst du <code>&lt;p&gt;</code> oder <code>&lt;br&gt;</code>.</p>`,
        gameData: {
            instruction: 'Erstelle zwei Absätze mit dem richtigen HTML-Tag:',
            code: '&lt;___&gt;Das ist der erste Absatz.&lt;/p&gt;\n&lt;___&gt;Das ist der zweite Absatz.&lt;/p&gt;',
            answers: ['p', 'p']
        }
    },
    {
        num: 6, chapter: 1, title: 'HTML Kommentare', type: 'bughunt', xp: 30,
        description: `<h3>💬 Kommentare – Geheime Notizen!</h3>
            <p>Kommentare sind <strong>unsichtbare Notizen</strong> im Code, die nur Entwickler sehen können.</p>
            <p>📌 <strong>So schreibst du einen Kommentar:</strong></p>
            <p><code>&lt;!-- Das sieht niemand im Browser --&gt;</code></p>
            <p>💡 <strong>Wofür sind Kommentare gut?</strong></p>
            <p>🔹 Notizen für dich selbst</p>
            <p>🔹 Code erklären</p>
            <p>🔹 Code vorübergehend ausblenden</p>
            <p>⚠️ <strong>Achtung:</strong> Kommentare beginnen mit <code>&lt;!--</code> und enden mit <code>--&gt;</code>. NICHT mit // wie in anderen Sprachen!</p>`,
        gameData: {
            instruction: 'Finde die Zeile mit dem falsch geschriebenen Kommentar!',
            lines: [
                '<!DOCTYPE html>',
                '<html>',
                '<!-- Das ist ein Kommentar -->',
                '<body>',
                '<// Das ist ein falscher Kommentar //>',
                '<h1>Hallo</h1>',
                '</body>',
                '</html>'
            ],
            bugLines: [
                { line: 4, hint: 'Richtig gefunden! 🎉 HTML-Kommentare schreibt man so: &lt;!-- Kommentar --&gt;, NICHT mit // (das ist für JavaScript!)' }
            ]
        }
    },
    {
        num: 7, chapter: 1, title: 'HTML Attribute', type: 'quiz', xp: 20,
        description: `<h3>⚙️ Attribute – Extra-Infos für Tags</h3>
            <p>Attribute geben einem Tag <strong>zusätzliche Informationen</strong>. Sie stehen immer im <strong>öffnenden Tag</strong>.</p>
            <p>📌 <strong>Aufbau:</strong> <code>&lt;tag attribut="wert"&gt;</code></p>
            <p>💡 <strong>Beispiele:</strong></p>
            <p><code>&lt;a href="https://google.de"&gt;Link&lt;/a&gt;</code></p>
            <p>↪ <code>href</code> ist das Attribut, <code>"https://google.de"</code> ist der Wert</p>
            <p><code>&lt;img src="bild.jpg" alt="Ein Bild"&gt;</code></p>
            <p>↪ <code>src</code> = Bildquelle, <code>alt</code> = Beschreibung</p>
            <p>📦 <strong>Merke:</strong> Attribute sind wie Etiketten auf einem Paket – sie geben Extra-Infos!</p>`,
        gameData: {
            question: 'Wie wird ein Attribut in HTML geschrieben?',
            code: '&lt;a ???="https://google.de"&gt;Link&lt;/a&gt;',
            options: [
                'attribut="wert" (im öffnenden Tag)',
                'attribut=wert (ohne Anführungszeichen)',
                '[attribut: wert] (in eckigen Klammern)',
                'attribut->wert (mit Pfeil)'
            ],
            correct: 0,
            explanation: 'Attribute stehen IMMER im öffnenden Tag mit Anführungszeichen: attribut="wert". Merke: Name="Wert"!'
        }
    },
    {
        num: 8, chapter: 1, title: 'Tags verschachteln', type: 'sorter', xp: 30,
        description: `<h3>🪆 Verschachtelung – Tags in Tags!</h3>
            <p>HTML-Tags können wie <strong>russische Matrjoschka-Puppen</strong> ineinander verschachtelt werden.</p>
            <p>📌 <strong>Regel:</strong> Was zuerst geöffnet wird, wird ZULETZT geschlossen!</p>
            <p>✅ <strong>Richtig:</strong> <code>&lt;html&gt;&lt;body&gt;...&lt;/body&gt;&lt;/html&gt;</code></p>
            <p>❌ <strong>Falsch:</strong> <code>&lt;html&gt;&lt;body&gt;...&lt;/html&gt;&lt;/body&gt;</code></p>
            <p>💡 <strong>Eselsbrücke:</strong> Wie Klammern in Mathe: ( [ ... ] ) ✅ aber ( [ ... ) ] ❌</p>`,
        gameData: {
            instruction: 'Bringe die Zeilen in die richtige Reihenfolge – von oben nach unten:',
            lines: [
                '<!DOCTYPE html>',
                '<html>',
                '<head>',
                '<title>Meine Seite</title>',
                '</head>',
                '<body>',
                '<h1>Hallo!</h1>',
                '</body>',
                '</html>'
            ]
        }
    },
    {
        num: 9, chapter: 1, title: 'HTML Grundstruktur', type: 'completion', xp: 25,
        description: `<h3>🏗️ Alles zusammen!</h3>
            <p>Jetzt kennst du alle Teile! Lass uns ein komplettes HTML-Dokument zusammenbauen:</p>
            <p>1️⃣ <code>&lt;!DOCTYPE html&gt;</code> – "Hey Browser, das ist HTML5!"</p>
            <p>2️⃣ <code>&lt;html lang="de"&gt;</code> – Anfang, Sprache = Deutsch</p>
            <p>3️⃣ <code>&lt;head&gt;</code> – Unsichtbare Infos</p>
            <p>4️⃣ <code>&lt;title&gt;</code> – Text im Browser-Tab</p>
            <p>5️⃣ <code>&lt;body&gt;</code> – Alles was man sieht!</p>
            <p>💡 <strong>Pro-Tipp:</strong> <code>lang="de"</code> sagt dem Browser, dass die Seite auf Deutsch ist!</p>`,
        gameData: {
            instruction: 'Vervollständige die HTML-Grundstruktur:',
            code: '&lt;!DOCTYPE html&gt;\n&lt;html lang="___"&gt;\n  &lt;___&gt;\n    &lt;title&gt;CodePilot&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;___&gt;Willkommen!&lt;/h1&gt;\n    &lt;p&gt;Mein erster Text.&lt;/___&gt;\n  &lt;/body&gt;\n&lt;/html&gt;',
            answers: ['de', 'head', 'h1', 'p']
        }
    },
    {
        num: 10, chapter: 1, title: 'Kapitel 1 Abschluss', type: 'livecode', xp: 40,
        description: `<h3>🎓 Kapitel 1 Abschluss – Zeig was du kannst!</h3>
            <p>🎉 Du hast die Grundlagen gelernt! Zeit für deine <strong>erste eigene HTML-Seite</strong>!</p>
            <p>📌 <strong>Deine Aufgabe:</strong></p>
            <p>1. Erstelle eine <code>&lt;h1&gt;</code> Überschrift mit dem Text "Hallo Welt"</p>
            <p>2. Erstelle einen <code>&lt;p&gt;</code> Absatz darunter</p>
            <p>💡 <strong>Tipp:</strong> Schreibe deinen Code zwischen <code>&lt;body&gt;</code> und <code>&lt;/body&gt;</code>!</p>
            <p>👀 Rechts siehst du live, wie deine Seite aussieht!</p>`,
        gameData: {
            task: 'Erstelle eine HTML-Seite mit einer &lt;h1&gt; Überschrift "Hallo Welt" und einem &lt;p&gt; Absatz darunter.',
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Meine Seite</title>\n</head>\n<body>\n  \n</body>\n</html>',
            hint: 'Schreibe zwischen <body> und </body> ein <h1>Hallo Welt</h1> und darunter ein <p>Dein Text hier</p>',
            checks: [
                { type: 'contains', value: '<h1>', desc: 'Enthält eine <h1> Überschrift' },
                { type: 'regex', value: '<h1>.*hallo.*welt.*</h1>', desc: 'Überschrift enthält "Hallo Welt"' },
                { type: 'contains', value: '<p>', desc: 'Enthält einen <p> Absatz' }
            ]
        }
    },

    // ====================== CHAPTER 2: Text & Formatierung (11-20) ======================
    {
        num: 11, chapter: 2, title: 'Fett & Kursiv', type: 'completion', xp: 25,
        description: '<h3>✨ Textformatierung</h3><p><code>&lt;strong&gt;</code> macht Text <strong>fett</strong> und <code>&lt;em&gt;</code> macht Text <em>kursiv</em>. Es gibt auch <code>&lt;b&gt;</code> und <code>&lt;i&gt;</code>, aber strong/em sind semantisch besser.</p>',
        gameData: {
            instruction: 'Mache "wichtig" fett und "betont" kursiv:',
            code: 'Das ist &lt;___&gt;wichtig&lt;/strong&gt; und das ist &lt;___&gt;betont&lt;/em&gt;.',
            answers: ['strong', 'em']
        }
    },
    {
        num: 12, chapter: 2, title: 'Listen erstellen', type: 'quiz', xp: 20,
        description: '<h3>📋 Listen</h3><p>HTML hat zwei Listentypen: <code>&lt;ul&gt;</code> (ungeordnet, mit Punkten) und <code>&lt;ol&gt;</code> (geordnet, mit Nummern). Einzelne Einträge werden mit <code>&lt;li&gt;</code> geschrieben.</p>',
        gameData: {
            question: 'Welcher Tag erstellt eine nummerierte Liste?',
            options: ['<ol>', '<ul>', '<nl>', '<list>'],
            correct: 0,
            explanation: '<ol> = ordered list (nummeriert), <ul> = unordered list (Aufzählungszeichen). <nl> und <list> existieren nicht!'
        }
    },
    {
        num: 13, chapter: 2, title: 'Listen aufbauen', type: 'sorter', xp: 30,
        description: '<h3>📝 Listen-Struktur</h3><p>Listen bestehen aus dem Listen-Container (<code>ul</code> oder <code>ol</code>) und den einzelnen Listen-Einträgen (<code>li</code>).</p>',
        gameData: {
            instruction: 'Bringe den Code für eine Einkaufsliste in die richtige Reihenfolge:',
            lines: [
                '<h2>Einkaufsliste</h2>',
                '<ul>',
                '  <li>Milch</li>',
                '  <li>Brot</li>',
                '  <li>Eier</li>',
                '</ul>'
            ]
        }
    },
    {
        num: 14, chapter: 2, title: 'Links erstellen', type: 'completion', xp: 25,
        description: '<h3>🔗 Hyperlinks</h3><p>Links werden mit dem <code>&lt;a&gt;</code>-Tag erstellt. Das Attribut <code>href</code> gibt die Ziel-URL an: <code>&lt;a href="url"&gt;Text&lt;/a&gt;</code></p>',
        gameData: {
            instruction: 'Erstelle einen Link zu Google:',
            code: '&lt;___ href="https://google.de"&gt;Zu Google&lt;/___&gt;',
            answers: ['a', 'a']
        }
    },
    {
        num: 15, chapter: 2, title: 'Links: Neuer Tab', type: 'quiz', xp: 20,
        description: '<h3>🔗 Links in neuem Tab</h3><p>Mit dem Attribut <code>target="_blank"</code> öffnet sich ein Link in einem neuen Tab.</p>',
        gameData: {
            question: 'Welches Attribut öffnet einen Link in einem neuen Tab?',
            code: '&lt;a href="url" ???&gt;Link&lt;/a&gt;',
            options: ['target="_blank"', 'newtab="true"', 'open="new"', 'window="_blank"'],
            correct: 0,
            explanation: 'target="_blank" öffnet den Link in einem neuen Browser-Tab.'
        }
    },
    {
        num: 16, chapter: 2, title: 'Bilder einbinden', type: 'completion', xp: 25,
        description: '<h3>🖼️ Bilder</h3><p>Bilder werden mit <code>&lt;img&gt;</code> eingebunden. Wichtige Attribute: <code>src</code> (Bildquelle) und <code>alt</code> (Beschreibung). Der img-Tag hat keinen schließenden Tag!</p>',
        gameData: {
            instruction: 'Binde ein Bild mit Alt-Text ein:',
            code: '&lt;___ src="foto.jpg" ___="Ein schönes Foto"&gt;',
            answers: ['img', 'alt']
        }
    },
    {
        num: 17, chapter: 2, title: 'Alt-Text Pflicht', type: 'bughunt', xp: 30,
        description: '<h3>♿ Barrierefreiheit</h3><p>Der <code>alt</code>-Text bei Bildern ist wichtig für Screenreader und wenn ein Bild nicht laden kann. Jedes Bild sollte einen sinnvollen Alt-Text haben!</p>',
        gameData: {
            instruction: 'Finde das Bild ohne Alt-Text!',
            lines: [
                '<h1>Meine Galerie</h1>',
                '<img src="wald.jpg" alt="Ein grüner Wald">',
                '<img src="meer.jpg" alt="Blaues Meer">',
                '<img src="berg.jpg">',
                '<img src="stadt.jpg" alt="Stadtbild bei Nacht">',
                '<p>Schöne Bilder!</p>'
            ],
            bugLines: [
                { line: 3, hint: 'Dieses Bild hat keinen alt-Text! Schreibe z.B.: alt="Berglandschaft"' }
            ]
        }
    },
    {
        num: 18, chapter: 2, title: 'Zeilenumbruch & Linie', type: 'match', xp: 30,
        description: '<h3>↩️ Umbrüche & Linien</h3><p><code>&lt;br&gt;</code> erzeugt einen Zeilenumbruch, <code>&lt;hr&gt;</code> eine horizontale Trennlinie. Beide sind selbstschließende Tags.</p>',
        gameData: {
            instruction: 'Verbinde jeden Tag mit seiner Bedeutung:',
            pairs: [
                { left: '<code>&lt;br&gt;</code>', right: 'Zeilenumbruch' },
                { left: '<code>&lt;hr&gt;</code>', right: 'Horizontale Trennlinie' },
                { left: '<code>&lt;p&gt;</code>', right: 'Textabsatz' },
                { left: '<code>&lt;h1&gt;</code>', right: 'Hauptüberschrift' }
            ]
        }
    },
    {
        num: 19, chapter: 2, title: 'Zitate & Code', type: 'quiz', xp: 20,
        description: '<h3>💬 Blockquote & Code</h3><p><code>&lt;blockquote&gt;</code> zeigt ein Zitat an. <code>&lt;code&gt;</code> zeigt Programmcode an, und <code>&lt;pre&gt;</code> behält die Formatierung bei.</p>',
        gameData: {
            question: 'Welcher Tag wird verwendet um ein Zitat zu markieren?',
            options: ['<blockquote>', '<quote>', '<cite>', '<zitat>'],
            correct: 0,
            explanation: '<blockquote> ist der richtige Tag für Block-Zitate. <cite> gibt es auch, ist aber für Quellangaben.'
        }
    },
    {
        num: 20, chapter: 2, title: 'Kapitel 2 Abschluss', type: 'livecode', xp: 40,
        description: '<h3>🎓 Kapitel 2 Abschluss!</h3><p>Erstelle eine Seite mit formatiertem Text, einer Liste und einem Link!</p>',
        gameData: {
            task: 'Erstelle eine Seite mit: einer Überschrift, einem fetten Wort, einer Liste mit 3 Einträgen, und einem Link.',
            starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  \n</body>\n</html>',
            hint: 'Nutze <h1>, <strong>, <ul> mit <li>, und <a href="...">',
            checks: [
                { type: 'contains', value: '<h1>', desc: 'Enthält eine Überschrift' },
                { type: 'contains', value: '<strong>', desc: 'Enthält fetten Text' },
                { type: 'contains', value: '<ul>', desc: 'Enthält eine Liste' },
                { type: 'contains', value: '<li>', desc: 'Enthält Listeneinträge' },
                { type: 'contains', value: '<a ', desc: 'Enthält einen Link' }
            ]
        }
    },

    // ====================== CHAPTER 3: Struktur & Layout (21-30) ======================
    {
        num: 21, chapter: 3, title: 'Div & Span', type: 'quiz', xp: 20,
        description: '<h3>📦 Container</h3><p><code>&lt;div&gt;</code> ist ein Block-Container (neue Zeile). <code>&lt;span&gt;</code> ist ein Inline-Container (in der gleichen Zeile). Beide werden zum Gruppieren verwendet.</p>',
        gameData: {
            question: 'Was ist der Unterschied zwischen <div> und <span>?',
            options: [
                'div ist Block-Element, span ist Inline-Element',
                'div ist für Text, span ist für Bilder',
                'Es gibt keinen Unterschied',
                'span ist veraltet'
            ],
            correct: 0,
            explanation: 'div erzeugt einen Block (neue Zeile), span bleibt inline (in der Zeile). Beide sind Container ohne eigenes Aussehen.'
        }
    },
    {
        num: 22, chapter: 3, title: 'Tabellen erstellen', type: 'completion', xp: 25,
        description: '<h3>📊 Tabellen</h3><p>Tabellen bestehen aus: <code>&lt;table&gt;</code> (Container), <code>&lt;tr&gt;</code> (Zeile), <code>&lt;th&gt;</code> (Kopfzelle) und <code>&lt;td&gt;</code> (Datenzelle).</p>',
        gameData: {
            instruction: 'Vervollständige die Tabelle:',
            code: '&lt;___&gt;\n  &lt;tr&gt;\n    &lt;___&gt;Name&lt;/th&gt;\n    &lt;th&gt;Alter&lt;/th&gt;\n  &lt;/tr&gt;\n  &lt;___&gt;\n    &lt;td&gt;Max&lt;/td&gt;\n    &lt;td&gt;25&lt;/td&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;',
            answers: ['table', 'th', 'tr']
        }
    },
    {
        num: 23, chapter: 3, title: 'Tabellen-Struktur', type: 'sorter', xp: 30,
        description: '<h3>📊 Tabellen richtig aufbauen</h3><p>Tabellen können mit <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> und <code>&lt;tfoot&gt;</code> strukturiert werden.</p>',
        gameData: {
            instruction: 'Bringe den Tabellen-Code in die richtige Reihenfolge:',
            lines: [
                '<table>',
                '<thead>',
                '  <tr><th>Produkt</th><th>Preis</th></tr>',
                '</thead>',
                '<tbody>',
                '  <tr><td>Laptop</td><td>999€</td></tr>',
                '</tbody>',
                '</table>'
            ]
        }
    },
    {
        num: 24, chapter: 3, title: 'Formulare: Input', type: 'completion', xp: 25,
        description: '<h3>📝 Formulare</h3><p>Formulare werden mit <code>&lt;form&gt;</code> erstellt. <code>&lt;input&gt;</code> erzeugt Eingabefelder mit verschiedenen Typen: text, email, password, number.</p>',
        gameData: {
            instruction: 'Erstelle ein Formular mit einem Text-Eingabefeld:',
            code: '&lt;___&gt;\n  &lt;input type="___" placeholder="Dein Name"&gt;\n&lt;/form&gt;',
            answers: ['form', 'text']
        }
    },
    {
        num: 25, chapter: 3, title: 'Formulare: Textarea', type: 'quiz', xp: 20,
        description: '<h3>📝 Textarea & Select</h3><p><code>&lt;textarea&gt;</code> erzeugt ein mehrzeiliges Textfeld. <code>&lt;select&gt;</code> mit <code>&lt;option&gt;</code> erzeugt ein Dropdown-Menü.</p>',
        gameData: {
            question: 'Welcher Tag erzeugt ein mehrzeiliges Textfeld?',
            options: ['<textarea>', '<input type="multiline">', '<textbox>', '<input type="text" rows="5">'],
            correct: 0,
            explanation: '<textarea> ist der richtige Tag für mehrzeilige Eingaben. Input-Felder sind immer einzeilig!'
        }
    },
    {
        num: 26, chapter: 3, title: 'Formulare: Buttons', type: 'bughunt', xp: 30,
        description: '<h3>🔘 Buttons</h3><p>Es gibt zwei Wege Buttons zu erstellen: <code>&lt;button&gt;</code> und <code>&lt;input type="submit"&gt;</code>. Der type bei button kann "submit", "button" oder "reset" sein.</p>',
        gameData: {
            instruction: 'Finde den fehlerhaften Button im Formular!',
            lines: [
                '<form>',
                '  <input type="text" placeholder="Name">',
                '  <input type="email" placeholder="E-Mail">',
                '  <button type="submit">Absenden</button>',
                '  <button type="löschen">Zurücksetzen</button>',
                '</form>'
            ],
            bugLines: [
                { line: 4, hint: 'type="löschen" gibt es nicht! Richtig wäre type="reset" zum Zurücksetzen.' }
            ]
        }
    },
    {
        num: 27, chapter: 3, title: 'Labels für Formulare', type: 'match', xp: 30,
        description: '<h3>🏷️ Labels</h3><p><code>&lt;label&gt;</code> beschriftet Formularfelder. Mit <code>for</code>-Attribut wird es mit der <code>id</code> eines Inputs verknüpft. Das verbessert Bedienbarkeit!</p>',
        gameData: {
            instruction: 'Verbinde den Input-Typ mit dem richtigen Zweck:',
            pairs: [
                { left: '<code>type="text"</code>', right: 'Normaler Text' },
                { left: '<code>type="email"</code>', right: 'E-Mail Adresse' },
                { left: '<code>type="password"</code>', right: 'Passwort (versteckt)' },
                { left: '<code>type="number"</code>', right: 'Nur Zahlen' },
                { left: '<code>type="checkbox"</code>', right: 'Ankreuzfeld' }
            ]
        }
    },
    {
        num: 28, chapter: 3, title: 'Semantische Tags I', type: 'quiz', xp: 20,
        description: '<h3>🏗️ Semantisches HTML</h3><p>Semantische Tags beschreiben die <strong>Bedeutung</strong> des Inhalts: <code>&lt;header&gt;</code> (Kopfbereich), <code>&lt;nav&gt;</code> (Navigation), <code>&lt;main&gt;</code> (Hauptinhalt).</p>',
        gameData: {
            question: 'Welcher semantische Tag umschließt die Hauptnavigation?',
            options: ['<nav>', '<menu>', '<navigation>', '<links>'],
            correct: 0,
            explanation: '<nav> ist der semantisch korrekte Tag für Navigationsmenüs.'
        }
    },
    {
        num: 29, chapter: 3, title: 'Semantische Tags II', type: 'completion', xp: 25,
        description: '<h3>🏗️ Weitere semantische Tags</h3><p><code>&lt;section&gt;</code> (Abschnitt), <code>&lt;article&gt;</code> (Artikel), <code>&lt;aside&gt;</code> (Seitenleiste) und <code>&lt;footer&gt;</code> (Fußbereich) geben der Seite Struktur.</p>',
        gameData: {
            instruction: 'Vervollständige die semantische Struktur:',
            code: '&lt;___&gt;\n  &lt;h1&gt;Meine Website&lt;/h1&gt;\n  &lt;nav&gt;...&lt;/nav&gt;\n&lt;/header&gt;\n\n&lt;___&gt;\n  &lt;article&gt;Inhalt...&lt;/article&gt;\n&lt;/main&gt;\n\n&lt;___&gt;\n  &lt;p&gt;&copy; 2025&lt;/p&gt;\n&lt;/footer&gt;',
            answers: ['header', 'main', 'footer']
        }
    },
    {
        num: 30, chapter: 3, title: 'Kapitel 3 Abschluss', type: 'livecode', xp: 40,
        description: '<h3>🎓 Kapitel 3 Abschluss!</h3><p>Baue eine Seite mit semantischer Struktur, einem Formular und einer Tabelle!</p>',
        gameData: {
            task: 'Erstelle eine Seite mit &lt;header&gt;, &lt;main&gt;, &lt;footer&gt; und einem kleinen Formular (Input + Button).',
            starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  \n</body>\n</html>',
            hint: 'Nutze <header>, <main>, <footer>, <form>, <input> und <button>',
            checks: [
                { type: 'contains', value: '<header>', desc: 'Enthält <header>' },
                { type: 'contains', value: '<main>', desc: 'Enthält <main>' },
                { type: 'contains', value: '<footer>', desc: 'Enthält <footer>' },
                { type: 'contains', value: '<form>', desc: 'Enthält ein Formular' },
                { type: 'contains', value: '<input', desc: 'Enthält ein Eingabefeld' }
            ]
        }
    },

    // ====================== CHAPTER 4: Multimedia & Einbettung (31-40) ======================
    {
        num: 31, chapter: 4, title: 'Audio einbinden', type: 'completion', xp: 25,
        description: '<h3>🔊 Audio</h3><p>Der <code>&lt;audio&gt;</code>-Tag bindet Audiodateien ein. Mit <code>controls</code> werden Play/Pause-Buttons angezeigt.</p>',
        gameData: {
            instruction: 'Binde eine Audiodatei mit Steuerung ein:',
            code: '&lt;___ ___&gt;\n  &lt;source src="musik.mp3" type="audio/mpeg"&gt;\n&lt;/audio&gt;',
            answers: ['audio', 'controls']
        }
    },
    {
        num: 32, chapter: 4, title: 'Video einbinden', type: 'quiz', xp: 20,
        description: '<h3>🎥 Video</h3><p>Der <code>&lt;video&gt;</code>-Tag funktioniert wie audio. Zusätzliche Attribute: <code>width</code>, <code>height</code>, <code>autoplay</code>, <code>loop</code>.</p>',
        gameData: {
            question: 'Welches Attribut zeigt Play/Pause-Buttons bei einem Video an?',
            options: ['controls', 'buttons', 'player', 'ui'],
            correct: 0,
            explanation: 'Das controls-Attribut zeigt die Steuerelemente (Play, Pause, Lautstärke etc.) an.'
        }
    },
    {
        num: 33, chapter: 4, title: 'iFrames', type: 'completion', xp: 25,
        description: '<h3>🖼️ iFrames</h3><p><code>&lt;iframe&gt;</code> bettet eine andere Webseite ein, z.B. YouTube-Videos oder Google Maps. Wichtig: <code>src</code>, <code>width</code> und <code>height</code>.</p>',
        gameData: {
            instruction: 'Erstelle einen iFrame der eine Webseite einbettet:',
            code: '&lt;___ src="https://example.com" width="600" ___="400"&gt;&lt;/iframe&gt;',
            answers: ['iframe', 'height']
        }
    },
    {
        num: 34, chapter: 4, title: 'HTML Entities', type: 'match', xp: 30,
        description: '<h3>🔤 Sonderzeichen</h3><p>HTML Entities werden für Sonderzeichen verwendet, die in HTML eine besondere Bedeutung haben oder nicht auf der Tastatur zu finden sind.</p>',
        gameData: {
            instruction: 'Verbinde den Entity-Code mit dem Zeichen:',
            pairs: [
                { left: '<code>&amp;lt;</code>', right: '< (Kleiner als)' },
                { left: '<code>&amp;gt;</code>', right: '> (Größer als)' },
                { left: '<code>&amp;amp;</code>', right: '& (Und-Zeichen)' },
                { left: '<code>&amp;copy;</code>', right: '© (Copyright)' }
            ]
        }
    },
    {
        num: 35, chapter: 4, title: 'Meta Tags', type: 'quiz', xp: 20,
        description: '<h3>🏷️ Meta Tags</h3><p>Meta-Tags stehen im <code>&lt;head&gt;</code> und geben dem Browser Infos über die Seite: Zeichensatz, Beschreibung, Autor etc.</p>',
        gameData: {
            question: 'Wo stehen Meta-Tags in einem HTML-Dokument?',
            options: ['Im <head>-Bereich', 'Im <body>-Bereich', 'Nach </html>', 'Vor <!DOCTYPE>'],
            correct: 0,
            explanation: 'Meta-Tags gehören immer in den <head>-Bereich, da sie Informationen ÜBER die Seite enthalten, nicht sichtbaren Inhalt.'
        }
    },
    {
        num: 36, chapter: 4, title: 'Favicon einbinden', type: 'bughunt', xp: 30,
        description: '<h3>⭐ Favicon</h3><p>Das Favicon ist das kleine Icon im Browser-Tab. Es wird mit <code>&lt;link rel="icon" href="favicon.ico"&gt;</code> im <code>&lt;head&gt;</code> eingebunden.</p>',
        gameData: {
            instruction: 'Finde den Fehler in der Favicon-Einbindung!',
            lines: [
                '<head>',
                '  <meta charset="UTF-8">',
                '  <title>Meine Seite</title>',
                '  <link rel="icon" href="favicon.ico">',
                '  <link rel="stylesheet" href="style.css">',
                '  <link rel="favicon" href="bild.png">',
                '</head>'
            ],
            bugLines: [
                { line: 5, hint: 'rel="favicon" gibt es nicht! Richtig wäre rel="icon". Außerdem reicht ein Favicon-Link.' }
            ]
        }
    },
    {
        num: 37, chapter: 4, title: 'Responsive Images', type: 'completion', xp: 25,
        description: '<h3>📱 Responsive Bilder</h3><p>Mit dem <code>style</code>-Attribut oder CSS können Bilder responsive gemacht werden: <code>max-width: 100%</code> passt das Bild an die Breite an.</p>',
        gameData: {
            instruction: 'Mache das Bild responsive:',
            code: '&lt;img src="foto.jpg" alt="Foto"\n  style="___-width: 100%; height: ___;"&gt;',
            answers: ['max', 'auto']
        }
    },
    {
        num: 38, chapter: 4, title: 'Figure & Figcaption', type: 'sorter', xp: 30,
        description: '<h3>🖼️ Bild mit Beschriftung</h3><p><code>&lt;figure&gt;</code> gruppiert ein Bild mit seiner Beschriftung (<code>&lt;figcaption&gt;</code>). Das ist semantisch besser als ein einfaches div.</p>',
        gameData: {
            instruction: 'Bringe den Code für ein Bild mit Beschriftung in Ordnung:',
            lines: [
                '<figure>',
                '  <img src="sonnenuntergang.jpg" alt="Sonnenuntergang">',
                '  <figcaption>Ein wunderschöner Sonnenuntergang</figcaption>',
                '</figure>'
            ]
        }
    },
    {
        num: 39, chapter: 4, title: 'Details & Summary', type: 'quiz', xp: 20,
        description: '<h3>📂 Aufklappbare Inhalte</h3><p><code>&lt;details&gt;</code> erstellt einen aufklappbaren Bereich. <code>&lt;summary&gt;</code> ist die sichtbare Überschrift, die zum Aufklappen geklickt wird.</p>',
        gameData: {
            question: 'Welcher Tag erstellt einen aufklappbaren Bereich?',
            options: ['<details> mit <summary>', '<accordion>', '<toggle>', '<collapse>'],
            correct: 0,
            explanation: '<details> und <summary> sind native HTML5-Tags für aufklappbare Inhalte – ganz ohne JavaScript!'
        }
    },
    {
        num: 40, chapter: 4, title: 'Kapitel 4 Abschluss', type: 'livecode', xp: 40,
        description: '<h3>🎓 Kapitel 4 Abschluss!</h3><p>Erstelle eine multimediale Seite mit verschiedenen Elementen!</p>',
        gameData: {
            task: 'Erstelle eine Seite mit: einem &lt;figure&gt; mit &lt;figcaption&gt;, einem &lt;details&gt;/&lt;summary&gt; Element, und einem Meta-Tag für die Beschreibung.',
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>Multimedia</title>\n</head>\n<body>\n  \n</body>\n</html>',
            hint: 'Füge <meta name="description" content="..."> im head hinzu, und <figure>, <details> im body.',
            checks: [
                { type: 'contains', value: '<figure>', desc: 'Enthält <figure>' },
                { type: 'contains', value: '<figcaption>', desc: 'Enthält <figcaption>' },
                { type: 'contains', value: '<details>', desc: 'Enthält <details>' },
                { type: 'contains', value: '<summary>', desc: 'Enthält <summary>' }
            ]
        }
    },

    // ====================== CHAPTER 5: Fortgeschritten & Projekte (41-50) ======================
    {
        num: 41, chapter: 5, title: 'Neue Input-Typen', type: 'match', xp: 30,
        description: '<h3>📱 HTML5 Input-Typen</h3><p>HTML5 brachte viele neue Input-Typen: <code>date</code>, <code>color</code>, <code>range</code>, <code>url</code>, <code>tel</code> und mehr!</p>',
        gameData: {
            instruction: 'Verbinde den Input-Typ mit seinem Zweck:',
            pairs: [
                { left: '<code>type="date"</code>', right: 'Datumsauswahl' },
                { left: '<code>type="color"</code>', right: 'Farbwähler' },
                { left: '<code>type="range"</code>', right: 'Schieberegler' },
                { left: '<code>type="url"</code>', right: 'Website-Adresse' },
                { left: '<code>type="tel"</code>', right: 'Telefonnummer' }
            ]
        }
    },
    {
        num: 42, chapter: 5, title: 'Datalist', type: 'completion', xp: 25,
        description: '<h3>📋 Datalist</h3><p><code>&lt;datalist&gt;</code> bietet Vorschläge für ein Eingabefeld. Es wird mit der <code>list</code>-Eigenschaft des Inputs verknüpft.</p>',
        gameData: {
            instruction: 'Erstelle ein Input mit Vorschlagsliste:',
            code: '&lt;input type="text" ___="sprachen"&gt;\n&lt;___ id="sprachen"&gt;\n  &lt;option value="JavaScript"&gt;\n  &lt;option value="Python"&gt;\n  &lt;option value="HTML"&gt;\n&lt;/datalist&gt;',
            answers: ['list', 'datalist']
        }
    },
    {
        num: 43, chapter: 5, title: 'Progress & Meter', type: 'quiz', xp: 20,
        description: '<h3>📊 Fortschrittsbalken</h3><p><code>&lt;progress&gt;</code> zeigt einen Ladebalken. <code>&lt;meter&gt;</code> zeigt einen Messwert an (z.B. Speicherplatz).</p>',
        gameData: {
            question: 'Welcher Tag zeigt einen Lade-/Fortschrittsbalken an?',
            options: ['<progress>', '<loading>', '<bar>', '<status>'],
            correct: 0,
            explanation: '<progress value="70" max="100"> zeigt einen Fortschrittsbalken bei 70% an.'
        }
    },
    {
        num: 44, chapter: 5, title: 'data-Attribute', type: 'completion', xp: 25,
        description: '<h3>💾 Custom Data Attributes</h3><p>Mit <code>data-*</code> Attributen kannst du eigene Daten an HTML-Elemente hängen. Z.B. <code>data-id="123"</code> oder <code>data-color="blue"</code>.</p>',
        gameData: {
            instruction: 'Füge custom data-Attribute hinzu:',
            code: '&lt;div ___-user-id="42" ___-role="admin"&gt;\n  Willkommen, Admin!\n&lt;/div&gt;',
            answers: ['data', 'data']
        }
    },
    {
        num: 45, chapter: 5, title: 'Accessibility', type: 'quiz', xp: 20,
        description: '<h3>♿ Barrierefreiheit</h3><p>Barrierefreie Webseiten sind für alle nutzbar. Wichtig: <code>alt</code>-Texte, <code>aria-label</code>, semantische Tags, und gute Farbkontraste.</p>',
        gameData: {
            question: 'Welches Attribut verbessert die Barrierefreiheit eines Icons ohne Text?',
            options: ['aria-label', 'title', 'tooltip', 'description'],
            correct: 0,
            explanation: 'aria-label gibt einem Element eine Beschreibung für Screenreader, wenn kein sichtbarer Text vorhanden ist.'
        }
    },
    {
        num: 46, chapter: 5, title: 'SEO mit HTML', type: 'bughunt', xp: 30,
        description: '<h3>🔍 SEO Grundlagen</h3><p>SEO (Search Engine Optimization) hilft, dass deine Seite in Google gefunden wird. Wichtig: <code>title</code>, <code>meta description</code>, richtige Überschriften-Hierarchie.</p>',
        gameData: {
            instruction: 'Finde den SEO-Fehler auf dieser Seite!',
            lines: [
                '<head>',
                '  <title>Meine tolle Webseite</title>',
                '  <meta name="description" content="Eine Webseite">',
                '</head>',
                '<body>',
                '  <h3>Willkommen</h3>',
                '  <h1>Über uns</h1>',
                '  <p>Wir sind toll.</p>',
                '</body>'
            ],
            bugLines: [
                { line: 5, hint: 'Die Hauptüberschrift &lt;h1&gt; sollte VOR &lt;h3&gt; kommen! Die Hierarchie muss stimmen: h1 → h2 → h3.' }
            ]
        }
    },
    {
        num: 47, chapter: 5, title: 'HTML Validierung', type: 'bughunt', xp: 30,
        description: '<h3>✅ Valides HTML</h3><p>Valides HTML bedeutet, dass der Code den offiziellen Regeln entspricht. Häufige Fehler: fehlende schließende Tags, falsche Verschachtelung.</p>',
        gameData: {
            instruction: 'Finde den Verschachtelungsfehler!',
            lines: [
                '<p>Das ist ein <strong>fetter',
                'und <em>kursiver</strong> Text</em></p>',
                '<p>Noch ein Absatz</p>',
                '<ul>',
                '  <li>Punkt 1</li>',
                '  <li>Punkt 2</li>',
                '</ul>'
            ],
            bugLines: [
                { line: 1, hint: 'Die Verschachtelung ist falsch! Es muss zuerst &lt;/em&gt; und dann &lt;/strong&gt; geschlossen werden (LIFO-Prinzip).' }
            ]
        }
    },
    {
        num: 48, chapter: 5, title: 'Projekt: Visitenkarte', type: 'livecode', xp: 50,
        description: '<h3>💼 Mini-Projekt: Visitenkarte</h3><p>Erstelle eine digitale Visitenkarte mit deinem Namen, Beruf, und Kontaktdaten!</p>',
        gameData: {
            task: 'Erstelle eine Visitenkarte mit: Überschrift (Name), Unterüberschrift (Beruf), eine Liste mit E-Mail und Telefon, und ein Link.',
            starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Visitenkarte</title>\n</head>\n<body>\n  \n</body>\n</html>',
            hint: 'Nutze <h1> für den Namen, <h2> für den Beruf, <ul> für Kontaktdaten, und <a href="mailto:..."> für E-Mail.',
            checks: [
                { type: 'contains', value: '<h1>', desc: 'Enthält einen Namen (h1)' },
                { type: 'contains', value: '<h2>', desc: 'Enthält einen Beruf (h2)' },
                { type: 'regex', value: '<(ul|ol)>', desc: 'Enthält eine Liste' },
                { type: 'contains', value: '<a ', desc: 'Enthält einen Link' }
            ]
        }
    },
    {
        num: 49, chapter: 5, title: 'Projekt: Portfolio', type: 'livecode', xp: 50,
        description: '<h3>🌐 Mini-Projekt: Portfolio</h3><p>Baue den Grundstein deiner eigenen Portfolio-Seite mit Header, Navigation, Über-mich-Bereich und Footer!</p>',
        gameData: {
            task: 'Erstelle eine Portfolio-Seite mit: &lt;header&gt; mit Navigation (&lt;nav&gt; + Links), &lt;main&gt; mit einer Überschrift und Absatz, und &lt;footer&gt;.',
            starterCode: '<!DOCTYPE html>\n<html lang="de">\n<head>\n  <meta charset="UTF-8">\n  <title>Mein Portfolio</title>\n</head>\n<body>\n  \n</body>\n</html>',
            hint: 'Nutze <header><nav><a href="#">Home</a></nav></header> und <main> und <footer>.',
            checks: [
                { type: 'contains', value: '<header>', desc: 'Enthält <header>' },
                { type: 'contains', value: '<nav>', desc: 'Enthält <nav>' },
                { type: 'contains', value: '<main>', desc: 'Enthält <main>' },
                { type: 'contains', value: '<footer>', desc: 'Enthält <footer>' },
                { type: 'contains', value: '<a ', desc: 'Enthält Links in der Navigation' }
            ]
        }
    },
    {
        num: 50, chapter: 5, title: '🏆 HTML Meister!', type: 'livecode', xp: 100,
        description: '<h3>👑 FINALE: HTML Meister!</h3><p>Das ist dein Abschlusstest! Erstelle eine komplette, gut strukturierte HTML-Seite die alles verwendet, was du gelernt hast. Zeig was du kannst!</p>',
        gameData: {
            task: 'Erstelle eine komplette HTML-Seite mit: DOCTYPE, semantischer Struktur (header, nav, main, footer), einer Tabelle, einer Liste, einem Bild, einem Link, und einem Formular mit Input und Button!',
            starterCode: '<!DOCTYPE html>\n<html lang="de">\n<head>\n  <meta charset="UTF-8">\n  <meta name="description" content="Mein HTML Meisterwerk">\n  <title>HTML Meisterwerk</title>\n</head>\n<body>\n\n</body>\n</html>',
            hint: 'Verwende alles was du gelernt hast: header, nav, main, footer, table, ul/ol, img, a, form...',
            checks: [
                { type: 'contains', value: '<!doctype html>', desc: 'Enthält DOCTYPE' },
                { type: 'contains', value: '<header>', desc: 'Enthält <header>' },
                { type: 'contains', value: '<nav>', desc: 'Enthält <nav>' },
                { type: 'contains', value: '<main>', desc: 'Enthält <main>' },
                { type: 'contains', value: '<footer>', desc: 'Enthält <footer>' },
                { type: 'contains', value: '<table>', desc: 'Enthält eine Tabelle' },
                { type: 'regex', value: '<(ul|ol)>', desc: 'Enthält eine Liste' },
                { type: 'contains', value: '<img ', desc: 'Enthält ein Bild' },
                { type: 'contains', value: '<a ', desc: 'Enthält einen Link' },
                { type: 'contains', value: '<form>', desc: 'Enthält ein Formular' },
                { type: 'contains', value: '<input', desc: 'Enthält ein Eingabefeld' },
                { type: 'contains', value: '<button', desc: 'Enthält einen Button' }
            ]
        }
    }
];
