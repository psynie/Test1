document.addEventListener("DOMContentLoaded", function() {
    const questionDiv = document.getElementById("question");
    const startBtn = document.getElementById("startBtn");
    const hearts = document.querySelectorAll(".heart");
    const body = document.body;

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

    const poemLines = [
        "My love, you are my gentle moon,",
        "Softly glowing, a tranquil tune.",
        "In the quiet of night, you rise,",
        "A silver wonder, lighting skies.",
        "Your light calms the restless seas,",
        "With you, I find my sweetest peace.",
        "As stars fade and shadows swoon,",
        "I thank the heavens for my moon."
    ];

    let countdownIndex = 0;
    let promptIndex = 0;
    let poemLineIndex = 0;

    // Start experience and play background music on button click
    startBtn.addEventListener("click", function() {
        backgroundMusic.play();
        startBtn.style.display = "none"; // Hide start button after clicking
        showCountdown();
    });

    // Event listeners to pause/resume animations on touch/click hold
    document.addEventListener("touchstart", pauseHearts);
    document.addEventListener("touchend", resumeHearts);
    document.addEventListener("mousedown", pauseHearts);
    document.addEventListener("mouseup", resumeHearts);

    function pauseHearts() {
        hearts.forEach(heart => heart.classList.add("paused"));
    }

    function resumeHearts() {
        hearts.forEach(heart => heart.classList.remove("paused"));
    }

    // Slower countdown with a 1.5-second delay between each number
    function showCountdown() {
        if (countdownIndex < countdownMessages.length) {
            questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in">${countdownMessages[countdownIndex]}</p>`;
            countdownIndex++;
            setTimeout(showCountdown, 1500); // 1.5-second delay between countdown numbers
        } else {
            showIntro();
        }
    }

    // Show main introduction
    function showIntro() {
        questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in">${introMessage}</p>`;
        setTimeout(showNextPrompt, 5000); // Show next prompt after 5 seconds
    }

    // Display each main prompt
    function showNextPrompt() {
        if (promptIndex < prompts.length) {
            questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in">${prompts[promptIndex]}</p>`;
            promptIndex++;
            setTimeout(showNextPrompt, 4000); // Show each prompt for 4 seconds
        } else {
            showPoemPrompt();
        }
    }

    // Prompt before the poem section
    function showPoemPrompt() {
        questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in">I have something for you, wanna see? 💌</p>`;
        const yesBtn1 = document.createElement("button");
        const yesBtn2 = document.createElement("button");

        yesBtn1.textContent = "yes??";
        yesBtn2.textContent = "yes!!";
        yesBtn1.classList.add("button");
        yesBtn2.classList.add("button");

        yesBtn1.onclick = showPoemLineByLine;
        yesBtn2.onclick = showPoemLineByLine;

        questionDiv.appendChild(yesBtn1);
        questionDiv.appendChild(yesBtn2);
    }

    // Interactive reveal of poem lines with a background color fade
    function showPoemLineByLine() {
        body.classList.add("poem-background"); // Add background transition during poem
        showNextPoemLine();
    }

    function showNextPoemLine() {
        if (poemLineIndex < poemLines.length) {
            questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in">${poemLines[poemLineIndex]}</p>`;
            const nextLineBtn = document.createElement("button");
            nextLineBtn.textContent = "Awww";
            nextLineBtn.classList.add("button");
            nextLineBtn.onclick = function() {
                poemLineIndex++;
                showNextPoemLine();
            };
            questionDiv.appendChild(nextLineBtn);
        } else {
            body.classList.remove("poem-background"); // Remove background transition after poem
            showPoemExplanationPart1();
        }
    }

    // Explanation of the poem - Part 1
    function showPoemExplanationPart1() {
        const explanationPart1 = `
            In this poem, I’ve compared you to the moon, my love.<br>
            Just as the moon brings calm and wonder to the night,<br>
            you bring peace and light to my life.<br><br>
            "Softly glowing, a tranquil tune" reflects your gentle, calming nature,<br>
            bringing peace to everyone around you.<br>
        `;
        questionDiv.innerHTML = `<p style="font-size: 20px; color: #4a2c54;" class="fade-in">${explanationPart1}</p>`;
        setTimeout(showPoemExplanationPart2, 10000); // Show next part of explanation after 10 seconds
    }

    // Explanation of the poem - Part 2
    function showPoemExplanationPart2() {
        const explanationPart2 = `
            "Your light calms the restless seas"—this line represents<br>
            how your presence soothes my soul in the deepest way.<br>
            Just like the moon controls the tides, you guide my life with gentle strength.<br><br>
            And finally, "I thank the heavens for my moon":<br>
            I’m endlessly grateful to have you. You are my moon, my peace, and my light.<br>
        `;
        questionDiv.innerHTML = `<p style="font-size: 20px; color: #4a2c54;" class="fade-in">${explanationPart2}</p>`;
        setTimeout(showFinalMessage, 12000); // Show final message after 12 seconds
    }

    // New heartfelt message before the final section
    function showFinalMessage() {
        questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in sparkle">And that’s it, my love. 💖<br><br>
        Thank you for being you. Click "I love you" to close this. 😘🌹</p>`;
        
        const exitBtn = document.createElement("button");
        exitBtn.textContent = "I love you";
        exitBtn.classList.add("button");

        const animatedHeart = document.createElement("div");
        animatedHeart.classList.add("animated-heart");

        exitBtn.onclick = function() {
            questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in sparkle">I love you too!!! 😘💞</p>`;
            exitBtn.style.display = "none";
            questionDiv.appendChild(animatedHeart);
            // End experience immediately after the "I love you too" response
            backgroundMusic.pause(); // Pause background music
            setTimeout(function() {
                // Hide the entire question div to finish the experience
                questionDiv.style.display = "none";
            }, 2000); // Hide after 2 seconds
        };

        questionDiv.appendChild(exitBtn);
        questionDiv.appendChild(animatedHeart);
    }
});

