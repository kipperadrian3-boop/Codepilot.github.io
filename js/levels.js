/* ============================================
   CodePilot – Languages & Multi-Step Lessons (English)
   ============================================ */

const LANGUAGES = [
    {
        id: 'html', name: 'HTML', emoji: '🌐',
        desc: 'The language of the web – every single website is built using HTML!',
        available: true
    },
    {
        id: 'css', name: 'CSS', emoji: '🎨',
        desc: 'Make your websites beautiful – colors, layouts, and animations!',
        available: false
    },
    {
        id: 'javascript', name: 'JavaScript', emoji: '⚡',
        desc: 'Make your websites interactive – logic, buttons, and behavior!',
        available: false
    },
    {
        id: 'python', name: 'Python', emoji: '🐍',
        desc: 'The easiest programming language – perfect for absolute beginners!',
        available: false
    }
];

/* ============================================
   HTML LESSONS (English)
   ============================================ */

const LESSONS = {
    html: [
        // ===== LESSON 1: What is HTML? =====
        {
            num: 1, title: 'What is HTML?', xp: 20,
            subtitle: 'Understand the language of the web',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>📖 What is HTML?</h3>
                        <p>Imagine you are building a house. You need a <strong>blueprint</strong> that says: "Here is a door, here is a window, and here is a wall."</p>
                        <p><strong>HTML is exactly like a blueprint – but for websites!</strong></p>
                        <p>HTML tells your web browser (like Chrome, Safari, or Edge):</p>
                        <div class="highlight-box">
                            <p>📌 "This text is a <strong>heading</strong>"</p>
                            <p>📌 "This text is a <strong>paragraph</strong>"</p>
                            <p>📌 "This image should be displayed here"</p>
                        </div>
                        <p>HTML stands for <strong>HyperText Markup Language</strong>.</p>
                        <p>Don't worry – you don't need to memorize the long name! 😄</p>
                    `
                },
                {
                    type: 'quiz',
                    question: 'What does HTML do?',
                    options: [
                        'It defines the structure of a webpage (like a blueprint)',
                        'It builds 3D video games'
                    ],
                    correct: 0,
                    hint: 'Think about the house blueprint analogy!',
                    explanation: 'Correct! HTML acts as a structure or blueprint for web pages.'
                },
                {
                    type: 'info',
                    content: `
                        <h3>💡 Good to Know</h3>
                        <p>HTML is <strong>not a programming language</strong>. It is a <strong>markup language</strong>.</p>
                        <p>What is the difference?</p>
                        <div class="highlight-box tip">
                            <p>🔹 <strong>Programming Language</strong> = tells the computer what to DO (logic, math)</p>
                            <p>🔹 <strong>Markup Language</strong> = tells the computer what something IS (structure, text)</p>
                        </div>
                        <p>HTML marks text so the browser knows: "this is an article title". It does not calculate numbers like <code>2 + 2</code>.</p>
                        <p>For calculations and logic, we use <strong>JavaScript</strong> later! 😊</p>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Is HTML a programming language?',
                    options: [
                        'Yes, it is a programming language',
                        'No, it is a markup language'
                    ],
                    correct: 1,
                    hint: 'Does HTML calculate math, or does it only format text and structure?',
                    explanation: 'Right! HTML only structures content, so it is a markup language, not programming.'
                },
                {
                    type: 'info',
                    content: `
                        <h3>🌍 HTML is Everywhere!</h3>
                        <p>Every single website you have ever visited runs on HTML:</p>
                        <p>✅ Google – uses HTML</p>
                        <p>✅ YouTube – uses HTML</p>
                        <p>✅ Instagram – uses HTML</p>
                        <p>✅ This learning app – uses HTML! 😄</p>
                        <div class="highlight-box">
                            <p>💡 <strong>Tip:</strong> You can see the HTML code of any website! Just right-click anywhere on a webpage and click <strong>"Inspect"</strong> (or press <code>F12</code>).</p>
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'What does the "H" in HTML stand for?',
                    options: [
                        'HyperText',
                        'HighTech'
                    ],
                    correct: 0,
                    hint: 'It connects pages together using links.',
                    explanation: 'HTML = HyperText Markup Language. HyperText refers to text containing links to other pages!'
                }
            ]
        },

        // ===== LESSON 2: HTML Tags =====
        {
            num: 2, title: 'HTML Tags', xp: 20,
            subtitle: 'The building blocks of HTML',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>🏷️ What are Tags?</h3>
                        <p><strong>Tags</strong> are the container labels of HTML. They are written inside <strong>angle brackets</strong> <code>&lt; &gt;</code>.</p>
                        <p>Think of tags like <strong>boxes</strong>:</p>
                        <div class="code-example">
                            &lt;p&gt;Hello World!&lt;/p&gt;
                        </div>
                        <p>📦 <code>&lt;p&gt;</code> = <strong>Open the box</strong> (opening tag)</p>
                        <p>📝 <code>Hello World!</code> = <strong>Content inside</strong></p>
                        <p>📦 <code>&lt;/p&gt;</code> = <strong>Close the box</strong> (closing tag)</p>
                        <div class="highlight-box tip">
                            <p>⚡ The closing tag ALWAYS has a <strong>forward slash /</strong> before the tag name!</p>
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Which of the following is a closing tag?',
                    options: [
                        '<p> (no slash)',
                        '</p> (with a forward slash)'
                    ],
                    correct: 1,
                    hint: 'Look for the symbol that represents closing a box.',
                    explanation: 'Correct! The forward slash / signals to the browser that the container is closing.'
                },
                {
                    type: 'info',
                    content: `
                        <h3>📝 Common Tags</h3>
                        <p>Different tags have different jobs. Here are three common ones:</p>
                        <div class="code-example">
                            &lt;h1&gt;This is a heading&lt;/h1&gt;<br>
                            &lt;p&gt;This is a paragraph&lt;/p&gt;<br>
                            &lt;strong&gt;This is bold text&lt;/strong&gt;
                        </div>
                        <p><code>&lt;h1&gt;</code> = <strong>Heading</strong> (title)</p>
                        <p><code>&lt;p&gt;</code> = <strong>Paragraph</strong> (normal text block)</p>
                        <p><code>&lt;strong&gt;</code> = <strong>Important</strong> (makes text bold)</p>
                    `
                },
                {
                    type: 'fill',
                    instruction: 'Complete the closing tag for this heading:',
                    code: '&lt;h1&gt;Welcome to my site&lt;/___&gt;',
                    answers: ['h1'],
                    hint: 'The closing tag must match the opening tag name.'
                },
                {
                    type: 'info',
                    content: `
                        <h3>⚡ Summary</h3>
                        <div class="highlight-box">
                            <p>✅ Tags are enclosed in angle brackets: <code>&lt;tag&gt;</code></p>
                            <p>✅ Most tags come in pairs: opening and closing</p>
                            <p>✅ Closing tags have a forward slash: <code>&lt;/tag&gt;</code></p>
                            <p>✅ The text or elements go in between the tags</p>
                        </div>
                    `
                },
                {
                    type: 'fill',
                    instruction: 'Write the opening and closing tags for a paragraph:',
                    code: '&lt;___&gt;Learn to code!&lt;/___&gt;',
                    answers: ['p', 'p'],
                    hint: 'Use the letter "p" for paragraph tags.'
                }
            ]
        },

        // ===== LESSON 3: HTML Structure =====
        {
            num: 3, title: 'Document Structure', xp: 25,
            subtitle: 'The layout of every single webpage',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>🏗️ The Standard Layout</h3>
                        <p>Every HTML file has a standard structural template. Let's look at the skeleton of a web page:</p>
                        <div class="code-example">
&lt;!DOCTYPE html&gt;<br>
&lt;html&gt;<br>
&nbsp;&nbsp;&lt;head&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;My Page&lt;/title&gt;<br>
&nbsp;&nbsp;&lt;/head&gt;<br>
&nbsp;&nbsp;&lt;body&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;Your visible content goes here!<br>
&nbsp;&nbsp;&lt;/body&gt;<br>
&lt;/html&gt;
                        </div>
                        <p>It looks like a lot, but let's break it down easily! 😊</p>
                    `
                },
                {
                    type: 'info',
                    content: `
                        <h3>📋 The 4 Crucial Parts</h3>
                        <p>1️⃣ <code>&lt;!DOCTYPE html&gt;</code></p>
                        <p>→ Tells the browser: "This is a modern HTML5 document."</p>
                        <br>
                        <p>2️⃣ <code>&lt;html&gt;</code></p>
                        <p>→ The main container wrapping all content on the page.</p>
                        <br>
                        <p>3️⃣ <code>&lt;head&gt;</code></p>
                        <p>→ 🧠 The <strong>brain</strong> of the page. Holds hidden metadata, settings, and the page title.</p>
                        <br>
                        <p>4️⃣ <code>&lt;body&gt;</code></p>
                        <p>→ 💪 The <strong>body</strong> of the page. Contains everything visible to the visitor.</p>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Where do you put the text, images, and buttons that users see?',
                    options: [
                        'Inside the <body> tag',
                        'Inside the <head> tag'
                    ],
                    correct: 0,
                    hint: 'Think of visible physical body parts versus hidden thoughts in the brain (head).',
                    explanation: 'Right! The <body> tag holds all visible elements. The <head> contains hidden meta information.'
                },
                {
                    type: 'fill',
                    instruction: 'Fill in the blanks to complete the webpage structure:',
                    code: '&lt;!DOCTYPE ___&gt;\n&lt;html&gt;\n  &lt;___&gt;\n    &lt;title&gt;My Page&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;___&gt;\n    &lt;h1&gt;Hello World!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;',
                    answers: ['html', 'head', 'body'],
                    hint: 'Remember the order: document type declaration, then the head, then the body.'
                },
                {
                    type: 'info',
                    content: `
                        <h3>🧠 Brain vs Body</h3>
                        <div class="highlight-box tip">
                            <p>🧠 <code>&lt;head&gt;</code> = <strong>Brain</strong> → holds page configs & tab title.</p>
                            <p>💪 <code>&lt;body&gt;</code> = <strong>Body</strong> → holds headings, paragraphs, links, etc.</p>
                        </div>
                        <p>The <code>&lt;title&gt;</code> tag inside the head sets the text shown in the browser tab at the top!</p>
                    `
                },
                {
                    type: 'write',
                    task: 'Write a full HTML page structure with a heading "Hello Web" inside the body!',
                    starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  \n</body>\n</html>',
                    hint: 'Insert <h1>Hello Web</h1> inside the body tags.',
                    checks: [
                        { type: 'contains', value: '<h1>', desc: 'Contains <h1> heading tag' },
                        { type: 'regex', value: '<h1>.*hello.*web.*</h1>', desc: 'Heading text matches "Hello Web"' }
                    ]
                }
            ]
        },

        // ===== LESSON 4: Headings =====
        {
            num: 4, title: 'Headings', xp: 20,
            subtitle: 'Structuring content with titles',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>📝 Headings: h1 to h6</h3>
                        <p>HTML has <strong>6 levels of headings</strong>, numbered 1 to 6:</p>
                        <h1 style="color:var(--accent-purple); margin:0.5rem 0;">h1 – Main Title (largest)</h1>
                        <h2 style="color:var(--accent-cyan); margin:0.5rem 0;">h2 – Section Title</h2>
                        <h3 style="color:var(--accent-pink); margin:0.5rem 0;">h3 – Subsection Title</h3>
                        <h4 style="margin:0.5rem 0;">h4 – Small Title</h4>
                        <h5 style="margin:0.5rem 0;">h5 – Smaller Title</h4>
                        <h6 style="margin:0.5rem 0;">h6 – Smallest Title</h5>
                        <div class="highlight-box warning">
                            <p>⚠️ <strong>Rule:</strong> You should only have ONE <code>&lt;h1&gt;</code> per page! It represents the main topic of your page.</p>
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Which heading tag produces the LARGEST font size?',
                    options: ['<h1> (Level 1 is most important)', '<h6> (Level 6 is largest)'],
                    correct: 0,
                    hint: 'Heading 1 is the main news title on a newspaper front page.',
                    explanation: 'Correct! <h1> is the largest and most important heading tag.'
                },
                {
                    type: 'info',
                    content: `
                        <h3>📰 Hierarchy Like a Newspaper</h3>
                        <p>Think of heading structure like articles in a newspaper:</p>
                        <div class="code-example">
&lt;h1&gt;DAILY NEWS&lt;/h1&gt; (Main newspaper header)<br>
&lt;h2&gt;World News&lt;/h2&gt; (Section header)<br>
&lt;h3&gt;New Space Exploration&lt;/h3&gt; (Article heading)<br>
&lt;p&gt;Today, scientists discovered...&lt;/p&gt;
                        </div>
                    `
                },
                {
                    type: 'fill',
                    instruction: 'Create a level 1 main heading:',
                    code: '&lt;___&gt;Welcome to CodePilot&lt;/___&gt;',
                    answers: ['h1', 'h1'],
                    hint: 'Use the character "h" followed by "1".'
                },
                {
                    type: 'fill',
                    instruction: 'Create a level 2 section heading and a paragraph below:',
                    code: '&lt;___&gt;My Portfolio&lt;/h2&gt;\n&lt;___&gt;Welcome to my portfolio website.&lt;/p&gt;',
                    answers: ['h2', 'p'],
                    hint: 'The first tag matches h2, the second tag matches p.'
                },
                {
                    type: 'write',
                    task: 'Write a heading level 1 and a heading level 2 below it!',
                    starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  \n</body>\n</html>',
                    hint: 'Place <h1>Title</h1> and <h2>Subtitle</h2> inside the body.',
                    checks: [
                        { type: 'contains', value: '<h1>', desc: 'Contains an <h1> tag' },
                        { type: 'contains', value: '<h2>', desc: 'Contains an <h2> tag' }
                    ]
                }
            ]
        },

        // ===== LESSON 5: Paragraphs =====
        {
            num: 5, title: 'Paragraphs', xp: 20,
            subtitle: 'Writing text content',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>📃 The p Tag (Paragraph)</h3>
                        <p>The <code>&lt;p&gt;</code> tag stands for <strong>paragraph</strong>.</p>
                        <div class="code-example">
&lt;p&gt;This is the first paragraph.&lt;/p&gt;<br>
&lt;p&gt;This is the second paragraph.&lt;/p&gt;
                        </div>
                        <p>The browser automatically adds some vertical <strong>spacing</strong> before and after paragraphs so they are easy to read! 📖</p>
                        <div class="highlight-box warning">
                            <p>⚠️ <strong>Note:</strong> Pressing Enter in your code editor does NOT create a line break in the browser. You must wrap text in tags!</p>
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'What happens if you hit Enter multiple times inside your code editor text?',
                    options: [
                        'The browser ignores the line breaks and shows them as a single space',
                        'The browser displays the line breaks exactly as typed'
                    ],
                    correct: 0,
                    hint: 'HTML requires tags for all formatting. Whitespace is collapsed by default.',
                    explanation: 'Right! The browser ignores extra spaces and enters. You must use tags like <p> or <br> to format text.'
                },
                {
                    type: 'info',
                    content: `
                        <h3>↩️ Line Breaks with br</h3>
                        <p>If you want a new line WITHOUT starting a new paragraph, use the <code>&lt;br&gt;</code> (break) tag:</p>
                        <div class="code-example">
&lt;p&gt;Rose is red,&lt;br&gt;Violet is blue.&lt;/p&gt;
                        </div>
                        <div class="highlight-box tip">
                            <p>💡 The <code>&lt;br&gt;</code> tag is a <strong>self-closing tag</strong>. It does not have a closing tag! You just write <code>&lt;br&gt;</code>.</p>
                        </div>
                    `
                },
                {
                    type: 'fill',
                    instruction: 'Create two paragraph tags around the text:',
                    code: '&lt;___&gt;Hello first block.&lt;/p&gt;\n&lt;___&gt;Hello second block.&lt;/p&gt;',
                    answers: ['p', 'p'],
                    hint: 'Paragraph tags are abbreviated with a single letter "p".'
                },
                {
                    type: 'write',
                    task: 'Write a paragraph that contains a line break (<br>) inside of it!',
                    starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  \n</body>\n</html>',
                    hint: 'Place <p>Line one<br>Line two</p> inside the body.',
                    checks: [
                        { type: 'contains', value: '<p>', desc: 'Contains a paragraph' },
                        { type: 'contains', value: '<br>', desc: 'Contains a line break' }
                    ]
                }
            ]
        },

        // ===== LESSON 6: Formatting =====
        {
            num: 6, title: 'Bold & Italic', xp: 20,
            subtitle: 'Formatting text style',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>✨ Formatting Text</h3>
                        <p>To style specific words, you can make them <strong>bold</strong> or <em>italic</em>:</p>
                        <div class="code-example">
&lt;strong&gt;This text is bold&lt;/strong&gt;<br>
&lt;em&gt;This text is italic&lt;/em&gt;
                        </div>
                        <p>🔹 <code>&lt;strong&gt;</code> = <strong>bold</strong> (marks text as highly important)</p>
                        <p>🔹 <code>&lt;em&gt;</code> = <em>italic</em> (emphasis - words are slanted)</p>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Which tag is used to make text bold?',
                    options: ['<strong>', '<em>'],
                    correct: 0,
                    hint: 'Which word means strong/heavy?',
                    explanation: 'Right! <strong> makes text bold to show importance.'
                },
                {
                    type: 'info',
                    content: `
                        <h3>🔀 Nesting tags</h3>
                        <p>You can mix formatting tags inside paragraphs:</p>
                        <div class="code-example">
&lt;p&gt;This is &lt;strong&gt;very&lt;/strong&gt; important.&lt;/p&gt;<br>
&lt;p&gt;This is &lt;strong&gt;&lt;em&gt;bold and italic!&lt;/em&gt;&lt;/strong&gt;&lt;/p&gt;
                        </div>
                    `
                },
                {
                    type: 'fill',
                    instruction: 'Make the word "essential" bold:',
                    code: 'This step is &lt;___&gt;essential&lt;/strong&gt; for success.',
                    answers: ['strong'],
                    hint: 'Use the tag name for bold text.'
                },
                {
                    type: 'fill',
                    instruction: 'Make the word "styled" italic:',
                    code: 'This text is &lt;___&gt;styled&lt;/em&gt; nicely.',
                    answers: ['em'],
                    hint: 'The tag stands for emphasis.'
                },
                {
                    type: 'write',
                    task: 'Write a paragraph with one word styled bold (strong) and another styled italic (em)!',
                    starterCode: '<p>\n  \n</p>',
                    hint: '<p>Some <strong>bold</strong> and <em>italic</em> words.</p>',
                    checks: [
                        { type: 'contains', value: '<strong>', desc: 'Contains bold text' },
                        { type: 'contains', value: '<em>', desc: 'Contains italic text' }
                    ]
                }
            ]
        },

        // ===== LESSON 7: Links =====
        {
            num: 7, title: 'Links', xp: 25,
            subtitle: 'Connecting webpages together',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>🔗 Links (Hyperlinks)</h3>
                        <p>Links connect pages together. They are created with the anchor tag: <code>&lt;a&gt;</code>.</p>
                        <div class="code-example">
&lt;a href="https://google.com"&gt;Visit Google&lt;/a&gt;
                        </div>
                        <p>🔹 <code>&lt;a&gt;</code> = <strong>Anchor</strong> (holds the link)</p>
                        <p>🔹 <code>href</code> = <strong>Hypertext Reference</strong> (the URL address destination)</p>
                        <p>🔹 <code>Visit Google</code> = The clickable text users see</p>
                    `
                },
                {
                    type: 'quiz',
                    question: 'What does the href attribute specify?',
                    options: [
                        'The URL target of the link',
                        'The text color of the link'
                    ],
                    correct: 0,
                    hint: 'href holds the web address of the target page.',
                    explanation: 'Correct! href is where the browser navigates when a user clicks the link.'
                },
                {
                    type: 'info',
                    content: `
                        <h3>🔓 Open Links in a New Tab</h3>
                        <p>To open a link in a brand new tab, add <code>target="_blank"</code>:</p>
                        <div class="code-example">
&lt;a href="https://google.com" target="_blank"&gt;Google (New Tab)&lt;/a&gt;
                        </div>
                    `
                },
                {
                    type: 'fill',
                    instruction: 'Create a link tag to visit a website:',
                    code: '&lt;___ href="https://wikipedia.org"&gt;Wikipedia&lt;/___&gt;',
                    answers: ['a', 'a'],
                    hint: 'Use the anchor tag abbreviation.'
                },
                {
                    type: 'write',
                    task: 'Write a link pointing to "https://google.com" that opens in a new tab!',
                    starterCode: '',
                    hint: '<a href="https://google.com" target="_blank">Google</a>',
                    checks: [
                        { type: 'contains', value: 'href="https://google.com"', desc: 'Points to https://google.com' },
                        { type: 'contains', value: 'target="_blank"', desc: 'Has target="_blank"' }
                    ]
                }
            ]
        },

        // ===== LESSON 8: Images =====
        {
            num: 8, title: 'Images', xp: 25,
            subtitle: 'Displaying visual media',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>🖼️ Displaying Images</h3>
                        <p>Images are added with the <code>&lt;img&gt;</code> tag:</p>
                        <div class="code-example">
&lt;img src="dog.jpg" alt="A cute dog playing"&gt;
                        </div>
                        <p>🔹 <code>src</code> = <strong>Source</strong> (the file path or web URL of the image)</p>
                        <p>🔹 <code>alt</code> = <strong>Alternative Text</strong> (description for screen readers and search engines)</p>
                        <div class="highlight-box warning">
                            <p>⚠️ <code>&lt;img&gt;</code> is a <strong>self-closing tag</strong>. It has no closing tag!</p>
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Does the img tag require a closing tag </img>?',
                    options: [
                        'Yes, all tags need closing tags',
                        'No, img is self-closing'
                    ],
                    correct: 1,
                    hint: 'Think about line break <br> – does it have a closing tag?',
                    explanation: 'Right! The img tag only contains attributes, so it closes itself.'
                },
                {
                    type: 'fill',
                    instruction: 'Fill in the source and alt attributes for this image:',
                    code: '&lt;img ___="cat.png" ___="A fluffy sleeping cat"&gt;',
                    answers: ['src', 'alt'],
                    hint: 'Think of "source" and "alternative description".'
                },
                {
                    type: 'info',
                    content: `
                        <h3>♿ Why "alt" is Mandatory</h3>
                        <p>The <code>alt</code> attribute is essential:</p>
                        <p>1. <strong>Accessibility:</strong> Assistive screen readers read this text aloud to blind users.</p>
                        <p>2. <strong>Error recovery:</strong> If the network fails to load the image, the alt text is shown instead.</p>
                        <p>3. <strong>SEO:</strong> Search engines like Google read alt text to understand what the image shows.</p>
                    `
                },
                {
                    type: 'write',
                    task: 'Add an image tag pointing to "sunset.jpg" with a descriptive alt text!',
                    starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  \n</body>\n</html>',
                    hint: 'Write <img src="sunset.jpg" alt="Beautiful sunset"> inside the body.',
                    checks: [
                        { type: 'contains', value: '<img ', desc: 'Contains an image tag' },
                        { type: 'contains', value: 'src=', desc: 'Has a src attribute' },
                        { type: 'contains', value: 'alt=', desc: 'Has an alt description' }
                    ]
                }
            ]
        },

        // ===== LESSON 9: Lists =====
        {
            num: 9, title: 'Lists', xp: 25,
            subtitle: 'Bullet points and numbered steps',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>📋 Unordered vs Ordered Lists</h3>
                        <p>HTML offers two main types of lists:</p>
                        <p>🔹 <code>&lt;ul&gt;</code> = <strong>Unordered List</strong> (bullet points •)</p>
                        <p>🔹 <code>&lt;ol&gt;</code> = <strong>Ordered List</strong> (numbered 1. 2. 3.)</p>
                        <p>Every list item inside must be wrapped in an <code>&lt;li&gt;</code> (list item) tag:</p>
                        <div class="code-example">
&lt;ul&gt;<br>
&nbsp;&nbsp;&lt;li&gt;Milk&lt;/li&gt;<br>
&nbsp;&nbsp;&lt;li&gt;Bread&lt;/li&gt;<br>
&lt;/ul&gt;
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Which tag creates a numbered list?',
                    options: ['<ol> (ordered list)', '<ul> (unordered list)'],
                    correct: 0,
                    hint: 'Numbered lists have a specific sorted "order".',
                    explanation: 'Correct! ol = ordered list = numbered. ul = unordered list = bullet points.'
                },
                {
                    type: 'fill',
                    instruction: 'Complete the bullet points list structure:',
                    code: '&lt;___&gt;\n  &lt;li&gt;Eggs&lt;/li&gt;\n  &lt;___&gt;Sugar&lt;/li&gt;\n&lt;/ul&gt;',
                    answers: ['ul', 'li'],
                    hint: 'The container is unordered, and the second element is a list item.'
                },
                {
                    type: 'write',
                    task: 'Create an ordered list (ol) containing 3 items!',
                    starterCode: '<h3>Steps to code:</h3>\n',
                    hint: 'Wrap three <li> tags inside a parent <ol> tag.',
                    checks: [
                        { type: 'contains', value: '<ol>', desc: 'Contains an ordered list' },
                        { type: 'contains', value: '<li>', desc: 'Contains list items' }
                    ]
                }
            ]
        },

        // ===== LESSON 10: Comments =====
        {
            num: 10, title: 'Comments', xp: 20,
            subtitle: 'Leaving notes in your code',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>💬 Developer Comments</h3>
                        <p>Comments are text notes left in the source code. They are <strong>completely ignored</strong> by the browser and are invisible to users.</p>
                        <div class="code-example">
&lt;!-- This is a comment --&gt;<br>
&lt;p&gt;This text will be visible.&lt;/p&gt;
                        </div>
                        <p>A comment starts with <code>&lt;!--</code> and ends with <code>--&gt;</code>.</p>
                    `
                },
                {
                    type: 'quiz',
                    question: 'How do you write a comment in HTML?',
                    options: [
                        '<!-- My Comment -->',
                        '// My Comment'
                    ],
                    correct: 0,
                    hint: 'Look for the special angle brackets and hyphens.',
                    explanation: 'Right! HTML comments use <!-- and --> wrapper syntax.'
                },
                {
                    type: 'fill',
                    instruction: 'Write the comment tags around the text:',
                    code: '&lt;!___ This is hidden ___&gt;\n&lt;p&gt;This is shown&lt;/p&gt;',
                    answers: ['--', '--'],
                    hint: 'Both sides use double dashes.'
                },
                {
                    type: 'write',
                    task: 'Write an HTML comment followed by a normal paragraph!',
                    starterCode: '',
                    hint: 'Write <!-- comment --> and then <p>paragraph</p>.',
                    checks: [
                        { type: 'contains', value: '<!--', desc: 'Contains a comment start' },
                        { type: 'contains', value: '-->', desc: 'Contains a comment end' },
                        { type: 'contains', value: '<p>', desc: 'Contains a paragraph' }
                    ]
                }
            ]
        },

        // ===== LESSON 11: Attributes Summary =====
        {
            num: 11, title: 'Attributes Deep Dive', xp: 25,
            subtitle: 'Configuring HTML elements',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>⚙️ Element Properties</h3>
                        <p>Attributes configure how tags behave. Let's recap their format:</p>
                        <div class="code-example">
&lt;tag name="value"&gt;
                        </div>
                        <p>Some tags require specific attributes to function:</p>
                        <p>🔹 <code>href</code> for links (destination)</p>
                        <p>🔹 <code>src</code> for images/video (source URL)</p>
                        <p>🔹 <code>alt</code> for images (accessibility text)</p>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Where do attributes always belong?',
                    options: [
                        'Only inside the opening tag',
                        'Only inside the closing tag'
                    ],
                    correct: 0,
                    hint: 'Look back at <a href="..."> – which tag is the href attribute inside?',
                    explanation: 'Correct! Attributes are always defined in the opening tag.'
                },
                {
                    type: 'fill',
                    instruction: 'Give the anchor tag its destination attribute name:',
                    code: '&lt;a ___="https://google.com"&gt;Google&lt;/a&gt;',
                    answers: ['href'],
                    hint: 'The attribute stands for hypertext reference.'
                },
                {
                    type: 'write',
                    task: 'Write an image tag with src="logo.png" and alt="Company Logo"!',
                    starterCode: '',
                    hint: '<img src="logo.png" alt="Company Logo">',
                    checks: [
                        { type: 'contains', value: 'src="logo.png"', desc: 'Points to logo.png' },
                        { type: 'contains', value: 'alt="', desc: 'Contains alt description' }
                    ]
                }
            ]
        },

        // ===== LESSON 12: Nesting Rules =====
        {
            num: 12, title: 'Nesting Elements', xp: 25,
            subtitle: 'Structuring tag relationships',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>🪆 Nested Code Layout</h3>
                        <p>Nesting means putting tags inside other tags. You must close elements in the reverse order of opening them:</p>
                        <div class="code-example">
&lt;p&gt;This is &lt;strong&gt;&lt;em&gt;nested&lt;/em&gt;&lt;/strong&gt; text.&lt;/p&gt;
                        </div>
                        <div class="highlight-box tip">
                            <p>✅ Open P → Open Strong → Open Em → Close Em → Close Strong → Close P</p>
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Which line of code is structured correctly?',
                    options: [
                        '<p><strong>Hello!</strong></p>',
                        '<p><strong>Hello!</p></strong>'
                    ],
                    correct: 0,
                    hint: 'Close the inner tags before closing the outer ones.',
                    explanation: 'Right! The inner strong tag must be closed before the outer paragraph tag is closed.'
                },
                {
                    type: 'fill',
                    instruction: 'Complete the nesting tags in correct order:',
                    code: '&lt;p&gt;Click &lt;strong&gt;here&lt;/___&gt;&lt;/___&gt;',
                    answers: ['strong', 'p'],
                    hint: 'Close strong first, then close p.'
                },
                {
                    type: 'write',
                    task: 'Create a paragraph that contains a bold (strong) text block inside of it!',
                    starterCode: '',
                    hint: '<p>Normal text <strong>bold text</strong> more normal text.</p>',
                    checks: [
                        { type: 'contains', value: '<p>', desc: 'Contains paragraph tags' },
                        { type: 'contains', value: '<strong>', desc: 'Contains strong tags inside' }
                    ]
                }
            ]
        },

        // ===== LESSON 13: Tables =====
        {
            num: 13, title: 'Tables', xp: 25,
            subtitle: 'Tabular data representation',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>📊 HTML Tables</h3>
                        <p>Tabular layouts are built using four core structures:</p>
                        <p>🔹 <code>&lt;table&gt;</code> = Table wrapper</p>
                        <p>🔹 <code>&lt;tr&gt;</code> = Table Row (horizontal row line)</p>
                        <p>🔹 <code>&lt;th&gt;</code> = Table Header cell (bold and centered title)</p>
                        <p>🔹 <code>&lt;td&gt;</code> = Table Data cell (standard content cell)</p>
                        <div class="code-example">
&lt;table&gt;<br>
&nbsp;&nbsp;&lt;tr&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Product&lt;/th&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Price&lt;/th&gt;<br>
&nbsp;&nbsp;&lt;/tr&gt;<br>
&nbsp;&nbsp;&lt;tr&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Apple&lt;/td&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;$1.00&lt;/td&gt;<br>
&nbsp;&nbsp;&lt;/tr&gt;<br>
&lt;/table&gt;
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'What does the <tr> tag represent?',
                    options: [
                        'A row in the table (Table Row)',
                        'A header cell in the table (Table Header)'
                    ],
                    correct: 0,
                    hint: 'Row runs horizontally.',
                    explanation: 'Yes! tr stands for Table Row. th stands for Table Header.'
                },
                {
                    type: 'fill',
                    instruction: 'Complete the table header row skeleton:',
                    code: '&lt;___&gt;\n  &lt;tr&gt;\n    &lt;___&gt;Item&lt;/th&gt;\n    &lt;th&gt;Qty&lt;/th&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;',
                    answers: ['table', 'th'],
                    hint: 'The main table tag and the header tag.'
                },
                {
                    type: 'write',
                    task: 'Write a table with one row containing two header columns: "Language" and "Difficulty"!',
                    starterCode: '<table>\n  \n</table>',
                    hint: 'Create a <tr> and put two <th> cells inside it.',
                    checks: [
                        { type: 'contains', value: '<tr>', desc: 'Contains a row' },
                        { type: 'contains', value: '<th>', desc: 'Contains header cells' }
                    ]
                }
            ]
        },

        // ===== LESSON 14: Forms =====
        {
            num: 14, title: 'Forms', xp: 25,
            subtitle: 'Gathering visitor inputs',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>📝 Interactive Input Forms</h3>
                        <p>Forms send data from users back to servers. You construct them using form elements:</p>
                        <div class="code-example">
&lt;form&gt;<br>
&nbsp;&nbsp;&lt;input type="text" placeholder="Name"&gt;<br>
&nbsp;&nbsp;&lt;button&gt;Submit&lt;/button&gt;<br>
&lt;/form&gt;
                        </div>
                        <p>🔹 <code>&lt;form&gt;</code> = Wrapper container</p>
                        <p>🔹 <code>&lt;input&gt;</code> = Input field (self-closing)</p>
                        <p>🔹 <code>&lt;button&gt;</code> = Action trigger button</p>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Which element represents a text input field?',
                    options: ['<input>', '<form>'],
                    correct: 0,
                    hint: 'Users type their text inside this element.',
                    explanation: 'Correct! <input> creates a text field. <form> wraps the fields together.'
                },
                {
                    type: 'info',
                    content: `
                        <h3>🔧 Basic Input Types</h3>
                        <div class="code-example">
&lt;input type="text"&gt; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ Normal text input<br>
&lt;input type="email"&gt; &nbsp;&nbsp;&nbsp;&nbsp;→ Validated email input<br>
&lt;input type="password"&gt; → Masked secret characters<br>
&lt;input type="number"&gt; &nbsp;&nbsp;→ Numeric selector
                        </div>
                    `
                },
                {
                    type: 'fill',
                    instruction: 'Create a form containing a password input:',
                    code: '&lt;___&gt;\n  &lt;input type="___" placeholder="Password"&gt;\n&lt;/form&gt;',
                    answers: ['form', 'password'],
                    hint: 'The parent tag name and the input type string.'
                },
                {
                    type: 'write',
                    task: 'Write a form containing an email input field and a submit button!',
                    starterCode: '',
                    hint: '<form><input type="email" placeholder="Email"><button>Submit</button></form>',
                    checks: [
                        { type: 'contains', value: '<form>', desc: 'Contains a form tag' },
                        { type: 'contains', value: 'type="email"', desc: 'Has type="email" input' },
                        { type: 'contains', value: '<button', desc: 'Has button' }
                    ]
                }
            ]
        },

        // ===== LESSON 15: Semantics =====
        {
            num: 15, title: 'Semantic Page Layout', xp: 30,
            subtitle: 'Professional document organization',
            steps: [
                {
                    type: 'info',
                    content: `
                        <h3>🏗️ Semantic Elements</h3>
                        <p>Semantic tags describe their contents to browsers and search engines. It makes code cleaner and accessible:</p>
                        <p>🔹 <code>&lt;header&gt;</code> = Top section (logos, site titles)</p>
                        <p>🔹 <code>&lt;nav&gt;</code> = Navigation menus (links)</p>
                        <p>🔹 <code>&lt;main&gt;</code> = Central page content</p>
                        <p>🔹 <code>&lt;footer&gt;</code> = Bottom disclaimer (copyright, social links)</p>
                        <div class="code-example">
&lt;header&gt;<br>
&nbsp;&nbsp;&lt;nav&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/nav&gt;<br>
&lt;/header&gt;<br>
&lt;main&gt;<br>
&nbsp;&nbsp;&lt;h1&gt;Welcome&lt;/h1&gt;<br>
&lt;/main&gt;<br>
&lt;footer&gt;&copy; 2025&lt;/footer&gt;
                        </div>
                    `
                },
                {
                    type: 'quiz',
                    question: 'Which element contains the main layout topic body of the webpage?',
                    options: ['<main>', '<nav>'],
                    correct: 0,
                    hint: 'Nav is only for navigation menu links.',
                    explanation: 'Correct! <main> wraps the primary content area.'
                },
                {
                    type: 'fill',
                    instruction: 'Add the semantic page headers and footers:',
                    code: '&lt;___&gt;\n  &lt;h1&gt;Site Banner&lt;/h1&gt;\n&lt;/header&gt;\n&lt;main&gt;\n  &lt;p&gt;Article&lt;/p&gt;\n&lt;/main&gt;\n&lt;___&gt;\n  &lt;p&gt;Copyright&lt;/p&gt;\n&lt;/___&gt;',
                    answers: ['header', 'footer', 'footer'],
                    hint: 'First blank is the top wrapper name, last two are the bottom wrapper.'
                },
                {
                    type: 'write',
                    task: 'Write a page outline using header, main, and footer tags!',
                    starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  \n</body>\n</html>',
                    hint: 'Place <header></header>, <main></main>, and <footer></footer> inside the body.',
                    checks: [
                        { type: 'contains', value: '<header>', desc: 'Contains <header>' },
                        { type: 'contains', value: '<main>', desc: 'Contains <main>' },
                        { type: 'contains', value: '<footer>', desc: 'Contains <footer>' }
                    ]
                }
            ]
        }
    ]
};
