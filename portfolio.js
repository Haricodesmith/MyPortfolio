
        // Reveal Animation
        function reveal() {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        }

        // Skill Bar Animation
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        }

        // Mobile Menu
        const menuBtn = document.querySelector('.menu-btn');
        const menuOverlay = document.querySelector('.menu-overlay');
        const menuLinks = document.querySelectorAll('.menu-overlay a');

        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            menuOverlay.classList.toggle('invisible');
            menuOverlay.classList.toggle('opacity-0');
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('open');
                menuOverlay.classList.add('invisible', 'opacity-0');
            });
        });

        window.addEventListener('scroll', reveal);
        window.addEventListener('load', () => {
            reveal();
            setTimeout(animateSkillBars, 500);
        });

        