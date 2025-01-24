// Browser checking
if ( !supportsCssVars() ) {
	document.getElementsByTagName('body').classList.add("lock");
	document.getElementsByClassName('supports_error').classList.add("show");
}


// Lazy-load
setTimeout(function(){
	observer = lozad('.lozad', {
		rootMargin: '200px 0px',
		threshold: 0,
		loaded: function(el) {
			el.classList.add('loaded');
		}
	});

	observer.observe();
}, 200);


// Scroll to anchor
document.querySelectorAll('[data-anchor]').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('data-anchor').substring(1);

        const scrollTarget = document.getElementById(href);

        let topOffset = 30;

        if (this.getAttribute('data-offset')) {
            topOffset = this.getAttribute('data-offset');
        }
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });

        if (window.innerWidth < 1025) {
            if (this.closest('header') && document.querySelector('header .menu').classList.contains('visible')) {
                document.querySelector('header .overlay').classList.remove('visible');
                document.querySelector('header .menu').classList.remove('visible');
                document.querySelector('.mob_menu_link').classList.remove('active');
                document.querySelector('body').classList.remove('lock');
            }
        }
    });
});


// Mobile menu
const mobileMenu = (btn, menu) => {
    document.querySelector(btn).addEventListener("click", function(e){
        e.preventDefault();

        if ( this.classList.contains('active') ) {
            this.classList.remove('active');

            document.querySelector(menu).classList.remove('visible');
        } else {
            this.classList.add('active');

            document.querySelector(menu).classList.add('visible');
        }
    });
}



// Addutional functions
function supportsCssVars() {
    var s = document.createElement('style'),
        support;

    s.innerHTML = ":root { --tmp-var: bold; }";
    document.head.appendChild(s);
    support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'));
    s.parentNode.removeChild(s);

    return support;
}