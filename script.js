/* =========================================
   FUEL YOUR FUTURE
   Interactive Gen Z Wellness Course
========================================= */


/* =========================================
   COURSE DATA
========================================= */

const modules = [

    {
        title: "Know Your Body",
        icon: "🧠",
        description:
            "Explore the basics of how everyday choices can support your body's needs.",
        cards: [
            ["⚡", "Energy", "Your body uses energy for movement, learning and everyday activities."],
            ["🥗", "Nutrients", "Different nutrients have different roles in keeping your body functioning."],
            ["💧", "Hydration", "Water is an important part of keeping your body functioning normally."]
        ],
        activityTitle: "Quick Check",
        question: "Which is an important part of a balanced lifestyle?",
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
            "Learn how different foods can contribute to a varied and balanced eating pattern.",
        cards: [
            ["🍎", "Variety", "Eating a variety of foods can help provide different nutrients."],
            ["🌾", "Whole Foods", "Foods such as grains, fruits and vegetables can be part of varied meals."],
            ["🥛", "Balance", "A balanced approach is more useful than labeling individual foods as simply good or bad."]
        ],
        activityTitle: "Build the Better Plate",
        question: "Which approach is most balanced?",
        options: [
            "Eating only one food group",
            "Choosing a variety of foods across food groups",
            "Skipping breakfast and lunch",
            "Avoiding foods you enjoy completely"
        ],
        answer: 1,
        challenge:
            "Next time you eat, notice the variety of foods on your plate without judging them."
    },

    {
        title: "Hydration",
        icon: "💧",
        description:
            "Explore why staying hydrated matters and simple ways to make drinking water easier.",
        cards: [
            ["💧", "Water", "Water helps your body perform many normal functions."],
            ["🎒", "Keep It Nearby", "Having water accessible can make it easier to remember to drink."],
            ["☀️", "Daily Routine", "Your fluid needs can vary depending on your activities and environment."]
        ],
        activityTitle: "Hydration Check",
        question: "Which habit can make hydration easier?",
        options: [
            "Never drinking water",
            "Keeping water nearby",
            "Only drinking water once a day",
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
            "Discover ways movement can become a positive part of everyday life.",
        cards: [
            ["🚶", "Move", "Walking, playing and everyday movement can all contribute to an active lifestyle."],
            ["🎵", "Enjoyment", "Choosing activities you enjoy can make movement easier to maintain."],
            ["🧘", "Balance", "Rest and recovery are also important parts of a healthy routine."]
        ],
        activityTitle: "Movement Mindset",
        question: "Which is a good approach to everyday movement?",
        options: [
            "Movement has to be extreme to matter",
            "Choose enjoyable ways to move regularly",
            "Never take rest days",
            "Exercise only when you feel guilty"
        ],
        answer: 1,
        challenge:
            "Choose one enjoyable way to move today, such as walking, dancing or playing a sport."
    },

    {
        title: "Sleep & Recovery",
        icon: "😴",
        description:
            "Learn why sleep and recovery deserve a place in your wellbeing routine.",
        cards: [
            ["🌙", "Sleep", "Sleep supports many aspects of physical and mental wellbeing."],
            ["📵", "Wind Down", "A calming bedtime routine can help you prepare for sleep."],
            ["🔄", "Consistency", "A regular routine can make it easier to build healthy sleep habits."]
        ],
        activityTitle: "Sleep Habit",
        question: "Which can support a relaxing bedtime routine?",
        options: [
            "Keeping a consistent wind-down routine",
            "Staying active right until bedtime every night",
            "Never taking time to relax",
            "Changing your sleep schedule constantly"
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
            ["🧠", "Awareness", "Noticing how you feel can be a useful first step."],
            ["🌿", "Pause", "Short breaks can give you time to reset and refocus."],
            ["🤝", "Support", "Talking to someone you trust can be helpful when things feel difficult."]
        ],
        activityTitle: "What Would You Do?",
        question: "If you feel overwhelmed by a busy day, which could be a helpful step?",
        options: [
            "Ignore every feeling",
            "Take a short break and talk to someone you trust if needed",
            "Make the situation more stressful",
            "Stop doing everything forever"
        ],
        answer: 1,
        challenge:
            "Take a few minutes today to pause, breathe and check in with yourself."
    },

    {
        title: "Digital Wellness",
        icon: "📱",
        description:
            "Think about how technology fits into your daily routine and wellbeing.",
        cards: [
            ["📱", "Awareness", "Notice how different digital activities affect your attention and mood."],
            ["🔕", "Boundaries", "Small boundaries can help create space away from screens."],
            ["🌎", "Offline Life", "Make time for people, hobbies and activities away from devices."]
        ],
        activityTitle: "Digital Decision",
        question: "Which is a useful digital-wellness habit?",
        options: [
            "Using your phone every minute",
            "Creating intentional screen-free moments",
            "Never taking breaks",
            "Ignoring how technology affects your routine"
        ],
        answer: 1,
        challenge:
            "Choose one short screen-free period today and use it for an offline activity."
    },

    {
        title: "Build Your Habits",
        icon: "🎯",
        description:
            "Learn how small, realistic actions can become part of a routine.",
        cards: [
            ["🎯", "Small Steps", "Small actions can be easier to repeat than huge changes."],
            ["🔁", "Consistency", "Repeating a behavior can help it become part of your routine."],
            ["🏆", "Celebrate", "Recognizing progress can help keep you motivated."]
        ],
        activityTitle: "Habit Builder",
        question: "Which goal is most realistic?",
        options: [
            "Change everything tomorrow",
            "Choose one small action and practice it consistently",
            "Never adjust your plan",
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
            ["📝", "Reflect", "Think about what you have learned throughout the course."],
            ["🎯", "Choose", "Select one or two realistic actions that matter to you."],
            ["🚀", "Start", "Focus on progress rather than perfection."]
        ],
        activityTitle: "Make Your Choice",
        question: "What's a useful way to approach a new habit?",
        options: [
            "Expect perfection immediately",
            "Start small and adjust as you learn",
            "Compare yourself with everyone else",
            "Give up whenever something doesn't work"
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
            ["💡", "Learn", "Knowledge is useful when you can connect it to everyday life."],
            ["🌱", "Grow", "Healthy routines can develop gradually over time."],
            ["🏆", "Reflect", "Think about which ideas from this course were most useful to you."]
        ],
        activityTitle: "Final Warm-Up",
        question: "What's the main idea behind this course?",
        options: [
            "There is one perfect routine for everyone",
            "Small, sustainable habits can support wellbeing",
            "Wellbeing requires perfection",
            "You should copy someone else's routine"
        ],
        answer: 1,
        challenge:
            "Think of one idea from the course that you would like to remember."
    }

];


/* =========================================
   FINAL QUIZ
========================================= */

const finalQuestions = [

    {
        question: "Which approach is generally more sustainable?",
        options: [
            "Making many extreme changes at once",
            "Building small, realistic habits",
            "Never changing your routine",
            "Comparing yourself to others"
        ],
        answer: 1
    },

    {
        question: "Which can be part of everyday wellbeing?",
        options: [
            "Only exercise",
            "Nutrition, movement, sleep, relationships and mental wellbeing",
            "Only studying",
            "Avoiding all technology"
        ],
        answer: 1
    },

    {
        question: "What can help you build a new habit?",
        options: [
            "Making it impossible to achieve",
            "Starting with a realistic action",
            "Expecting perfection",
            "Giving up after one mistake"
        ],
        answer: 1
    },

    {
        question: "Which is a reasonable digital-wellness strategy?",
        options: [
            "Never using technology again",
            "Creating intentional screen-free moments",
            "Using screens constantly",
            "Ignoring how screen use affects your routine"
        ],
        answer: 1
    },

    {
        question: "What should you focus on when developing healthy routines?",
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
   STATE
========================================= */

let currentModule = 0;

let completedModules = [];

let xp = 0;

let finalScore = 0;

let learnerName = "Learner";


/* =========================================
   START COURSE
========================================= */

function startCourse() {

    const input = document.getElementById("learnerName");

    if (input.value.trim() !== "") {
        learnerName = input.value.trim();
    }

    showDashboard();
}


/* =========================================
   SHOW SCREEN
========================================= */

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   DASHBOARD
========================================= */

function showDashboard() {

    showScreen("dashboard");

    renderModules();

    updateProgress();
}


/* =========================================
   MODULE CARDS
========================================= */

function renderModules() {

    const grid = document.getElementById("moduleGrid");

    grid.innerHTML = "";

    modules.forEach((module, index) => {

        const completed =
            completedModules.includes(index);

        const unlocked =
            index === 0 ||
            completedModules.includes(index - 1);

        const card = document.createElement("div");

        card.className =
            "module-card" +
            (!unlocked ? " locked" : "");

        card.innerHTML = `

            <span class="module-status">
                ${completed ? "✓" : unlocked ? "→" : "🔒"}
            </span>

            <div class="module-number">
                MODULE ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="module-icon">
                ${module.icon}
            </div>

            <h3>${module.title}</h3>

            <p>${module.description}</p>

        `;

        if (unlocked) {
            card.onclick = () => openModule(index);
        }

        grid.appendChild(card);
    });

    /* Add final challenge once modules are complete */

    if (completedModules.length === modules.length) {

        const finalCard = document.createElement("div");

        finalCard.className = "module-card";

        finalCard.innerHTML = `

            <span class="module-status">🏆</span>

            <div class="module-number">
                FINAL
            </div>

            <div class="module-icon">
                🏆
            </div>

            <h3>Final Challenge</h3>

            <p>
                Test what you learned and unlock your certificate.
            </p>

        `;

        finalCard.onclick = startFinalChallenge;

        grid.appendChild(finalCard);
    }
}


/* =========================================
   OPEN MODULE
========================================= */

function openModule(index) {

    currentModule = index;

    const module = modules[index];

    document.getElementById("moduleStep").textContent =
        `MODULE ${String(index + 1).padStart(2, "0")}`;

    document.getElementById("moduleTitle").textContent =
        `${module.icon} ${module.title}`;

    document.getElementById("moduleDescription").textContent =
        module.description;

    renderKnowledgeCards(module);

    document.getElementById("activityTitle").textContent =
        module.activityTitle;

    document.getElementById("activityQuestion").textContent =
        module.question;

    document.getElementById("activityResult").textContent = "";

    renderActivity(module);

    document.getElementById("challengeText").textContent =
        module.challenge;

    const button =
        document.getElementById("challengeButton");

    if (completedModules.includes(index)) {

        button.textContent = "Module Completed ✓";

        button.disabled = true;

    } else {

        button.textContent = "Complete Module ✓";

        button.disabled = false;
    }

    showScreen("module");

    updateProgress();
}


/* =========================================
   KNOWLEDGE CARDS
========================================= */

function renderKnowledgeCards(module) {

    const container =
        document.getElementById("knowledgeCards");

    container.innerHTML = "";

    module.cards.forEach(card => {

        const div = document.createElement("div");

        div.className = "card";

        div.innerHTML = `

            <div class="icon">${card[0]}</div>

            <h3>${card[1]}</h3>

            <p>${card[2]}</p>

        `;

        container.appendChild(div);
    });
}


/* =========================================
   MODULE ACTIVITY
========================================= */

function renderActivity(module) {

    const container =
        document.getElementById("activityOptions");

    container.innerHTML = "";

    module.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        button.onclick = () =>
            checkModuleAnswer(index);

        container.appendChild(button);
    });
}


/* =========================================
   CHECK MODULE ANSWER
========================================= */

function checkModuleAnswer(selected) {

    const module = modules[currentModule];

    const result =
        document.getElementById("activityResult");

    if (selected === module.answer) {

        result.textContent =
            "✅ Correct! Great thinking.";

        result.style.color = "#17201a";

        if (!moduleAnswered[currentModule]) {

            xp += 20;

            moduleAnswered[currentModule] = true;

            updateXP();
        }

    } else {

        result.textContent =
            "💡 Not quite. Give it another try.";

        result.style.color = "#6a6f69";
    }
}


/* =========================================
   TRACK ANSWERS
========================================= */

let moduleAnswered =
    new Array(modules.length).fill(false);


/* =========================================
   COMPLETE MODULE
========================================= */

function completeModule() {

    if (!completedModules.includes(currentModule)) {

        completedModules.push(currentModule);

        xp += 30;

        updateXP();
    }

    if (completedModules.length === modules.length) {

        showDashboard();

        setTimeout(() => {

            alert(
                "🎉 All 10 modules completed! The Final Challenge is now unlocked."
            );

        }, 300);

    } else {

        showDashboard();
    }
}


/* =========================================
   PROGRESS
========================================= */

function updateProgress() {

    const percentage =
        Math.round(
            (completedModules.length / modules.length) * 100
        );

    document.getElementById("progressBar").style.width =
        percentage + "%";

    document.getElementById("progressText").textContent =
        percentage + "%";
}


/* =========================================
   XP
========================================= */

function updateXP() {

    document.getElementById("xpDisplay").textContent =
        xp + " XP";

    document.getElementById("finalXP").textContent =
        xp;
}


/* =========================================
   FINAL CHALLENGE
========================================= */

function startFinalChallenge() {

    const container =
        document.getElementById("finalQuiz");

    container.innerHTML = "";

    finalQuestions.forEach((question, qIndex) => {

        const div =
            document.createElement("div");

        div.className = "final-question";

        let optionsHTML = "";

        question.options.forEach((option, optionIndex) => {

            optionsHTML += `

                <label>

                    <input
                        type="radio"
                        name="question${qIndex}"
                        value="${optionIndex}"
                    >

                    ${option}

                </label>

            `;
        });

        div.innerHTML = `

            <h3>
                ${qIndex + 1}. ${question.question}