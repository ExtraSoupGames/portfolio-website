document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (!href) return;

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