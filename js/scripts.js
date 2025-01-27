document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    document.querySelector('.mob_menu_btn').addEventListener("click", function (e) {
        e.preventDefault();

        if (this.classList.contains('active')) {
            this.classList.remove('active');

            document.querySelector('header .mobile-menu').classList.remove('visible');
        } else {
            this.classList.add('active');

            document.querySelector('header .mobile-menu').classList.add('visible');
        }
    });


    // Scroll to anchor
    document.querySelectorAll('[data-scroll]').forEach(link => {

        link.addEventListener('click', function (e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            let topOffset = 0;

            if (this.getAttribute('data-offset')) {
                topOffset = this.getAttribute('data-offset');
            }
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });

            if (window.innerWidth < 768) {
                if (this.closest('header') && document.querySelector('header .mobile-menu').classList.contains('visible')) {
                    document.querySelector('header .mobile-menu').classList.remove('visible');
                    document.querySelector('.mob_menu_btn').classList.remove('active');
                }
            }
        });
    });
});