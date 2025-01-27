document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    document.querySelector('.mob_menu_btn').addEventListener("click", function (e) {
        e.preventDefault();

        if (this.classList.contains('active')) {
            this.classList.remove('active');

            document.querySelector('header .mobile-menu').classList.remove('visible');
            document.querySelector('body').classList.remove('lock');
        } else {
            this.classList.add('active');

            document.querySelector('header .mobile-menu').classList.add('visible');
            document.querySelector('body').classList.add('lock');
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
                    document.querySelector('body').classList.remove('lock');
                }
            }
        });
    });

    // ALert by clicking on logo
    document.querySelector('.logo a').addEventListener("click", function (e) {
        e.preventDefault();

        alert("I can never fall asleep before 12:00 AM");
    });
});