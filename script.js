    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // Theme Switch
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme);

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('fa-bars');
        menuBtn.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
            nav.classList.remove('active');
            menuBtn.querySelector('i').classList.add('fa-bars');
            menuBtn.querySelector('i').classList.remove('fa-times');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking
                nav.classList.remove('active');
                menuBtn.querySelector('i').classList.add('fa-bars');
                menuBtn.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Progress bar animation on scroll
    const progressBars = document.querySelectorAll('.progress');

    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;

            if (barPosition < screenPosition) {
                bar.style.width = bar.getAttribute('style').split(':')[1];
            }
        });
    };

    window.addEventListener('scroll', animateProgressBars);

    // Typing animation for the introduction text
    const text = "I'm an aspiring web developer";
    const typingText = document.querySelector('.home-content h2 span');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing animation when the page loads
    window.addEventListener('load', typeWriter); 
