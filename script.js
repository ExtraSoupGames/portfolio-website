document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href) return;
        if (href.startsWith('#')) return;
        e.preventDefault();
        const content = document.querySelector('.browser-intro') || document.querySelector('.game-content');
        if (content) {
            content.style.animation = 'fadeOut 0.3s ease forwards';
        }
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

document.querySelectorAll('hr').forEach(hr => {
    observer.observe(hr);
});