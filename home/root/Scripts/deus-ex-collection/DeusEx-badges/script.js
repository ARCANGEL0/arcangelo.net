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

    class ModalController {
        constructor() {
            this.modals = document.querySelectorAll('.modal-overlay');
            this.triggers = document.querySelectorAll('[data-modal]');
            this.init();
        }

        init() {
            this.triggers.forEach(trigger => {
                trigger.addEventListener('click', () => {
                    const modalId = trigger.dataset.modal;
                    this.openModal(modalId);
                });
                trigger.addEventListener('mouseenter', () => AudioSynth.hover());
            });

            this.modals.forEach(modal => {
                const closeBtn = modal.querySelector('.modal-close');
                const closeBtn2 = modal.querySelector('.modal-btn-close');
                
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => this.closeModal(modal));
                }
                if (closeBtn2) {
                    closeBtn2.addEventListener('click', () => this.closeModal(modal));
                }
                
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) this.closeModal(modal);
                });
            });
        }

        openModal(id) {
            const modal = document.getElementById(id);
            if (modal) {
                modal.classList.add('active');
                AudioSynth.activate();
            }
        }

        closeModal(modal) {
            modal.classList.remove('active');
            AudioSynth.click();
        }
    }

    class ButtonController {
        constructor() {
            this.statusText = document.querySelector('.status-text');
            this.initButtons();
        }

        initButtons() {
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(btn => {
                btn.addEventListener('mouseenter', () => AudioSynth.hover());
                btn.addEventListener('click', () => {
                    AudioSynth.click();
                    btn.style.transform = 'scale(0.95)';
                    setTimeout(() => btn.style.transform = '', 150);
                });
            });
        }
    }

    function init() {
        new ModalController();
        new ButtonController();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();