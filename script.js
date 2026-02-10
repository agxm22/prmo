// ========================================
// Falling Hearts Animation
// ========================================
function createFallingHeart() {
    const particlesContainer = document.getElementById('particlesContainer');
    const heart = document.createElement('div');
    heart.classList.add('falling-particle');
    
    const hearts = ['💖', '💕', '💗', '💝', '💓', '❤️'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    
    heart.style.left = Math.random() * 100 + '%';
    const duration = Math.random() * 8 + 10;
    heart.style.animationDuration = duration + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    const size = Math.random() * 12 + 18;
    heart.style.fontSize = size + 'px';
    
    particlesContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, (duration + 2) * 1000);
}

function initializeFallingHearts() {
    const initialHearts = 12;
    for (let i = 0; i < initialHearts; i++) {
        setTimeout(() => {
            createFallingHeart();
        }, i * 400);
    }
}

function continuousFallingHearts() {
    setInterval(() => {
        createFallingHeart();
    }, 2500);
}

// ========================================
// Make Promise Button
// ========================================
function setupPromiseButton() {
    const promiseButton = document.getElementById('promiseButton');
    const promiseMessage = document.getElementById('promiseMessage');
    const heartShape = document.getElementById('heartShape');
    
    let hasPromised = false;
    
    promiseButton.addEventListener('click', function() {
        if (hasPromised) return;
        
        hasPromised = true;
        
        // Heart grows
        heartShape.classList.add('growing');
        
        // Button disappears
        setTimeout(() => {
            promiseButton.classList.add('promised');
        }, 400);
        
        // Show promise message
        setTimeout(() => {
            promiseMessage.classList.add('show');
        }, 800);
        
        // Create promise explosion
        setTimeout(() => {
            createPromiseExplosion();
        }, 600);
        
        // Remove growing class
        setTimeout(() => {
            heartShape.classList.remove('growing');
        }, 800);
    });
}

// ========================================
// Promise Explosion Effect
// ========================================
function createPromiseExplosion() {
    const symbols = ['💖', '💕', '💗', '💝', '💓', '✨', '💫', '⭐'];
    const heartContainer = document.getElementById('heartContainer');
    const rect = heartContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Create 40 hearts exploding outward
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const symbol = document.createElement('div');
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            symbol.style.position = 'fixed';
            symbol.style.left = centerX + 'px';
            symbol.style.top = centerY + 'px';
            symbol.style.fontSize = (Math.random() * 25 + 20) + 'px';
            symbol.style.pointerEvents = 'none';
            symbol.style.zIndex = '9999';
            
            document.body.appendChild(symbol);
            
            const angle = (i / 40) * Math.PI * 2;
            const distance = Math.random() * 200 + 100;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;
            
            symbol.animate([
                {
                    transform: 'translate(-50%, -50%) scale(0) rotate(0deg)',
                    opacity: 1
                },
                {
                    transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(1.8) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ], {
                duration: 1800 + Math.random() * 600,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => symbol.remove(), 2400);
        }, i * 15);
    }
}

// ========================================
// Confetti Hearts Rain
// ========================================
function createConfettiHearts() {
    const colors = ['#e63946', '#ff758f', '#ffb3c1', '#ff6b7a'];
    
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = '💖';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = '-30px';
            heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.opacity = '0.9';
            
            document.body.appendChild(heart);
            
            const duration = Math.random() * 3000 + 2500;
            const sway = (Math.random() - 0.5) * 150;
            
            heart.animate([
                {
                    transform: 'translateY(0) translateX(0) rotate(0deg)',
                    opacity: 0.9
                },
                {
                    transform: `translateY(${window.innerHeight + 50}px) translateX(${sway}px) rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                }
            ], {
                duration: duration,
                easing: 'linear'
            });
            
            setTimeout(() => heart.remove(), duration);
        }, i * 25);
    }
}

// ========================================
// Initialize Everything
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize falling hearts
    initializeFallingHearts();
    continuousFallingHearts();
    
    // Setup promise button
    setupPromiseButton();
    
    // Trigger confetti after explosion
    const promiseButton = document.getElementById('promiseButton');
    promiseButton.addEventListener('click', function() {
        setTimeout(() => {
            createConfettiHearts();
        }, 1000);
    });
    
    console.log('💖 Made with promises and endless love! 💕');
});

// ========================================
// Random Sparkles on Scroll
// ========================================
let sparkleTimeout;
function createScrollSparkles() {
    clearTimeout(sparkleTimeout);
    
    sparkleTimeout = setTimeout(() => {
        const sparkle = document.createElement('div');
        const sparkles = ['✨', '💫', '⭐', '💖'];
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = '0px';
        sparkle.style.fontSize = (Math.random() * 12 + 16) + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1';
        sparkle.style.opacity = '0.6';
        
        document.body.appendChild(sparkle);
        
        const duration = Math.random() * 2000 + 2000;
        sparkle.animate([
            {
                transform: 'translateY(0) rotate(0deg)',
                opacity: 0.6
            },
            {
                transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'linear'
        });
        
        setTimeout(() => sparkle.remove(), duration);
    }, 50);
}

// Add scroll sparkles
window.addEventListener('scroll', createScrollSparkles);
