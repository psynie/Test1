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
        "3... Ready to see something beautiful? 💖",
        "2... A moment just for you. 💕",
        "1... Here we go! 🎉"
    ];
    const introMessage = "Happy Birthday, my love! 🎉💖 Today is all about you. I wanted to make this day unforgettable because you mean soo much to me. 💕";
    const prompts = [
        "You’re soooo kind and sweet, and I’m so grateful for you. 💖",
        "Remember our first adventure together? I’ll never forget that day—it was magical, just like you. ✨",
        "Every moment with you is a gift. Thank you for always making me feel loved ☀️",
        "Your smile lights up my day regardless of your presence or not and I hope today brings you all the happiness you bring to me! 🎂",
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
        console.log("Button clicked"); // Debugging check
        backgroundMusic.play();
        startBtn.style.display = "none"; // Hide start button after clicking
        showCountdown();
    });

    function showCountdown() {
        if (countdownIndex < countdownMessages.length) {
            questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in">${countdownMessages[countdownIndex]}</p>`;
            countdownIndex++;
            setTimeout(showCountdown, 1500); // 1.5-second delay between countdown numbers
        } else {
            showIntro();
        }
    }

    function showIntro() {
        questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in">${introMessage}</p>`;
        setTimeout(showNextPrompt, 5000); // Show next prompt after 5 seconds
    }

    function showNextPrompt() {
        if (promptIndex < prompts.length) {
            questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in">${prompts[promptIndex]}</p>`;
            promptIndex++;
            setTimeout(showNextPrompt, 4000); // Show each prompt for 4 seconds
        } else {
            showPoemPrompt();
        }
    }

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

    function showPoemExplanationPart1() {
        const explanationPart1 = `
            In this, I’ve compared you to the moon, my love.<br>
            Just as the moon brings calm and wonder to the night,<br>
            you bring peace and light to my life.<br><br>
            "Softly glowing, a tranquil tune" reflects your gentle, calming nature,<br>
            bringing peace to everyone around you.<br>
        `;
        questionDiv.innerHTML = `<p style="font-size: 20px; color: #4a2c54;" class="fade-in">${explanationPart1}</p>`;
        setTimeout(showPoemExplanationPart2, 10000);
    }

    function showPoemExplanationPart2() {
        const explanationPart2 = `
            "Your light calms the restless seas"—this line represents<br>
            how your presence soothes my soul in the deepest way.<br>
            Just like the moon controls the tides, you guide my life with gentle strength.<br><br>
            And finally, "I thank the heavens for my moon"<br>
            because I’m grateful every day for having you.<br>
        `;
        questionDiv.innerHTML = `<p style="font-size: 20px; color: #4a2c54;" class="fade-in">${explanationPart2}</p>`;
        setTimeout(showGratitudeMessage, 10000);
    }

    function showGratitudeMessage() {
        questionDiv.innerHTML = `<p style="font-size: 24px; color: #4a2c54;" class="fade-in">Thank you for being my moon and my everything. 🌙💕</p>`;
    }
});

