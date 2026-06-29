/* ============================================
   CodePilot – Luau Lessons
   ============================================ */

LESSONS.luau = [
    // ===== LESSON 1: What is Luau? =====
    {
        num: 1, title: 'What is Luau?', xp: 20,
        subtitle: 'Learn the scripting language of Roblox',
        steps: [
            {
                type: 'info',
                content: `
                    <h3>🎮 Scripting Roblox Games</h3>
                    <p>Unlike HTML which only defines the blueprint/layout of websites, <strong>Luau is a scripting language</strong> that creates dynamic logic.</p>
                    <p>Luau is used in <strong>Roblox Studio</strong> to make games interactive. You can write scripts to:</p>
                    <div class="highlight-box">
                        <p>⭐ Open a door when touched</p>
                        <p>⭐ Increase a player's coins when they collect items</p>
                        <p>⭐ Move a train forward in the game world</p>
                    </div>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 Luau runs logical commands in your game, while HTML only designs static webpage layouts.',
                question: 'What is Luau used for in Roblox Studio?',
                options: [
                    'To script actions like opening doors or score systems',
                    'To design the static layouts of websites'
                ],
                correct: 0,
                hint: 'Luau is for active game behavior.',
                explanation: 'Correct! Luau handles all active scripting inside your 3D Roblox worlds.'
            },
            {
                type: 'info',
                content: `
                    <h3>📠 Printing to the Output</h3>
                    <p>The simplest way to verify your code is running is using the <code>print()</code> function.</p>
                    <p>Roblox Studio prints whatever text is inside the parentheses into the <strong>Output window</strong>:</p>
                    <div class="code-example">
                        print("Hello Roblox!")
                    </div>
                    <p>Make sure to surround your text in quotes <code>"..."</code>!</p>
                `
            },
            {
                type: 'fill',
                quickInfo: '💡 Use <code>print()</code> to print status messages. Always write the text inside quotes.',
                instruction: 'Print the word "Welcome" to the Output window:',
                code: 'print("___")',
                answers: ['Welcome'],
                distractors: ['tag', 'div'],
                hint: 'Type "Welcome" inside the quotes.'
            },
            {
                type: 'write',
                quickInfo: '💡 The <code>print()</code> command requires parentheses and quotes surrounding the text.',
                task: 'Write a line of Luau code that prints "Roblox" to the output!',
                starterCode: '',
                hint: 'Example code: <br><code>print("Roblox")</code>',
                checks: [
                    { type: 'contains', value: 'print("roblox")', desc: 'Contains print("Roblox")' }
                ]
            }
        ]
    },

    // ===== LESSON 2: Variables =====
    {
        num: 2, title: 'Variables', xp: 20,
        subtitle: 'Storing data in your script',
        steps: [
            {
                type: 'info',
                content: `
                    <h3>📦 What is a Variable?</h3>
                    <p>A variable is like a storage box. It holds a value (like a score, player name, or object speed) so you can use it later.</p>
                    <p>In Luau, we create variables using the <code>local</code> keyword:</p>
                    <div class="code-example">
                        local coins = 100<br>
                        local name = "Developer"
                    </div>
                    <p><code>local</code> means the variable is only visible within its block of script.</p>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 Variables store variables. You must precede them with the keyword <code>local</code>.',
                question: 'Which keyword is used to declare a variable in Roblox Luau?',
                options: [
                    'local',
                    'let'
                ],
                correct: 0,
                hint: 'Luau uses local scopes for variables.',
                explanation: 'Right! The keyword local is standard for variable creations.'
            },
            {
                type: 'info',
                content: `
                    <h3>🔄 Updating Variables</h3>
                    <p>Once a variable is created, you can modify it by writing its name without the local keyword:</p>
                    <div class="code-example">
                        local speed = 10<br>
                        speed = 25 -- speed is now 25!
                    </div>
                `
            },
            {
                type: 'fill',
                quickInfo: '💡 Start variable declarations with <code>local</code>, followed by name and assignment.',
                instruction: 'Create a local variable named "score":',
                code: '___ score = 500',
                answers: ['local'],
                distractors: ['var', 'let'],
                hint: 'Use the keyword "local".'
            },
            {
                type: 'write',
                quickInfo: '💡 Assign values using the equals sign (<code>=</code>) after the local variable name.',
                task: 'Declare a local variable named speed and assign the number 50 to it!',
                starterCode: '',
                hint: 'Example code: <br><code>local speed = 50</code>',
                checks: [
                    { type: 'regex', value: 'local\\s+speed\\s*=\\s*50', desc: 'Sets speed = 50' }
                ]
            }
        ]
    },

    // ===== LESSON 3: Functions =====
    {
        num: 3, title: 'Functions', xp: 25,
        subtitle: 'Grouping reusable commands',
        steps: [
            {
                type: 'info',
                content: `
                    <h3>🛠️ Functions</h3>
                    <p>A function groups statements together under a name. You can run those statements anytime by calling its name:</p>
                    <div class="code-example">
                        local function sayHello()<br>
                        &nbsp;&nbsp;print("Hello!")<br>
                        end
                    </div>
                    <p>To run this function, call it: <code>sayHello()</code></p>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 Call functions by writing their name followed by parentheses.',
                question: 'How do you execute a function named "jump"?',
                options: [
                    'jump()',
                    'function jump'
                ],
                correct: 0,
                hint: 'Use the function call parentheses.',
                explanation: 'Correct! Parentheses prompt the interpreter to run the function.'
            },
            {
                type: 'info',
                content: `
                    <h3>🛑 Ending Blocks</h3>
                    <p>In Luau, code blocks (like functions, loops, or conditionals) must terminate with the keyword <code>end</code>.</p>
                    <p>This tells the engine where the statements stop.</p>
                `
            },
            {
                type: 'fill',
                quickInfo: '💡 Blocks must close with the keyword <code>end</code>.',
                instruction: 'Close this function block:',
                code: 'local function test()\n  print("Testing")\n___',
                answers: ['end'],
                distractors: ['stop', 'close'],
                hint: 'Write the keyword "end".'
            },
            {
                type: 'write',
                quickInfo: '💡 Define functions starting with <code>local function</code> and end them with <code>end</code>.',
                task: 'Write a local function named test that prints "Yes" and then call it test()!',
                starterCode: '',
                hint: 'Example code: <br><code>local function test()<br>  print("Yes")<br>end<br>test()</code>',
                checks: [
                    { type: 'contains', value: 'function test', desc: 'Defines test' },
                    { type: 'contains', value: 'test()', desc: 'Calls test()' }
                ]
            }
        ]
    },

    // ===== LESSON 4: The Workspace =====
    {
        num: 4, title: 'The Workspace', xp: 25,
        subtitle: 'Accessing game world elements',
        steps: [
            {
                type: 'info',
                content: `
                    <h3>🌐 The Workspace</h3>
                    <p>The 3D space containing all bricks, characters, and lights is called the <code>workspace</code>.</p>
                    <p>You can access items by chain-indexing their name: <code>workspace.PartName</code>.</p>
                    <div class="code-example">
                        workspace.Baseplate.Anchored = true
                    </div>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 Access 3D parts by writing <code>workspace.PartName</code>.',
                question: 'How do you target a part named "GoldCoin" in the workspace?',
                options: [
                    'workspace.GoldCoin',
                    'game.GoldCoin'
                ],
                correct: 0,
                hint: 'Refer directly to the workspace keyword.',
                explanation: 'Right! The workspace keyword targets the 3D map environment.'
            },
            {
                type: 'info',
                content: `
                    <h3>🧱 Part Properties</h3>
                    <p>Every object has properties like <code>Transparency</code>, <code>Anchored</code> (anchors it in the sky), and <code>CanCollide</code> (determines if players fall through it).</p>
                    <p>Assigning values changes them instantly!</p>
                `
            },
            {
                type: 'fill',
                quickInfo: '💡 The property that locks parts in space is <code>Anchored</code>.',
                instruction: 'Anchor the object workspace.Wall:',
                code: 'workspace.Wall.___ = true',
                answers: ['Anchored'],
                distractors: ['Position', 'Locked'],
                hint: 'Type "Anchored".'
            },
            {
                type: 'write',
                quickInfo: '💡 Transparency values range from 0 (solid) to 1 (invisible).',
                task: 'Set the transparency of workspace.Glass to 0.8!',
                starterCode: '',
                hint: 'Example code: <br><code>workspace.Glass.Transparency = 0.8</code>',
                checks: [
                    { type: 'regex', value: 'workspace\\.glass\\.transparency\\s*=\\s*0\\.8', desc: 'Sets transparency = 0.8' }
                ]
            }
        ]
    },

    // ===== LESSON 5: Vector3 (Positioning) =====
    {
        num: 5, title: 'Vector3 Positions', xp: 25,
        subtitle: 'Moving 3D elements',
        steps: [
            {
                type: 'info',
                content: `
                    <h3>📐 3D Coordinates</h3>
                    <p>Roblox represents locations in 3D using <code>Vector3</code> (holding X, Y, Z components).</p>
                    <p>To move a part, allocate a new Vector3 instance:</p>
                    <div class="code-example">
                        workspace.Part.Position = Vector3.new(0, 10, 0)
                    </div>
                    <p>This teleports the block to coordinate height 10!</p>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 Vector3 coordinate components are (X, Y, Z) respectively.',
                question: 'Which dimension coordinate represents vertical height (up & down) in Roblox?',
                options: [
                    'The Y coordinate',
                    'The X coordinate'
                ],
                correct: 0,
                hint: 'Y moves columns up and down.',
                explanation: 'Correct! Y corresponds to vertical elevation.'
            },
            {
                type: 'fill',
                quickInfo: '💡 Instantiate coordinates using <code>Vector3.new(x, y, z)</code>.',
                instruction: 'Instantiate a new position:',
                code: 'workspace.Block.Position = Vector3.___ (10, 20, 10)',
                answers: ['new'],
                distractors: ['create', 'set'],
                hint: 'Call the "new" constructor.'
            },
            {
                type: 'write',
                quickInfo: '💡 Teleport spikes or items instantly by changing their position attribute.',
                task: 'Set the position of workspace.Spike to Vector3.new(0, 15, 0)!',
                starterCode: '',
                hint: 'Example code: <br><code>workspace.Spike.Position = Vector3.new(0, 15, 0)</code>',
                checks: [
                    { type: 'regex', value: 'workspace\\.spike\\.position\\s*=\\s*vector3\\.new\\(0,\\s*15,\\s*0\\)', desc: 'Sets Position to Vector3.new(0,15,0)' }
                ]
            }
        ]
    }
];
