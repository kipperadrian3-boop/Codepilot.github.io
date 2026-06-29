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
                    { type: 'state', value: 'res.prints.includes("roblox")', desc: 'Prints "Roblox" to the output console' }
                ]
            }
        ]
    },

    // ===== LESSON 2: Variables Explained =====
    {
        num: 2, title: 'Variables Deep Dive', xp: 20,
        subtitle: 'Storing different data types in your script',
        steps: [
            {
                type: 'info',
                content: `
                    <h3>📦 Labeled Storage Boxes</h3>
                    <p>A variable holds data so you can reference it later. In Luau, you can store <strong>3 main types of data</strong>:</p>
                    <p>1️⃣ <strong>Numbers:</strong> (e.g. <code>local score = 10</code> - no quotes! Used for math)</p>
                    <p>2️⃣ <strong>Strings (Text):</strong> (e.g. <code>local name = "Player1"</code> - always inside quotes <code>""</code>!)</p>
                    <p>3️⃣ <strong>Booleans (Switches):</strong> (e.g. <code>local isAlive = true</code> - can only be <code>true</code> or <code>false</code>!)</p>
                    <p>We use the <code>local</code> keyword to create them. This ensures the variable is scoped safely inside your script block.</p>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 Text strings are surrounded by quotes, while numbers and booleans are written directly.',
                question: 'Which variable holds a String (Text)?',
                options: [
                    'local tag = "Roblox"',
                    'local count = 25'
                ],
                correct: 0,
                hint: 'Strings must be wrapped inside double quotes.',
                explanation: 'Right! "Roblox" is a string because of the quotes. 25 is a raw number.'
            },
            {
                type: 'info',
                content: `
                    <h3>🔄 Modifying Variables</h3>
                    <p>Once a variable is created, you can modify it by writing its name without the local keyword:</p>
                    <div class="code-example">
                        local speed = 10<br>
                        speed = 25 -- speed is now 25!
                    </div>
                    <p>Remember: write <code>local</code> ONLY when declaring it the first time!</p>
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
                quickInfo: '💡 Change variables by writing their name and assigning a new value.',
                task: 'Modify the starter code so that speed is changed to 30 instead of 20!',
                starterCode: 'local speed = 20\\n-- Change speed below to 30:\\nspeed = 20',
                hint: 'Example code: <br><code>speed = 30</code>',
                checks: [
                    { type: 'state', value: 'res.success && code.includes("speed") && code.match(/speed\\s*=\\s*30/)', desc: 'Changes speed variable to 30' }
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
                    { type: 'state', value: 'res.prints.includes("yes")', desc: 'Executes test() printing "Yes" to output' }
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
                    <p>The 3D space containing all bricks, characters, and lights is called the <code>Workspace</code>.</p>
                    <p>You can access items by chain-indexing their name under the root: <code>game.Workspace.PartName</code>.</p>
                    <div class="code-example">
                        game.Workspace.Baseplate.Anchored = true
                    </div>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 Access 3D parts by writing the full path: <code>game.Workspace.PartName</code>.',
                question: 'How do you target a part named "GoldCoin" in the workspace?',
                options: [
                    'game.Workspace.GoldCoin',
                    'game.GoldCoin'
                ],
                correct: 0,
                hint: 'Refer to the Workspace service inside game.',
                explanation: 'Right! game.Workspace.GoldCoin targets the object correctly.'
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
                instruction: 'Anchor the object game.Workspace.Wall:',
                code: 'game.Workspace.Wall.___ = true',
                answers: ['Anchored'],
                distractors: ['Position', 'Locked'],
                hint: 'Type "Anchored".'
            },
            {
                type: 'write',
                quickInfo: '💡 Transparency values range from 0 (solid) to 1 (invisible).',
                task: 'Set the transparency of game.Workspace.Glass to 0.8!',
                starterCode: '',
                hint: 'Example code: <br><code>game.Workspace.Glass.Transparency = 0.8</code>',
                checks: [
                    { type: 'state', value: 'res.success && code.includes("transparency") && code.includes("0.8")', desc: 'Sets transparency of Glass to 0.8' }
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
                        game.Workspace.Part.Position = Vector3.new(0, 10, 0)
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
                code: 'game.Workspace.Block.Position = Vector3.___ (10, 20, 10)',
                answers: ['new'],
                distractors: ['create', 'set'],
                hint: 'Call the "new" constructor.'
            },
            {
                type: 'write',
                quickInfo: '💡 Teleport spikes or items instantly by changing their position attribute.',
                task: 'Set the position of game.Workspace.Spike to Vector3.new(0, 15, 0)!',
                starterCode: '',
                hint: 'Example code: <br><code>game.Workspace.Spike.Position = Vector3.new(0, 15, 0)</code>',
                checks: [
                    { type: 'state', value: 'res.success && code.includes("vector3.new") && code.includes("0, 15, 0") || code.includes("0,15,0")', desc: 'Sets Spike Position to Vector3.new(0, 15, 0)' }
                ]
            }
        ]
    },

    // ===== LESSON 6: If Statements =====
    {
        num: 6, title: 'If Statements', xp: 20,
        subtitle: 'Making decisions in code',
        steps: [
            {
                type: 'info',
                content: `
                    <h3>🤔 Conditional Decisions</h3>
                    <p>In games, you often want to run code only if something is true. For example: "If player has 10 coins, let them buy the item."</p>
                    <p>We write this using an <code>if</code> statement:</p>
                    <div class="code-example">
                        local coins = 15<br>
                        if coins >= 10 then<br>
                        &nbsp;&nbsp;print("Item purchased!")<br>
                        end
                    </div>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 An if statement executes its internal commands only when the condition is true.',
                question: 'Which keyword completes the conditional header of an if statement in Luau?',
                options: [
                    'then',
                    'do'
                ],
                correct: 0,
                hint: 'If X holds, "then" do Y.',
                explanation: 'Right! The then keyword marks the completion of the condition verification.'
            },
            {
                type: 'fill',
                quickInfo: '💡 Use comparison operators like <code>&gt;=</code> (greater or equal) inside if headers.',
                instruction: 'Complete the condition to check if score is greater than or equal to 100:',
                code: 'if score ___ 100 then\n  print("Win!")\nend',
                answers: ['>='],
                distractors: ['=>', '='],
                hint: 'The operator is greater than (>) followed by equals (=).'
            },
            {
                type: 'write',
                quickInfo: '💡 Change variables to trigger if condition branches that are blocked by low values.',
                task: 'Modify the speed variable value in the starter code so that the condition speed > 10 is met and the console prints "Fast"!',
                starterCode: 'local speed = 5\n-- Change speed so it is greater than 10:\nspeed = 5\nif speed > 10 then\n  print("Fast")\nend',
                hint: 'Example code: <br><code>speed = 15</code>',
                checks: [
                    { type: 'state', value: 'res.prints.includes("fast")', desc: 'Updates speed to trigger printing "Fast" to output' }
                ]
            }
        ]
    },

    // ===== LESSON 7: Touched Event =====
    {
        num: 7, title: 'Touched Event', xp: 25,
        subtitle: 'Detecting physical collisions',
        steps: [
            {
                type: 'info',
                content: `
                    <h3>💥 Collisions & Touches</h3>
                    <p>To detect when a player or part collides with another part, we use the <code>Touched</code> event.</p>
                    <p>We connect the event to a function so it runs when a touch occurs:</p>
                    <div class="code-example">
                        local part = game.Workspace.Trap<br>
                        part.Touched:Connect(function()<br>
                        &nbsp;&nbsp;print("Object touched!")<br>
                        end)
                    </div>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 Connect events to functions using the colon syntax <code>:Connect()</code>.',
                question: 'Which syntax connects a function to an event?',
                options: [
                    ':Connect()',
                    '.Connect()'
                ],
                correct: 0,
                hint: 'Lua uses colon for method invocations on instances.',
                explanation: 'Correct! Instance methods in Luau are invoked with a colon symbol.'
            },
            {
                type: 'fill',
                quickInfo: '💡 Connect event handlers using <code>:Connect()</code>.',
                instruction: 'Trigger print when the target checkpoint is touched:',
                code: 'game.Workspace.Checkpoint.Touched:___(function()\n  print("Saved")\nend)',
                answers: ['Connect'],
                distractors: ['Bind', 'Link'],
                hint: 'Type "Connect" (capital C).'
            },
            {
                type: 'write',
                quickInfo: '💡 Connect the <code>Touched</code> event of a part to an anonymous printing function.',
                task: 'Connect game.Workspace.Part.Touched to a function that prints "Hit"!',
                starterCode: '',
                hint: 'Example code: <br><code>game.Workspace.Part.Touched:Connect(function()<br>  print("Hit")<br>end)</code>',
                checks: [
                    { type: 'state', value: 'res.prints.includes("hit")', desc: 'Connects touched event printing "Hit" on contact' }
                ]
            }
        ]
    },

    // ===== LESSON 8: Accessing Players =====
    {
        num: 8, title: 'Accessing Players', xp: 25,
        subtitle: 'Identifying who touched the part',
        steps: [
            {
                type: 'info',
                content: `
                    <h3>👤 Character hit verification</h3>
                    <p>When a part is touched, the event passes the object that touched it as a parameter (often called <code>hit</code>).</p>
                    <p><code>hit</code> is a leg or arm. <code>hit.Parent</code> is the Player's 3D Character model!</p>
                    <div class="code-example">
                        local function onTouch(hit)<br>
                        &nbsp;&nbsp;local character = hit.Parent<br>
                        &nbsp;&nbsp;local player = game.Players:GetPlayerFromCharacter(character)<br>
                        end
                    </div>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 Use <code>GetPlayerFromCharacter</code> helper to retrieve the backend Player instance from the 3D Character.',
                question: 'How do you retrieve the player object from a character model?',
                options: [
                    'game.Players:GetPlayerFromCharacter(hit.Parent)',
                    'game.Players:GetPlayer(hit)'
                ],
                correct: 0,
                hint: 'Roblox uses GetPlayerFromCharacter to translate characters to players.',
                explanation: 'Right! GetPlayerFromCharacter references the backend player profile.'
            },
            {
                type: 'fill',
                quickInfo: '💡 Call <code>GetPlayerFromCharacter</code> on the Players service.',
                instruction: 'Find the player who touched the part:',
                code: 'local player = game.Players:___(hit.Parent)',
                answers: ['GetPlayerFromCharacter'],
                distractors: ['FindPlayer', 'GetPlayer'],
                hint: 'Type "GetPlayerFromCharacter".'
            },
            {
                type: 'write',
                quickInfo: '💡 Translate character models into player profiles inside standard event listeners.',
                task: 'Find the player from hit.Parent and store it in a local variable named player!',
                starterCode: 'local function onTouch(hit)\n  \nend',
                hint: 'Example code: <br><code>local player = game.Players:GetPlayerFromCharacter(hit.Parent)</code>',
                checks: [
                    { type: 'state', value: 'res.success && code.includes("getplayerfromcharacter")', desc: 'Calls GetPlayerFromCharacter(hit.Parent)' }
                ]
            }
        ]
    },

    // ===== LESSON 9: Service Access =====
    {
        num: 9, title: 'Service Access', xp: 20,
        subtitle: 'Loading core system services',
        steps: [
            {
                type: 'info',
                content: `
                    <h3>🛠️ Roblox Services</h3>
                    <p>Services manage game settings, animations, players, and assets. To load a service, use <code>game:GetService("ServiceName")</code>.</p>
                    <div class="code-example">
                        local storage = game:GetService("ReplicatedStorage")<br>
                        local players = game:GetService("Players")
                    </div>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 Load services by calling <code>game:GetService("Service")</code>.',
                question: 'How do you securely reference the ReplicatedStorage service?',
                options: [
                    'game:GetService("ReplicatedStorage")',
                    'game.ReplicatedStorage'
                ],
                correct: 0,
                hint: 'GetService ensures the service starts correctly.',
                explanation: 'Correct! GetService is the standardized API method for service queries.'
            },
            {
                type: 'fill',
                quickInfo: '💡 The API call to retrieve services is <code>GetService</code>.',
                instruction: 'Load the ReplicatedStorage service:',
                code: 'local rs = game:___("ReplicatedStorage")',
                answers: ['GetService'],
                distractors: ['FindService', 'LoadService'],
                hint: 'Type "GetService".'
            },
            {
                type: 'write',
                quickInfo: '💡 Call GetService on the global game scope to load the TweenService.',
                task: 'Get the TweenService service and save it to a local variable named tweenService!',
                starterCode: '',
                hint: 'Example code: <br><code>local tweenService = game:GetService("TweenService")</code>',
                checks: [
                    { type: 'state', value: 'res.success && code.includes("getservice")', desc: 'Calls game:GetService("TweenService")' }
                ]
            }
        ]
    },

    // ===== LESSON 10: Remote Events =====
    {
        num: 10, title: 'Remote Events', xp: 25,
        subtitle: 'Server-Client communication',
        steps: [
            {
                type: 'info',
                content: `
                    <h3>📡 Crossing the Boundary</h3>
                    <p>Client script (running on player screens) cannot change server data directly. To communicate, we use <strong>Remote Events</strong>.</p>
                    <p>A client script can trigger a server script by firing a remote event:</p>
                    <div class="code-example">
                        local remote = game.Workspace.BuyRequest<br>
                        remote:FireServer()
                    </div>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 Fire messages from client-side UI buttons to the server using <code>FireServer()</code>.',
                question: 'Which method alerts the server script from a local client UI script?',
                options: [
                    'FireServer()',
                    'FireClient()'
                ],
                correct: 0,
                hint: 'Trigger a server action ("FireServer").',
                explanation: 'Right! FireServer pushes packets from local users to the server host.'
            },
            {
                type: 'fill',
                quickInfo: '💡 Invoke server listeners by using <code>FireServer()</code>.',
                instruction: 'Fire the remote event "GoldEvent" to the server:',
                code: 'local remote = game.Workspace.GoldEvent\nremote:___()',
                answers: ['FireServer'],
                distractors: ['Fire', 'Trigger'],
                hint: 'Type "FireServer".'
            },
            {
                type: 'write',
                quickInfo: '💡 Invoke remote events to request transactions or trigger global actions.',
                task: 'Fire a remote event stored in local variable remote to the server!',
                starterCode: 'local remote = game.Workspace.RemoteEvent\n',
                hint: 'Example code: <br><code>remote:FireServer()</code>',
                checks: [
                    { type: 'state', value: 'res.remoteFired === true', desc: 'Fires RemoteEvent:FireServer() successfully' }
                ]
            }
        ]
    },

    // ===== LESSON 11: Leaderstats =====
    {
        num: 11, title: 'Leaderstats', xp: 25,
        subtitle: 'Creating player scoreboards',
        steps: [
            {
                type: 'info',
                content: `
                    <h3>📊 Leaderboards</h3>
                    <p>To show a leaderboard on the top right, Roblox looks for a folder named exactly <code>leaderstats</code> inside each Player object.</p>
                    <div class="code-example">
                        local stats = Instance.new("Folder")<br>
                        stats.Name = "leaderstats"<br>
                        stats.Parent = player
                    </div>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 Roblox automatically displays folders named exactly <code>"leaderstats"</code> as scoreboard headers.',
                question: 'What is the required folder name for leaderboards?',
                options: [
                    '"leaderstats"',
                    '"scores"'
                ],
                correct: 0,
                hint: 'All letters must be lowercase.',
                explanation: 'Correct! The exact name leaderstats triggers the Roblox scoreboard overlay.'
            },
            {
                type: 'fill',
                quickInfo: '💡 Set the Folder instance Name attribute to <code>"leaderstats"</code>.',
                instruction: 'Rename the folder to display leaderboard stats:',
                code: 'local stats = Instance.new("Folder")\nstats.Name = "___"',
                answers: ['leaderstats'],
                distractors: ['stats', 'scores'],
                hint: 'Type "leaderstats".'
            },
            {
                type: 'write',
                quickInfo: '💡 Create a folder, set its Name to "leaderstats", and set its Parent to player.',
                task: 'Create a local Folder named "leaderstats" and parent it to player!',
                starterCode: 'local player = nil\n',
                hint: 'Example code: <br><code>local stats = Instance.new("Folder")<br>stats.Name = "leaderstats"<br>stats.Parent = player</code>',
                checks: [
                    { type: 'state', value: 'res.success && code.includes("folder") && code.includes("leaderstats")', desc: 'Creates a Folder named "leaderstats" parented to player' }
                ]
            }
        ]
    },

    // ===== LESSON 12: Loops =====
    {
        num: 12, title: 'Loops', xp: 20,
        subtitle: 'Repeating commands indefinitely',
        steps: [
            {
                type: 'info',
                content: `
                    <h3>🔄 Infinite Loops</h3>
                    <p>Loops repeat code blocks. An infinite loop runs forever using <code>while true do</code>:</p>
                    <div class="code-example">
                        while true do<br>
                        &nbsp;&nbsp;print("Repeating...")<br>
                        &nbsp;&nbsp;task.wait(1) -- wait 1 second!<br>
                        end
                    </div>
                    <div class="highlight-box warning">
                        <p>⚠️ <strong>Warning:</strong> You must ALWAYS include a wait command like <code>task.wait()</code>. Otherwise, the game will freeze!</p>
                    </div>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 Infinite loops run continuously. They require yield pauses to prevent thread freezes.',
                question: 'Why must you write task.wait() inside a while true loop?',
                options: [
                    'To prevent the game from freezing and crashing',
                    'To make the loop run faster'
                ],
                correct: 0,
                hint: 'If code runs infinitely without stopping, the CPU locks up.',
                explanation: 'Right! task.wait() gives the game processor time to update other animations.'
            },
            {
                type: 'fill',
                quickInfo: '💡 Close loop blocks using the keyword <code>end</code>.',
                instruction: 'Close the loop block:',
                code: 'while true do\n  print("Looping")\n  task.wait(1)\n___',
                answers: ['end'],
                distractors: ['loop', 'next'],
                hint: 'Write the keyword "end".'
            },
            {
                type: 'write',
                quickInfo: '💡 Change loop parameters to speed up or slow down repeat iteration timers.',
                task: 'Modify the wait time inside the loop so that the script waits for 5 seconds instead of 2!',
                starterCode: 'while true do\n  task.wait(2)\n  print("Roblox")\nend',
                hint: 'Example code: <br><code>task.wait(5)</code>',
                checks: [
                    { type: 'state', value: 'res.success && (code.includes("wait(5)") || code.includes("wait( 5 )"))', desc: 'Sets loop wait delay to 5 seconds' }
                ]
            }
        ]
    },

    // ===== LESSON 13: Spawning Parts =====
    {
        num: 13, title: 'Spawning Parts', xp: 25,
        subtitle: 'Creating objects using code',
        steps: [
            {
                type: 'info',
                content: `
                    <h3>🧱 Spawning Objects</h3>
                    <p>You can create brand new blocks dynamically using <code>Instance.new("Part")</code>.</p>
                    <p>After creating, make sure to set its <code>Parent</code> (usually <code>game.Workspace</code>) so it becomes visible!</p>
                    <div class="code-example">
                        local block = Instance.new("Part")<br>
                        block.Parent = game.Workspace<br>
                        block.Position = Vector3.new(0, 5, 0)
                    </div>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 Instantiate new items by passing the object class name to <code>Instance.new()</code>.',
                question: 'How do you instantiate a new brick object?',
                options: [
                    'Instance.new("Part")',
                    'Part.new()'
                ],
                correct: 0,
                hint: 'Call the Instance.new constructor.',
                explanation: 'Correct! Instance.new is the built-in Roblox constructor for all object types.'
            },
            {
                type: 'fill',
                quickInfo: '💡 Create parts using <code>Instance.new("Part")</code>.',
                instruction: 'Create a new Part instance:',
                code: 'local part = Instance.___("Part")',
                answers: ['new'],
                distractors: ['create', 'spawn'],
                hint: 'Type "new".'
            },
            {
                type: 'write',
                quickInfo: '💡 Spawn parts, set their parent to game.Workspace, and anchor them so they float.',
                task: 'Spawn a new Part, set its parent to game.Workspace, and anchor it!',
                starterCode: '',
                hint: 'Example code: <br><code>local p = Instance.new("Part")<br>p.Parent = game.Workspace<br>p.Anchored = true</code>',
                checks: [
                    { type: 'state', value: 'res.success && code.includes("instance.new") && (code.includes("parent = game.workspace") || code.includes("parent = workspace"))', desc: 'Creates a Part parented to game.Workspace and anchors it' }
                ]
            }
        ]
    },

    // ===== LESSON 14: Cloning Objects =====
    {
        num: 14, title: 'Cloning Objects', xp: 25,
        subtitle: 'Duplicating templates dynamically',
        steps: [
            {
                type: 'info',
                content: `
                    <h3>🪞 Copying Templates</h3>
                    <p>Roblox games need to spawn duplicates of objects (like coins, barriers, or enemies). To duplicate an object, we use the <code>:Clone()</code> method.</p>
                    <p>Cloned objects remain hidden in memory until you assign their <code>Parent</code> property (usually setting it to <code>game.Workspace</code>)!\p>
                    <div class="code-example">
                        local template = game.Workspace.PartName<br>
                        local copy = template:Clone()<br>
                        copy.Parent = game.Workspace
                    </div>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 Duplicate existing items by calling the <code>:Clone()</code> method on your object template.',
                question: 'Which method duplicates a Roblox object?',
                options: [
                    'Clone()',
                    'Duplicate()'
                ],
                correct: 0,
                hint: 'Call the :Clone method.',
                explanation: 'Correct! :Clone() creates an exact duplicate copy of the object template.'
            },
            {
                type: 'info',
                content: `
                    <h3>🏁 Parent property assign</h3>
                    <p>When you clone an object, it has no parent. You must explicitly set its <code>Parent</code> property to make it appear:</p>
                    <div class="code-example">
                        local myClone = template:Clone()<br>
                        myClone.Parent = game.Workspace -- now it exists in the game!
                    </div>
                `
            },
            {
                type: 'fill',
                quickInfo: '💡 Clone a part template using the <code>:Clone()</code> command.',
                instruction: 'Clone the template part:',
                code: 'local copy = template:___()',
                answers: ['Clone'],
                distractors: ['Copy', 'New'],
                hint: 'Use the Clone command.'
            },
            {
                type: 'write',
                quickInfo: '💡 Assign your cloned parts to <code>game.Workspace</code> to make them visible in the game map.',
                task: 'Clone the template, set its parent to game.Workspace, and print "Cloned"!',
                starterCode: 'local template = game.Workspace.Part\n',
                hint: 'Example code: <br><code>local copy = template:Clone()<br>copy.Parent = game.Workspace<br>print("Cloned")</code>',
                checks: [
                    { type: 'state', value: 'res.prints.includes("cloned")', desc: 'Clones the template part, parents it, and prints "Cloned"' }
                ]
            }
        ]
    },

    // ===== LESSON 15: Tweens =====
    {
        num: 15, title: 'Tweens', xp: 25,
        subtitle: 'Creating smooth animations',
        steps: [
            {
                type: 'info',
                content: `
                    <h3>🎬 Smooth Transitions</h3>
                    <p>Instead of teleporting parts instantly, <strong>TweenService</strong> transitions properties smoothly over time (like sliding doors or rotating coins).</p>
                    <div class="code-example">
                        local ts = game:GetService("TweenService")<br>
                        local tween = ts:Create(part, info, goals)<br>
                        tween:Play()
                    </div>
                `
            },
            {
                type: 'quiz',
                quickInfo: '💡 TweenService handles smooth animations for positions, sizes, and colors.',
                question: 'Which service handles smooth property transitions in Roblox?',
                options: [
                    'TweenService',
                    'AnimationService'
                ],
                correct: 0,
                hint: 'Look for "Tween" Service.',
                explanation: 'Correct! TweenService creates smooth animations for part attributes.'
            },
            {
                type: 'fill',
                quickInfo: '💡 Load the TweenService with GetService.',
                instruction: 'Fetch the TweenService service:',
                code: 'local ts = game:GetService("___")',
                answers: ['TweenService'],
                distractors: ['PhysicsService', 'MoveService'],
                hint: 'Type "TweenService".'
            },
            {
                type: 'write',
                quickInfo: '💡 Trigger tween animations by calling Play on the tween instance.',
                task: 'Get TweenService and play the tween stored in local variable myTween!',
                starterCode: 'local myTween = nil\n',
                hint: 'Example code: <br><code>local ts = game:GetService("TweenService")<br>myTween:Play()</code>',
                checks: [
                    { type: 'state', value: 'res.tweenPlayed === true', desc: 'Runs myTween:Play() to animate the transition' }
                ]
            }
        ]
    }
];
