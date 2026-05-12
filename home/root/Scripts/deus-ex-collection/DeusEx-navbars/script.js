
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.g-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.g-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    document.querySelectorAll('.h-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.h-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
    document.querySelectorAll('.f-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.f-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    document.querySelectorAll('.t-section').forEach(section => {
        section.addEventListener('click', () => {
            document.querySelectorAll('.t-section').forEach(s => s.classList.remove('active'));
            section.classList.add('active');
            const index = Array.from(document.querySelectorAll('.t-section')).indexOf(section);
            const indicator = document.querySelector('.t-indicator-bar');
            if (indicator) {
                indicator.style.transform = `translateX(${index * 25}%)`;
            }
        });
    });
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
        });
    });
    setInterval(() => {
        document.querySelectorAll('.active .g-status-dot, .active .h-brand-hex, .active .f-brand-ring').forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; 
            el.style.animation = null;
        });
    }, 5000);
});
console.log('%c◈ SARIF INDUSTRIES', 'color: #daa520; font-family: monospace; font-size: 16px;');
console.log('%cNavigation Systems Online', 'color: #00b4d8; font-family: monospace; font-size: 12px;');
console.log('%c4 augmented navbars loaded', 'color: #2a9d8f; font-family: monospace; font-size: 11px;');
