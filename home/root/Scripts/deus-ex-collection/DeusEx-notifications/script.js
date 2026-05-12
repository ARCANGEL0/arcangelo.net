/**
 * Deus Ex: Human Revolution - Notification Systems
 */

const toastMessages = {
    success: { title: 'AUGMENTATION COMPLETE', message: 'System augmentation installed successfully.', duration: 5000 },
    warning: { title: 'CAUTION', message: 'Neural interface calibration required.', duration: 5000 },
    danger: { title: 'CRITICAL ALERT', message: 'Typhoon system breach detected!', duration: 5000 },
    info: { title: 'SYSTEM UPDATE', message: 'New neural software available for download.', duration: 5000 }
};

const popupMessages = {
    confirm: { title: 'Confirm Action', icon: '?', message: 'Are you sure you want to install this augmentation? This action cannot be undone.', type: 'confirm' },
    alert: { title: 'ALERT', icon: '!', message: 'Unauthorized access attempt blocked by firewall.', type: 'alert' },
    system: { title: 'System Alert', icon: '⚡', message: 'Sarif Industries server maintenance scheduled for 02:00 UTC.', type: 'system' }
};

function showToast(type) {
    const container = document.getElementById('toastContainer');
    const data = toastMessages[type];
    const iconMap = { success: '✓', warning: '⚠', danger: '✖', info: 'ℹ' };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-icon">${iconMap[type]}</div>
        <div class="toast-content">
            <div class="toast-title">${data.title}</div>
            <div class="toast-message">${data.message}</div>
        </div>
        <button class="toast-close" onclick="removeToast(this.parentElement)">×</button>
        <div class="toast-progress"></div>
    `;
    container.appendChild(toast);
    setTimeout(() => removeToast(toast), data.duration);
}

function removeToast(toast) {
    if (!toast || toast.classList.contains('removing')) return;
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 400);
}

function showPopup(type) {
    const overlay = document.getElementById('popupOverlay');
    const data = popupMessages[type];
    const buttons = type === 'confirm' 
        ? `
            <button class="hud-btn" onclick="closePopup()">CANCEL</button>
            <button class="hud-btn" onclick="closePopup()">CONFIRM</button>
        `
        : `<button class="hud-btn" onclick="closePopup()">ACKNOWLEDGE</button>`;
    overlay.innerHTML = `
        <div class="popup popup-left">
            <div class="popup-header">
                <div class="popup-title">
                    <span class="popup-icon">${data.icon}</span>
                    <span>${data.title}</span>
                </div>
                <button class="popup-close" onclick="closePopup()">×</button>
            </div>
            <div class="popup-body">${data.message}</div>
            <div class="popup-footer">${buttons}</div>
        </div>
    `;
    overlay.classList.add('active');
}

function closePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.remove('active');
    setTimeout(() => overlay.innerHTML = '', 300);
}

function showAutoDismiss(seconds) {
    const overlay = document.getElementById('popupOverlay');
    overlay.innerHTML = `
        <div class="popup popup-alt">
            <div class="popup-header">
                <div class="popup-title">
                    <span class="popup-icon">⏱</span>
                    <span>AUTO-DISMISS ALERT</span>
                </div>
            </div>
            <div class="popup-body">
                <p>This notification will automatically dismiss in <strong id="countdown">${seconds}</strong> seconds.</p>
                <p style="margin-top: 8px; font-size: 12px; color: var(--text-dim);">Sarif Industries automated system message.</p>
            </div>
            <div class="popup-footer">
                <button class="hud-btn" onclick="closePopup()">DISMISS NOW</button>
            </div>
            <div class="popup-progress-bar">
                <div class="popup-progress-fill" id="popupProgress" style="width: 100%"></div>
            </div>
        </div>
    `;
    overlay.classList.add('active');
    const countdownEl = document.getElementById('countdown');
    const progressEl = document.getElementById('popupProgress');
    let remaining = seconds;
    const interval = setInterval(() => {
        remaining--;
        if (countdownEl) countdownEl.textContent = remaining;
        if (progressEl) progressEl.style.width = `${(remaining / seconds) * 100}%`;
        if (remaining <= 0) {
            clearInterval(interval);
            closePopup();
        }
    }, 1000);
    overlay.dataset.interval = interval;
}

const originalClosePopup = closePopup;
closePopup = function() {
    const overlay = document.getElementById('popupOverlay');
    if (overlay.dataset.interval) {
        clearInterval(parseInt(overlay.dataset.interval));
        delete overlay.dataset.interval;
    }
    originalClosePopup();
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tooltip-trigger').forEach(trigger => {
        const tooltipText = trigger.dataset.tooltip;
        const position = trigger.dataset.position || 'top';
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = tooltipText;
        tooltip.dataset.position = position;
        trigger.appendChild(tooltip);
    });
});

document.getElementById('popupOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'popupOverlay') closePopup();
});

console.log('%cSARIF INDUSTRIES', 'color: #D4AF37; font-family: monospace; font-size: 16px;');
console.log('%cNotification System Online', 'color: #00CED1; font-family: monospace; font-size: 12px;');
