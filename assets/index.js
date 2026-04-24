const btn = document.getElementById('burgerBtn');
const links = document.querySelector('.nav-links');

btn.addEventListener('click', (e) => {
    e.preventDefault(); // safe even if not needed

    const isOpen = btn.classList.toggle('open');
    links.classList.toggle('open', isOpen);

    btn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.classList.contains('open')) {
        btn.classList.remove('open');
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
});

window.addEventListener('scroll', () => {
    document.getElementById('navbar')
        .classList.toggle('scrolled', window.scrollY > 40);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));