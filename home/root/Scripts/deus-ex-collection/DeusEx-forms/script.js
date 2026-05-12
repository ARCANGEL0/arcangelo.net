/**
 * Sarif Industries - Form System
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sarifForm');
    const fileInput = document.getElementById('fileInput');
    const fileText = document.querySelector('.file-text');

    // File input
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0 && fileText) {
                fileText.textContent = e.target.files[0].name;
                fileText.style.color = 'var(--gold-bright)';
            }
        });
    }

    // Form submit
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            // Simulate transmission
            const submitBtn = form.querySelector('.form-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = `<span class="submit-text">TRANSMITTING...</span>`;
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                showToast('success', 'DATA TRANSMITTED', 'Mission data successfully uploaded to Sarif Industries servers.');
                
                // Reset form
                form.reset();
                if (fileText) {
                    fileText.textContent = 'Choose file...';
                    fileText.style.color = '';
                }
            }, 2000);
        });
    }

    // Input focus effects
    document.querySelectorAll('.sarif-input, .sarif-textarea, .sarif-select').forEach(input => {
        input.addEventListener('focus', () => {
            const wrap = input.closest('.sarif-input-wrap, .sarif-textarea-wrap, .sarif-select-wrap');
            if (wrap) {
                wrap.style.transform = 'scale(1.02)';
                wrap.style.transition = 'transform 0.2s ease';
            }
        });

        input.addEventListener('blur', () => {
            const wrap = input.closest('.sarif-input-wrap, .sarif-textarea-wrap, .sarif-select-wrap');
            if (wrap) {
                wrap.style.transform = 'scale(1)';
            }
        });
    });
});

// Toast Notification System
function showToast(type, title, message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const iconMap = { success: '✓', danger: '✖' };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-icon">${iconMap[type] || 'ℹ'}</div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="removeToast(this.parentElement)">×</button>
    `;
    container.appendChild(toast);
    setTimeout(() => removeToast(toast), 5000);
}

function removeToast(toast) {
    if (!toast || toast.classList.contains('removing')) return;
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 400);
}

console.log('%cSARIF INDUSTRIES', 'color: #c9a84c; font-family: monospace; font-size: 16px;');
console.log('%cForm System Online', 'color: #5ba8a0; font-family: monospace; font-size: 12px;');
