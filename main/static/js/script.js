document.addEventListener('DOMContentLoaded', function () {
    // 1. Init Animations
    AOS.init({ duration: 800, easing: 'ease-out', once: true });

    // 2. Init Materialize Components (Sidenav, Select, etc)
    M.AutoInit(); 

    // 3. Theme Logic
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('site-theme') || 'dark';
    
    // Apply saved theme
    html.setAttribute('data-theme', savedTheme);
    updateIcons(savedTheme);

    // Toggle Function
    function toggleTheme(e) {
        e.preventDefault();
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('site-theme', newTheme);
        updateIcons(newTheme);
        
        M.toast({html: `Switched to ${newTheme} mode`, displayLength: 1500});
    }

    // Update Icons for both Desktop and Mobile buttons
    function updateIcons(theme) {
        const iconName = theme === 'dark' ? 'light_mode' : 'dark_mode';
        const desktopIcon = document.querySelector('#theme-toggle i');
        const mobileIcon = document.querySelector('#theme-toggle-mobile i');
        
        if(desktopIcon) desktopIcon.textContent = iconName;
        if(mobileIcon) mobileIcon.textContent = iconName;
    }

    // Attach Listeners
    const desktopBtn = document.getElementById('theme-toggle');
    const mobileBtn = document.getElementById('theme-toggle-mobile');

    if(desktopBtn) desktopBtn.addEventListener('click', toggleTheme);
    if(mobileBtn) mobileBtn.addEventListener('click', toggleTheme);

    // 4. Smooth Scrolling & Sidenav Closing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            // Close mobile menu if open
            const sidenav = M.Sidenav.getInstance(document.querySelector('.sidenav'));
            if(sidenav) sidenav.close();

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
    // ... (Keep existing AOS and Theme logic) ...

    // --- Hero Carousel Initialization ---
    const heroCarouselEl = document.getElementById('hero-carousel');
    if (heroCarouselEl) {
        const heroInstance = M.Carousel.init(heroCarouselEl, {
            fullWidth: true,
            indicators: true,
            duration: 500 // Transition speed
        });

        // Optional: Auto-Play Logic
        setInterval(() => {
            heroInstance.next();
        }, 6000); // Switch every 6 seconds

        // Custom Navigation Functions
        window.moveHero = (direction) => {
            if (direction === 'next') heroInstance.next();
            else heroInstance.prev();
        };
    }
});
});