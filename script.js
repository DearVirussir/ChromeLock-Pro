// Initialize Particles.js with ultra settings
function initParticles() {
    particlesJS("particles-js", {
        particles: {
            number: { 
                value: 300,  // Ultra high particle count
                density: { 
                    enable: true, 
                    value_area: 700  // More dense
                } 
            },
            color: { value: "#ff4a4a" },
            shape: { 
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 }
            },
            opacity: { 
                value: 0.7, 
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: { 
                value: 3, 
                random: true,
                anim: {
                    enable: true,
                    speed: 3,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: { 
                enable: true, 
                distance: 80,  // Closer connections
                color: "#ff4a4a", 
                opacity: 0.4, 
                width: 1 
            },
            move: { 
                enable: true, 
                speed: 4,  // Faster movement
                direction: "none", 
                random: true, 
                straight: false,
                out_mode: "bounce",
                bounce: true,
                attract: { enable: true, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { 
                    enable: true, 
                    mode: "repulse",
                    parallax: { enable: true, force: 60, smooth: 10 }
                },
                onclick: { 
                    enable: true, 
                    mode: "push",
                    push: { particles_nb: 6 }  // More particles on click
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                    speed: 1
                },
                push: {
                    particles_nb: 6
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    
    // Custom cursor
    document.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.cursor');
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Interactive elements enlarge cursor
        const interactiveElements = document.querySelectorAll('button, input, a');
        const isHovering = Array.from(interactiveElements).some(el => el.matches(':hover'));
        
        cursor.style.transform = `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`;
        cursor.style.borderColor = isHovering ? 'var(--primary-light)' : 'var(--primary)';
    });

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    let darkMode = true;
    
    themeToggle.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.classList.toggle('light-theme', !darkMode);
        themeToggle.innerHTML = darkMode ? 
            '<span>🌙</span> Dark Mode' : '<span>☀️</span> Light Mode';
        
        // Reinitialize particles with new color
        particlesJS("particles-js", {
            particles: {
                number: { value: 300, density: { enable: true, value_area: 700 } },
                color: { value: darkMode ? "#ff4a4a" : "#00aa00" },
                shape: { type: "circle" },
                opacity: { value: 0.7, random: true },
                size: { value: 3, random: true },
                line_linked: { 
                    enable: true, 
                    distance: 80, 
                    color: darkMode ? "#ff4a4a" : "#00aa00", 
                    opacity: 0.4, 
                    width: 1 
                },
                move: { 
                    enable: true, 
                    speed: 4, 
                    direction: "none", 
                    random: true, 
                    straight: false,
                    out_mode: "bounce"
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    });

    // Input focus effect
    const passwordInput = document.getElementById('old');
    passwordInput.addEventListener('focus', () => {
        passwordInput.style.transform = 'scale(1.02)';
        passwordInput.style.boxShadow = '0 0 30px rgba(255, 74, 74, 0.5)';
    });
    
    passwordInput.addEventListener('blur', () => {
        passwordInput.style.transform = 'scale(1)';
        passwordInput.style.boxShadow = '0 0 15px rgba(255, 74, 74, 0.2)';
    });

    // Button click effect
    const saveButton = document.getElementById('save');
    saveButton.addEventListener('mousedown', () => {
        saveButton.style.transform = 'translateY(1px) scale(0.98)';
    });
    
    saveButton.addEventListener('mouseup', () => {
        saveButton.style.transform = 'translateY(-3px) scale(1)';
    });
    
    saveButton.addEventListener('mouseleave', () => {
        saveButton.style.transform = 'translateY(0) scale(1)';
    });
});