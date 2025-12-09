// --- CUSTOMIZE HERE ---
const compliments = [
    "my gorgeous baby! ",
    "Smartest person I know ",
    "My favorite human",
    "You light up the room ",
    "my goat",
    "Kindest soul oat",
    "Funny bebi",
    "Proud of you! ",
    "my queen ",
    "Beautiful inside & out "
];

const emojis = ["❤️", "💖", "🔥", "✨", "🌸", "🦋", "😻"];
// ----------------------

function makeItRain() {
    // Create 30 items every time the button is clicked
    let count = 0;
    const interval = setInterval(() => {
        createFallingElement();
        count++;
        if (count > 30) clearInterval(interval);
    }, 100); // New item every 100ms
}

function createFallingElement() {
    const el = document.createElement('div');
    el.classList.add('falling-item');

    // Randomly pick between text or just an emoji
    const isText = Math.random() > 0.5;
    
    if (isText) {
        el.innerText = compliments[Math.floor(Math.random() * compliments.length)];
        // Random font size for text
        el.style.fontSize = (Math.random() * 1 + 1) + 'rem'; 
        el.style.color = '#fff';
        el.style.textShadow = '1px 1px 3px rgba(0,0,0,0.3)';
    } else {
        el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        // Random font size for emojis (usually larger)
        el.style.fontSize = (Math.random() * 2 + 2) + 'rem'; 
    }

    // Random horizontal position (0 to 100% of screen width)
    el.style.left = Math.random() * 100 + 'vw';
    
    // Random fall speed (between 2 and 5 seconds)
    const duration = Math.random() * 3 + 2;
    el.style.animationDuration = duration + 's';

    document.body.appendChild(el);

    // Remove the element after it finishes falling to keep browser fast
    setTimeout(() => {
        el.remove();
    }, duration * 1000);
}