
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const togglePass = document.getElementById('togglePass');
    const passwordInput = document.getElementById('password');
    const loginContainer = document.getElementById('loginContainer');
    setTimeout(() => {
        document.getElementById('boot-sequence').style.display = 'none';
    }, 4500);
    togglePass.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePass.textContent = type === 'password' ? '👁' : '👁‍🗨';
    });
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const btn = loginForm.querySelector('.btn-login');
        const originalText = btn.innerHTML;
        btn.innerHTML = `
            <span class="btn-text">AUTHENTICATING...</span>
            <span class="btn-icon">◐</span>
        `;
        btn.disabled = true;
        const scanner = document.querySelector('.scanner');
        scanner.style.animation = 'scanPulse 0.5s ease infinite';
        setTimeout(() => {
            scanner.style.animation = '';
            if (username && password) {
                btn.innerHTML = `
                    <span class="btn-text">ACCESS GRANTED</span>
                    <span class="btn-icon">✓</span>
                `;
                btn.style.background = 'linear-gradient(135deg, var(--green), #1a6b5e)';
                loginContainer.style.boxShadow = '0 0 50px rgba(42,157,143,0.3)';
                setTimeout(() => {
                    btn.innerHTML = `
                        <span class="btn-text">REDIRECTING...</span>
                        <span class="btn-icon">→</span>
                    `;
                }, 1000);
            } else {
                btn.innerHTML = `
                    <span class="btn-text">ACCESS DENIED</span>
                    <span class="btn-icon">✖</span>
                `;
                btn.style.background = 'linear-gradient(135deg, var(--red), #8b1538)';
                loginContainer.style.animation = 'shake 0.5s ease';
                setTimeout(() => {
                    loginContainer.style.animation = '';
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 2000);
            }
        }, 2000);
    });
    document.querySelectorAll('.input-sarif').forEach(input => {
        input.addEventListener('focus', () => {
            document.querySelector('.scanner').style.transform = 'scale(1.1)';
        });
        input.addEventListener('blur', () => {
            document.querySelector('.scanner').style.transform = 'scale(1)';
        });
    });
});
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    @keyframes scanPulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.05); opacity: 0.8; }
    }
`;
document.head.appendChild(style);
console.log('%c◈ SARIF INDUSTRIES', 'color: #daa520; font-family: monospace; font-size: 16px;');
console.log('%cSecurity System Online', 'color: #2a9d8f; font-family: monospace; font-size: 12px;');
