   // --- SCROLL PROGRESS BAR LOGIC (EXISTING) ---
        function updateProgressBar() {
            const scrollBar = document.getElementById('scroll-progress-bar');
            
            // Total height of the scrollable content (document minus viewport height)
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            
            // Current scroll position from the top
            const scrollTop = window.scrollY;
            
            let scrollPercent = 0;

            if (scrollHeight > 0) {
                // Calculate percentage
                scrollPercent = (scrollTop / scrollHeight) * 100;
            }
            
            // Update the width of the progress bar
            scrollBar.style.width = scrollPercent + '%';
        }

        // --- GENERAL LOGIC (EXISTING) ---
        
        // Simple smooth scroll behavior for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add glow effect on hover for the main H1 spans
        document.addEventListener('DOMContentLoaded', () => {
            const spans = document.querySelectorAll('#home h1 span');
            spans.forEach(span => {
                span.addEventListener('mouseover', () => {
                    span.style.textShadow = '0 0 15px ' + (span.classList.contains('text-neon-cyan') ? 'var(--neon-cyan)' : 'var(--neon-pink)');
                });
                span.addEventListener('mouseout', () => {
                    span.style.textShadow = '';
                });
            });
            
            // Initial call and set up scroll listener for progress bar
            updateProgressBar(); 
            window.addEventListener('scroll', updateProgressBar);
            window.addEventListener('resize', updateProgressBar);
        });
        
        document.addEventListener('DOMContentLoaded', () => {

    // --- SCROLL PROGRESS BAR LOGIC ---
    function updateProgressBar() {
        const scrollBar = document.getElementById('scroll-progress-bar');
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY;
        const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        scrollBar.style.width = scrollPercent + '%';
    }
    window.addEventListener('scroll', updateProgressBar);
    updateProgressBar(); // Initial load

    // --- MOBILE NAV TOGGLE ---
    const menuButton = document.querySelector('button.md\\:hidden');
    const nav = document.querySelector('nav');
    let menuOpen = false;

    function openMobileMenu() {
        nav.classList.remove('hidden');
        nav.classList.add('flex', 'flex-col', 'absolute', 'top-16', 'right-6', 'bg-[#101020]', 'border', 'border-gray-700', 'rounded-lg', 'p-4', 'space-y-4', 'md:space-y-0');
    }

    function closeMobileMenu() {
        nav.classList.add('hidden');
        nav.classList.remove('flex', 'flex-col', 'absolute', 'top-16', 'right-6', 'bg-[#101020]', 'border', 'border-gray-700', 'rounded-lg', 'p-4', 'space-y-4', 'md:space-y-0');
    }

    menuButton.addEventListener('click', () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
            openMobileMenu();
        } else {
            closeMobileMenu();
        }
    });

    // --- RESET NAV ON RESIZE ---
    function resetNavOnResize() {
        if (window.innerWidth >= 768) { // md breakpoint
            nav.className = 'hidden md:flex space-x-8 text-sm font-semibold';
            menuOpen = false;
        } else {
            // Mobile: keep it hidden unless menuOpen
            if (!menuOpen) {
                nav.className = 'hidden';
            }
        }
    }

    window.addEventListener('resize', resetNavOnResize);
    resetNavOnResize(); // initial check

    // --- SMOOTH SCROLLING ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if (menuOpen) { // Close menu after clicking
                menuButton.click();
            }
        });
    });

});
        