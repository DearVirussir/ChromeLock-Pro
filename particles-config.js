document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor movement
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        themeToggle.innerHTML = isLight ? '<span>☀️</span> Light Mode' : '<span>🌙</span> Dark Mode';
    });

    // Initialize particles.js with enhanced configuration
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 120,  // Increased from typical 80
                    "density": {
                        "enable": true,
                        "value_area": 800  // More dense than default
                    }
                },
                "color": {
                    "value": "#ff4a4a"  // Matches your primary color
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,  // Larger than default (3)
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,  // Increased connection distance
                    "color": "#ff4a4a",
                    "opacity": 0.3,
                    "width": 1.5  // Thicker lines
                },
                "move": {
                    "enable": true,
                    "speed": 3,  // Faster movement
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"  // More interactive
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"  // Push particles on click
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 180,  // Increased grab distance
                        "line_linked": {
                            "opacity": 0.8  // More visible on hover
                        }
                    },
                    "push": {
                        "particles_nb": 8  // More particles pushed
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Password functionality (keep your existing code here)
    const saveBtn = document.getElementById('save');
    const oldPassword = document.getElementById('old');
    const status = document.getElementById('status');
    const note = document.getElementById('note');
    
    // ... rest of your password handling code ...
});