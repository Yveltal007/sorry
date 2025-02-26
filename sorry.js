function goToQuestions() {
    alert('I hope you forgive me 😢');
    window.location.href = './questions.html';
}

function forgiven() {
    window.location.href = './forgiven.html';
}

function stillAngry() {
    window.location.href = './not_forgiven.html';
}


function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = Math.random() > 0.5 ? "💖" : "🤍"; // Randomly pick pink or white heart
    document.body.appendChild(heart);

    // Random position
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh"; // Start from bottom
    heart.style.fontSize = Math.random() * 20 + 20 + "px"; // Vary sizes
    heart.style.opacity = Math.random() * 0.8 + 1 ; // Vary opacity
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Different speeds

    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove after animation
}

// Generate hearts every 500ms
setInterval(createHeart, 100);
