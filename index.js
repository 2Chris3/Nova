const btn = document.getElementById('burgerBtn');
const links = document.querySelector('.nav-links');

btn.addEventListener('click', () => {
    const isOpen = btn.classList.toggle('open');
    links.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && btn.classList.contains('open')) {
        btn.classList.remove('open');
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
});

document.getElementById('burgerBtn').addEventListener('click', function () {
    this.classList.toggle('open');
});
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));