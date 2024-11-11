document.addEventListener("DOMContentLoaded", function() {
    const questionDiv = document.getElementById("question");
    const startBtn = document.getElementById("startBtn");

    // Background music setup
    const backgroundMusic = new Audio('background.mp3');
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.2; 

    // Countdown messages and main prompts
    const countdownMessages = [
        "3... Ready to discover something beautiful? 💖",
        "2... A moment just for you. 💕",
        "1... Here we go! 🎉"
    ];
    const introMessage = "Happy Birthday, my love! 🎉💖 Today is all about you. I wanted to make this day unforgettable because you mean the world to me. 💕";
    const prompts = [
        "You’re the kindest person I know, and I’m so grateful for you. 💖",
        "Remember our first adventure together? I’ll never forget that day—it was magical, just like you. ✨",
        "Every moment with you is a gift. Thank you for being my sunshine. ☀️",
        "Your smile lights up my life, and I hope today brings you all the happiness you bring to me! 🎂",
        "Here’s to more beautiful memories and more love. Happy Birthday, my angel! 💕"
    ];

    // "What I Love About You" statements
    const loveStatements = [
        "Your smile, it brightens my darkest days. 😊",
        "The way you laugh, it’s contagious and full of life. 💖",
        "Your kindness toward everyone around you amazes me. 🌹",
        "How you make me feel loved, like I’m the luckiest person alive. 💫",
        "Your courage and strength, which inspire me every day. 🌟",
        "The little things you do, like your good morning texts. 🌄",
        "Your big dreams and the way you chase them. ✨",
        "How you see the best in me, even when I can’t. 💕",
        "Just... everything about you. I love you so much. 💖"
    ];
    
    let countdownIndex = 0;
    let promptIndex = 0;
    let loveIndex = 0;

    // Start experience and play background music on button click
    startBtn.addEventListener("click", function() {
        backgroundMusic.play();
        startBtn.style.display = "none"; // Hide start button after clicking
        showCountdown();
    });

    // Countdown before intro message
    function showCountdown() {
        if (countdownIndex < countdownMessages.length) {
            questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in">${countdownMessages[countdownIndex]}</p>`;
            countdownIndex++;
            setTimeout(showCountdown, 1000); // 1-second delay between countdown numbers
        } else {
            showIntro();
        }
    }

    // Show main introduction
    function showIntro() {
        questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in">${introMessage}</p>`;
        setTimeout(showNextPrompt, 5000); // Show next prompt after 5 seconds
    }

    // Display each main prompt with mini romantic thoughts between them
    function showNextPrompt() {
        if (promptIndex < prompts.length) {
            questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in">${prompts[promptIndex]}</p>`;
            promptIndex++;
            setTimeout(showMiniThought, 4000); // Show a mini romantic thought in between
        } else {
            showThankYou();
        }
    }

    // Mini romantic thoughts to display between prompts
    const miniThoughts = [
        "Just thinking about you makes my heart smile. 💖",
        "You're my favorite place to be. 💕",
        "Thank you for being so wonderfully you. 🌹",
        "Every second with you is a dream come true. 🌟"
    ];

    // Show a mini romantic thought for 2 seconds, then return to main prompts
    function showMiniThought() {
        const randomThought = miniThoughts[Math.floor(Math.random() * miniThoughts.length)];
        questionDiv.innerHTML = `<p style="font-size: 20px; color: #4a2c54;" class="fade-in">${randomThought}</p>`;
        setTimeout(showNextPrompt, 2000); // Return to main prompt sequence
    }

    function showThankYou() {
        questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in">Thank you for being you, my love! 🌹💖</p>`;
        setTimeout(showUnlockButton, 5000); // Show unlock button after thank you message
    }

    // Unlock button for "What I Love About You" section
    function showUnlockButton() {
        questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in">Tap below to unlock something special... 💌</p>`;
        const unlockBtn = document.createElement("button");
        unlockBtn.textContent = "Unlock the Message";
        unlockBtn.classList.add("button");
        unlockBtn.onclick = function() {
            unlockBtn.style.display = "none"; // Hide unlock button after clicking
            showLoveStatement();
        };
        questionDiv.appendChild(unlockBtn);
    }

    function showLoveStatement() {
        if (loveIndex < loveStatements.length) {
            questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in">${loveStatements[loveIndex]}</p>`;
            loveIndex++;
            setTimeout(showLoveStatement, 4000); // Display each love statement for 4 seconds
        } else {
            showExitMessage();
        }
    }

    function showExitMessage() {
        questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in sparkle">And that’s it, my love. 💖<br><br>
        Thank you for being you. Click "I love you" to close this. 😘🌹</p>`;
        const exitBtn = document.createElement("button");
        exitBtn.textContent = "I love you";
        exitBtn.classList.add("button");
        exitBtn.onclick = function() {
            questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in sparkle">I love you too!!! 😘💞</p>`;
            exitBtn.style.display = "none";
        };
        questionDiv.appendChild(exitBtn); // Append the exit button to questionDiv
    }
});
