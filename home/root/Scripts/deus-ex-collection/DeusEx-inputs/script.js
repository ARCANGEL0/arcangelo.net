/**
 * Deus Ex: Human Revolution - Input Systems
 */

document.addEventListener('DOMContentLoaded', () => {
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('fileInput');

    if (dropzone) {
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('dragover');
        });

        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('dragover');
        });

        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                dropzone.querySelector('.dropzone-text').textContent = `${files.length} file(s) selected`;
            }
        });

        dropzone.addEventListener('click', () => {
            fileInput.click();
        });
    }

    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const label = document.querySelector('.sarif-file-label .file-text');
                if (label) {
                    label.textContent = e.target.files[0].name;
                }
            }
        });
    }

    document.querySelectorAll('.sarif-input, .sarif-textarea').forEach(input => {
        input.addEventListener('focus', () => {
            const wrap = input.closest('.sarif-input-wrap, .sarif-textarea-wrap');
            if (wrap) {
                wrap.style.transform = 'scale(1.02)';
            }
        });

        input.addEventListener('blur', () => {
            const wrap = input.closest('.sarif-input-wrap, .sarif-textarea-wrap');
            if (wrap) {
                wrap.style.transform = 'scale(1)';
            }
        });
    });
});

console.log('%cSARIF INDUSTRIES', 'color: #c9a84c; font-family: monospace; font-size: 16px;');
console.log('%cInput System Online', 'color: #5ba8a0; font-family: monospace; font-size: 12px;');
