(function() {
    'use strict';

    const AudioSynth = {
        playTone: function(frequency, duration, type) {
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = type || 'sine';
                osc.frequency.setValueAtTime(frequency, ctx.currentTime);
                gain.gain.setValueAtTime(0.05, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + duration);
            } catch(e) {}
        },
        hover: function() { this.playTone(1200, 0.05, 'sine'); },
        click: function() { this.playTone(800, 0.1, 'square'); },
        activate: function() {
            this.playTone(2000, 0.2, 'sine');
            setTimeout(() => this.playTone(2500, 0.3, 'sine'), 100);
        },
        danger: function() { this.playTone(300, 0.4, 'sawtooth'); }
    };

    class Typewriter {
        constructor(element, options) {
            this.element = element;
            this.speed = (options && options.speed) || 30;
            this.delay = (options && options.delay) || 0;
        }

        type(text, onComplete) {
            this.element.textContent = '';
            this.element.classList.add('typing');
            let i = 0;
            const typeChar = () => {
                if (i < text.length) {
                    this.element.textContent += text.charAt(i);
                    if (i % 3 === 0) {
                        AudioSynth.playTone(800 + Math.random() * 400, 0.02, 'sine');
                    }
                    i++;
                    setTimeout(typeChar, this.speed);
                } else {
                    this.element.classList.remove('typing');
                    if (onComplete) onComplete();
                }
            };
            setTimeout(typeChar, this.delay);
        }
    }

    class ButtonController {
        constructor() {
            this.statusText = document.querySelector('#status-text');
            this.typewriter = new Typewriter(this.statusText, { speed: 25 });
            this.energyFill = document.querySelector('.energy-fill');
            this.energyValue = document.querySelector('.energy-value');
            this.initButtons();
            this.initToggles();
            this.initSelects();
            this.initRadios();
        }

        initButtons() {
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(btn => {
                const type = btn.dataset.type;
                btn.addEventListener('mouseenter', () => {
                    AudioSynth.hover();
                });
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    AudioSynth.click();
                    this.handleButtonAction(type, btn);
                });
            });
        }

        handleButtonAction(type, button) {
            const btnText = button.querySelector('.btn-text') ? button.querySelector('.btn-text').textContent : 'Button';
            switch(type) {
                case 'primary':
                    this.typewriter.type('Primary action initiated. Processing...', () => { this.flashSuccess(); });
                    AudioSynth.activate();
                    this.drainEnergy(10);
                    break;
                case 'secondary':
                    this.typewriter.type('Secondary action executed. Systems updated.', () => { this.flashSuccess(); });
                    this.drainEnergy(5);
                    break;
                case 'danger':
                    this.typewriter.type('Warning: Danger action triggered.', () => { this.flashDanger(); });
                    AudioSynth.danger();
                    this.drainEnergy(30);
                    break;
                case 'holo':
                    this.typewriter.type('Holographic mode activated.', () => { this.flashSuccess(); });
                    this.drainEnergy(15);
                    break;
                case 'augment':
                    this.typewriter.type('Augmentation sequence started.', () => { this.flashSuccess(); });
                    AudioSynth.activate();
                    this.drainEnergy(20);
                    break;
                case 'utility':
                    this.typewriter.type('Utility function executed.', () => { this.flashSuccess(); });
                    this.drainEnergy(3);
                    break;
                default:
                    this.typewriter.type(btnText + ' clicked.');
            }
            button.style.transform = 'scale(0.95)';
            setTimeout(() => { button.style.transform = ''; }, 150);
        }

        initToggles() {
            const toggles = document.querySelectorAll('.toggle-input');
            toggles.forEach(toggle => {
                toggle.addEventListener('change', (e) => {
                    const parent = toggle.closest('.toggle-group');
                    const status = parent.querySelector('.toggle-status');
                    const name = parent.querySelector('.toggle-name').textContent;
                    if (e.target.checked) {
                        status.textContent = 'ONLINE';
                        status.classList.add('online');
                        status.classList.remove('offline', 'armed');
                        this.typewriter.type(name + ' activated.');
                        AudioSynth.activate();
                    } else {
                        status.textContent = 'OFFLINE';
                        status.classList.add('offline');
                        status.classList.remove('online', 'armed');
                        this.typewriter.type(name + ' deactivated.');
                    }
                });
            });
        }

        initSelects() {
            const selects = document.querySelectorAll('.select-input');
            selects.forEach(select => {
                select.addEventListener('change', (e) => {
                    const selected = e.target.options[e.target.selectedIndex].text;
                    this.typewriter.type(selected + ' selected.');
                    AudioSynth.activate();
                });
            });
        }

        initRadios() {
            const radios = document.querySelectorAll('.deus-radio input');
            radios.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    const label = e.target.closest('.deus-radio').querySelector('.radio-label').textContent;
                    this.typewriter.type(label + ' selected.');
                    AudioSynth.click();
                });
            });
        }

        drainEnergy(amount) {
            const currentWidth = parseFloat(this.energyFill.style.width) || 100;
            const newWidth = Math.max(0, currentWidth - amount);
            this.energyFill.style.transition = 'width 0.5s ease';
            this.energyFill.style.width = newWidth + '%';
            this.energyValue.textContent = Math.round(newWidth) + '%';
            if (newWidth < 30) {
                this.energyFill.style.background = 'linear-gradient(90deg, #C41E3A, rgba(196, 30, 58, 0.5))';
            }
            setTimeout(() => {
                this.energyFill.style.width = '100%';
                this.energyValue.textContent = '100%';
                this.energyFill.style.background = '';
            }, 3000);
        }

        flashSuccess() {
            this.statusText.style.color = '#00ff41';
            this.statusText.style.textShadow = '0 0 10px rgba(0, 255, 65, 0.5)';
            setTimeout(() => {
                this.statusText.style.color = '';
                this.statusText.style.textShadow = '';
            }, 1000);
        }

        flashDanger() {
            this.statusText.style.color = '#C41E3A';
            this.statusText.style.textShadow = '0 0 10px rgba(196, 30, 58, 0.5)';
            setTimeout(() => {
                this.statusText.style.color = '';
                this.statusText.style.textShadow = '';
            }, 1500);
        }
    }

    function initTitleGlitch() {
        const titles = document.querySelectorAll('.section-title');
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
        titles.forEach(title => {
            const originalText = title.textContent;
            const glitch = () => {
                let iterations = 0;
                const maxIterations = originalText.length;
                const interval = setInterval(() => {
                    title.textContent = originalText.split('').map((char, i) => {
                        if (char === ' ') return ' ';
                        if (i < iterations) return originalText[i];
                        return chars[Math.floor(Math.random() * chars.length)];
                    }).join('');
                    if (iterations >= maxIterations) {
                        clearInterval(interval);
                        title.textContent = originalText;
                    }
                    iterations += 1 / 3;
                }, 30);
            };
            setInterval(() => {
                if (Math.random() > 0.7) glitch();
            }, 5000);
            title.addEventListener('mouseenter', () => glitch());
        });
    }

    function initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const statusText = document.querySelector('#status-text');
                const typewriter = new Typewriter(statusText, { speed: 20 });
                typewriter.type('System reset. All controls offline.');
                document.querySelectorAll('.toggle-input').forEach(t => {
                    t.checked = false;
                    const parent = t.closest('.toggle-group');
                    const status = parent.querySelector('.toggle-status');
                    status.textContent = 'OFFLINE';
                    status.className = 'toggle-status offline';
                });
                document.querySelectorAll('.select-input').forEach(s => {
                    s.selectedIndex = 0;
                });
            }
        });
    }

    function init() {
        new ButtonController();
        initTitleGlitch();
        initKeyboardShortcuts();
        const statusText = document.querySelector('#status-text');
        const typewriter = new Typewriter(statusText, { speed: 30, delay: 500 });
        setTimeout(() => {
            typewriter.type('SARIF INDUSTRIES: Interface online. Awaiting input.');
        }, 1000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();