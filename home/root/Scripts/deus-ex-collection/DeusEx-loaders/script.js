// Deus Ex: Mankind Divided Loading Animation
// Exact recreation of the CodePen by vi5e

const durationFraction = 0.5;
const duration = 92/30 * 1000; // ~3067ms
const durationRotate = 288/30 * 1000; // ~9600ms
const insetDelay = 0.50;
const offset = 12/96;
const offsetScale = 30/96;

// Rotate the entire loading container
document.querySelector('#loading').animate([
    { transform: 'rotate(0)' },
    { transform: 'rotate(360deg)' }
], {
    duration: durationRotate,
    iterations: Infinity
});

// Scale triangle #1 (with delay)
document.querySelector('#triangle').animate([
    { transform: 'scale(1)' },
    { transform: 'scale(0.4)' },
    { transform: 'scale(0.16)' }
], {
    duration: duration,
    iterations: Infinity,
    iterationStart: insetDelay
});

// Scale triangle #2 (no delay)
document.querySelector('#triangle-2').animate([
    { transform: 'scale(1)' },
    { transform: 'scale(0.4)' },
    { transform: 'scale(0.16)' }
], {
    duration: duration,
    iterations: Infinity,
});

// Helper function to animate triangle #1 elements
function animateTri1(id, fraction) {
    const tri = document.querySelector('#triangle-' + id + '-1');
    const fill = document.querySelector('#fill-' + id + '-1');

    if (tri) {
        tri.animate([
            { opacity: '0' },
            { opacity: '0', offset: (fraction/19) * durationFraction },
            { opacity: '1', offset: offset + ((fraction/19) * durationFraction) },
            { opacity: '1' }
        ], {
            duration: duration,
            iterations: Infinity,
            iterationStart: insetDelay
        });
    }

    if (fill) {
        fill.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1)', offset: (fraction/19) * durationFraction },
            { transform: 'scale(0)', offset: offsetScale + ((fraction/19) * durationFraction) },
            { transform: 'scale(0)' }
        ], {
            duration: duration,
            iterations: Infinity,
            iterationStart: insetDelay
        });
    }
}

// Helper function to animate triangle #2 elements (no delay)
function animateTri2(id, fraction) {
    const tri = document.querySelector('#triangle-' + id + '-2');
    const fill = document.querySelector('#fill-' + id + '-2');

    if (tri) {
        tri.animate([
            { opacity: '0' },
            { opacity: '0', offset: (fraction/19) * durationFraction },
            { opacity: '1', offset: offset + ((fraction/19) * durationFraction) },
            { opacity: '1' }
        ], {
            duration: duration,
            iterations: Infinity,
        });
    }

    if (fill) {
        fill.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1)', offset: (fraction/19) * durationFraction },
            { transform: 'scale(0)', offset: offsetScale + ((fraction/19) * durationFraction) },
            { transform: 'scale(0)' }
        ], {
            duration: duration,
            iterations: Infinity,
        });
    }
}

// Animate all 20 triangles
for (let i = 0; i <= 19; i++) {
    animateTri1(i + 1, i);
    animateTri2(i + 1, i);
}