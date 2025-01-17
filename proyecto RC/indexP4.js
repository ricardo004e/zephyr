document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            const offset = targetSection.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        });
    });
});

