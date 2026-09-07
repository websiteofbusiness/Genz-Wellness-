/* =========================================
   FUEL YOUR FUTURE
   COMPLETE INTERACTIVE COURSE
========================================= */


/* =========================================
   MODULE DATA
========================================= */

const modules = [

    {
        title: "Know Your Body",
        icon: "🧠",

        description:
            "Explore the basics of how everyday choices can support your body's needs.",

        cards: [
            ["⚡", "Energy",
             "Your body uses energy for movement, learning and everyday activities."],

            ["🥗", "Nutrients",
             "Different nutrients have different roles in normal body functions."],

            ["💧", "Hydration",
             "Water is an important part of keeping your body functioning normally."]
        ],

        activityTitle: "Quick Check",

        question:
            "Which approach is part of a balanced lifestyle?",

        options: [
            "Only focusing on one type of food",
            "Combining nutrition, movement, rest and wellbeing",
            "Skipping meals regularly",
            "Avoiding all physical activity"
        ],

        answer: 1,

        challenge:
            "Think about one healthy routine you already have and one small routine you would like to improve."
    },


    {
        title: "Food Fundamentals",
        icon: "🍎",

        description:
            "Explore how variety and balance can fit into everyday eating patterns.",

        cards: [
            ["🍎", "Variety",
             "Eating a variety of foods can help provide different nutrients."],

            ["🌾", "Food Groups",
             "Different food groups can contribute different nutrients and energy."],

            ["🥗", "Balance",
             "A balanced approach avoids unnecessary all-or-nothing rules."]
        ],

        activityTitle: "Build the Better Plate",

        question:
            "Which approach supports variety?",

        options: [
            "Eating only one food group",
            "Choosing a variety of foods",
            "Skipping meals",
            "Avoiding foods you enjoy completely"
        ],

        answer: 1,

        challenge:
            "At your next meal, notice the variety of foods you have without judging them."
    },


    {
        title: "Hydration",
        icon: "💧",

        description:
            "Learn simple ways to make hydration part of your everyday routine.",

        cards: [
            ["💧", "Water",
             "Water supports many normal functions in the body."],

            ["🎒", "Keep It Nearby",
             "Having water accessible can make it easier to remember to drink."],

            ["☀️", "Daily Routine",
             "Fluid needs can vary depending on activity and environment."]
        ],

        activityTitle: "Hydration Check",

        question:
            "Which habit can make hydration easier?",

        options: [
            "Never drinking water",
            "Keeping water nearby",
            "Only drinking once a day",
            "Replacing all water with sugary drinks"
        ],

        answer: 1,

        challenge:
            "Keep a reusable water bottle nearby during one part of your day."
    },


    {
        title: "Energy & Movement",
        icon: "⚡",

        description:
            "Discover enjoyable ways movement can become part of everyday life.",

        cards: [
            ["🚶", "Move",
             "Walking, playing and everyday movement can all contribute to an active lifestyle."],

            ["🎵", "Enjoyment",
             "Choosing activities you enjoy can make movement easier to maintain."],

            ["🧘", "Recovery",
             "Rest and recovery are important parts of a healthy routine."]
        ],

        activityTitle: "Movement Mindset",

        question:
            "Which is a positive approach to movement?",

        options: [
            "Movement has to be extreme",
            "Choose enjoyable ways to move regularly",
            "Never take rest",
            "Exercise only when you feel guilty"
        ],

        answer: 1,

        challenge:
            "Choose one enjoyable way to move today."
    },


    {
        title: "Sleep & Recovery",
        icon: "😴",

        description:
            "Explore why sleep and recovery deserve a place in your wellbeing routine.",

        cards: [
            ["🌙", "Sleep",
             "Sleep supports many aspects of physical and mental wellbeing."],

            ["📵", "Wind Down",
             "A calming bedtime routine can help you prepare for sleep."],

            ["🔄", "Consistency",
             "A regular routine can support healthy sleep habits."]
        ],

        activityTitle: "Sleep Habit",

        question:
            "Which can support a relaxing bedtime routine?",

        options: [
            "A consistent wind-down routine",
            "Never relaxing before bed",
            "Constantly changing your sleep schedule",
            "Staying busy until you fall asleep"
        ],

        answer: 0,

        challenge:
            "Try creating a short, relaxing wind-down routine before bed."
    },


    {
        title: "Stress & Mindset",
        icon: "🧘",

        description:
            "Explore simple ways to notice stress and build supportive wellbeing habits.",

        cards: [
            ["🧠", "Awareness",
             "Noticing how you feel can be a useful first step."],

            ["🌿", "Pause",
             "Short breaks can give you time to reset and refocus."],

            ["🤝", "Support",
             "Talking with someone you trust can be helpful when things feel difficult."]
        ],

        activityTitle: "What Would You Do?",

        question:
            "If a busy day feels overwhelming, what could help?",

        options: [
            "Ignore every feeling",
            "Take a short break and seek support if needed",
            "Make the situation more stressful",
            "Never take breaks"
        ],

        answer: 1,

        challenge:
            "Take a few minutes today to pause and check in with yourself."
    },


    {
        title: "Digital Wellness",
        icon: "📱",

        description:
            "Think about how technology fits into your daily routine and wellbeing.",

        cards: [
            ["📱", "Awareness",
             "Notice how different digital activities affect your attention and mood."],

            ["🔕", "Boundaries",
             "Small boundaries can help create space away from screens."],

            ["🌎", "Offline Life",
             "Make time for people, hobbies and activities away from devices."]
        ],

        activityTitle: "Digital Decision",

        question:
            "Which is a useful digital-wellness habit?",

        options: [
            "Using your phone constantly",
            "Creating intentional screen-free moments",
            "Never taking breaks",
            "Ignoring how technology affects you"
        ],

        answer: 1,

        challenge:
            "Choose one short screen-free period today for an offline activity."
    },


    {
        title: "Build Your Habits",
        icon: "🎯",

        description:
            "Learn how small, realistic actions can become part of a routine.",

        cards: [
            ["🎯", "Small Steps",
             "Small actions can be easier to repeat than huge changes."],

            ["🔁", "Consistency",
             "Repeating a behavior can help it become part of your routine."],

            ["🏆", "Celebrate",
             "Recognizing progress can help maintain motivation."]
        ],

        activityTitle: "Habit Builder",

        question:
            "Which goal is most realistic?",

        options: [
            "Change everything tomorrow",
            "Choose one small action and practice it",
            "Expect perfection",
            "Give up after one missed day"
        ],

        answer: 1,

        challenge:
            "Choose one small wellness habit you would like to practice this week."
    },


    {
        title: "Your Personal Plan",
        icon: "📝",

        description:
            "Bring everything together and create a simple personal wellbeing plan.",

        cards: [
            ["📝", "Reflect",
             "Think about what you have learned throughout the course."],

            ["🎯", "Choose",
             "Select one or two realistic actions that matter to you."],

            ["🚀", "Start",
             "Focus on progress rather than perfection."]
        ],

        activityTitle: "Make Your Choice",

        question:
            "What's a useful way to approach a new habit?",

        options: [
            "Expect perfection",
            "Start small and adjust as you learn",
            "Compare yourself with everyone else",
            "Give up when something doesn't work"
        ],

        answer: 1,

        challenge:
            "Write down one small wellbeing action you want to carry forward."
    },


    {
        title: "Course Reflection",
        icon: "🏆",

        description:
            "Review your journey and prepare for the final challenge.",

        cards: [
            ["💡", "Learn",
             "Knowledge becomes useful when you connect it to everyday life."],

            ["🌱", "Grow",
             "Healthy routines can develop gradually over time."],

            ["🏆", "Reflect",
             "Think about which ideas from this course were most useful."]
        ],

        activityTitle: "Final Warm-Up",

        question:
            "What's the main idea behind this course?",

        options: [
            "There is one perfect routine for everyone",
            "Small sustainable habits can support wellbeing",
            "Wellbeing requires perfection",
            "Everyone should copy the same routine"
        ],

        answer: 1,

        challenge:
            "Think of one idea from the course that you would like to remember."
    }

];


/* =========================================
   FINAL QUESTIONS
========================================= */

const finalQuestions = [

    {
        question:
            "Which approach is generally more sustainable?",

        options: [
            "Making extreme changes at once",
            "Building small realistic habits",
            "Never changing your routine",
            "Comparing yourself to others"
        ],

        answer: 1
    },


    {
        question:
            "Which can be part of everyday wellbeing?",

        options: [
            "Only exercise",
            "Nutrition, movement, sleep and mental wellbeing",
            "Only studying",
            "Avoiding all technology"
        ],

        answer: 1
    },


    {
        question:
            "What can help you build a new habit?",

        options: [
            "Making it impossible",
            "Starting with a realistic action",
            "Expecting perfection",
            "Giving up after one mistake"
        ],

        answer: 1
    },


    {
        question:
            "Which is a reasonable digital-wellness strategy?",

        options: [
            "Never using technology",
            "Creating intentional screen-free moments",
            "Using screens constantly",
            "Never taking breaks"
        ],

        answer: 1
    },


    {
        question:
            "What should you focus on when developing healthy routines?",

        options: [
            "Progress and consistency",
            "Perfection",
            "Comparison",
            "Extreme changes"
        ],

        answer: 0
    }

];


/* =========================================
   VARIABLES
========================================= */

let learnerName = "Learner";

let currentModule = 0;

let completedModules = [];

let moduleAnswered =
    new Array(modules.length).fill(false);

let xp = 0;

let finalScore = 0;


/* =========================================
   SCREEN FUNCTION
========================================= */

function showScreen(screenId) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });

    const screen =
        document.getElementById(screenId);

    if (screen) {
        screen.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   START COURSE
========================================= */

function startCourse() {

    const input =
        document.getElementById("learnerName");

    if (input.value.trim() !== "") {

        learnerName =
            input.value.trim();

    } else {

        learnerName = "Learner";

    }

    showDashboard();
}


/* =========================================
   DASHBOARD
========================================= */

function showDashboard() {

    renderModules();

    updateProgress();

    showScreen("dashboard");
}


/* =========================================
   RENDER MODULES
========================================= */

function renderModules() {

    const grid =
        document.getElementById("moduleGrid");

    grid.innerHTML = "";

    modules.forEach((module, index) => {

        const completed =
            completedModules.includes(index);

        const unlocked =
            index === 0 ||
            completedModules.includes(index - 1);

        const card =
            document.createElement("div");

        card.className =
            "module-card" +
            (unlocked ? "" : " locked");

        card.innerHTML = `

            <span class="module-status">
                ${
                    completed
                        ? "✓"
                        : unlocked
                        ? "→"
                        : "🔒"
                }
            </span>

            <div class="module-number">
                MODULE ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="module-icon">
                ${module.icon}
            </div>

            <h3>
                ${module.title}
            </h3>

            <p>
                ${module.description}
            </p>

        `;

        if (unlocked) {

            card.addEventListener(
                "click",
                () => openModule(index)
            );

        }

        grid.appendChild(card);

    });


    /* FINAL CHALLENGE */

    if (
        completedModules.length ===
        modules.length
    ) {

        const finalCard =
            document.createElement("div");

        finalCard.className =
            "module-card";

        finalCard.innerHTML = `

            <span class="module-status">
                🏆
            </span>

            <div class="module-number">
                FINAL
            </div>

            <div class="module-icon">
                🏆
            </div>

            <h3>
                Final Challenge
            </h3>

            <p>
                Test what you learned and
                unlock your certificate.
            </p>

        `;

        finalCard.addEventListener(
            "click",
            startFinalChallenge
        );

        grid.appendChild(finalCard);
    }

}


/* =========================================
   OPEN MODULE
========================================= */

function openModule(index) {

    currentModule = index;

    const module =
        modules[index];

    document.getElementById(
        "moduleStep"
    ).textContent =
        `MODULE ${String(index + 1).padStart(2, "0")}`;


    document.getElementById(
        "moduleTitle"
    ).textContent =
        `${module.icon} ${module.title}`;


    document.getElementById(
        "moduleDescription"
    ).textContent =
        module.description;


    renderKnowledgeCards(module);

    renderActivity(module);


    document.getElementById(
        "challengeText"
    ).textContent =
        module.challenge;


    document.getElementById(
        "activityResult"
    ).textContent = "";


    const completeButton =
        document.getElementById(
            "completeModuleButton"
        );


    if (
        completedModules.includes(index)
    ) {

        completeButton.textContent =
            "Module Completed ✓";

        completeButton.disabled = true;

    } else {

        completeButton.textContent =
            "Complete Module ✓";

        completeButton.disabled = false;

    }


    showScreen("module");
}


/* =========================================
   KNOWLEDGE CARDS
========================================= */

function renderKnowledgeCards(module) {

    const container =
        document.getElementById(
            "knowledgeCards"
        );

    container.innerHTML = "";

    module.cards.forEach(card => {

        const div =
            document.createElement("div");

        div.className = "card";

        div.innerHTML = `

            <div class="icon">
                ${card[0]}
            </div>

            <h3>
                ${card[1]}
            </h3>

            <p>
                ${card[2]}
            </p>

        `;

        container.appendChild(div);

    });

}


/* =========================================
   ACTIVITY
========================================= */

function renderActivity(module) {

    document.getElementById(
        "activityTitle"
    ).textContent =
        module.activityTitle;


    document.getElementById(
        "activityQuestion"
    ).textContent =
        module.question;


    const container =
        document.getElementById(
            "activityOptions"
        );

    container.innerHTML = "";


    module.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.textContent =
                `${String.fromCharCode(65 + index)}. ${option}`;


            button.addEventListener(
                "click",
                () => checkModuleAnswer(index)
            );


            container.appendChild(button);

        }
    );

}


/* =========================================
   MODULE ANSWER
========================================= */

function checkModuleAnswer(selected) {

    const module =
        modules[currentModule];

    const result =
        document.getElementById(
            "activityResult"
        );


    if (
        selected === module.answer
    ) {

        result.textContent =
            "✅ Correct! Great thinking.";

        if (
            !moduleAnswered[currentModule]
        ) {

            xp += 20;

            moduleAnswered[currentModule] =
                true;

            updateXP();
        }

    } else {

        result.textContent =
            "💡 Not quite. Try again.";

    }

}


/* =========================================
   COMPLETE MODULE
========================================= */

function completeCurrentModule() {

    if (
        !completedModules.includes(
            currentModule
        )
    ) {

        completedModules.push(
            currentModule
        );

        xp += 30;

        updateXP();

    }


    showDashboard();


    if (
        completedModules.length ===
        modules.length
    ) {

        setTimeout(() => {

            alert(
                "🎉 Amazing! All 10 modules are complete. Your Final Challenge is unlocked!"
            );

        }, 300);

    }

}


/* =========================================
   PROGRESS
========================================= */

function updateProgress() {

    const percentage =
        Math.round(
            (
                completedModules.length /
                modules.length
            ) * 100
        );


    document.getElementById(
        "progressBar"
    )