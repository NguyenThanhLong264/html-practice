const canvas = document.getElementById('create-canvas');
const ctx = canvas.getContext('2d');

let currentStage = 0;
const STAGE_COUNT = 3;

let angle = 0;
let posX = 0;
let radius = 10;

// Stage 1: Quay tròn
// --- Stage 1 mới: Thư mở ra, lá thư trồi lên, loading ---
function drawStage1() {
    const elapsed = performance.now() % 5000; // chu kỳ 5s
    const t = elapsed;

    const openProgress = Math.min(t / 1000, 1); // 0 → 1 trong 1s
    const slideProgress = t > 1000 ? Math.min((t - 1000) / 1000, 1) : 0;
    const loadingProgress = t > 2000 ? ((t - 2000) % 1000) / 1000 : 0;

    drawEnvelope(ctx, openProgress);
    if (t >= 1000) drawLetter(ctx, slideProgress);
    if (t >= 2000) drawLoading(ctx, loadingProgress);
}

function drawEnvelope(ctx, openProgress) {
    const x = 150, y = 200, width = 200, height = 100;

    ctx.fillStyle = '#F2E8D5';
    ctx.fillRect(x, y, width, height);

    ctx.fillStyle = '#E0D3B8';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width / 2, y - 60 * (1 - openProgress));
    ctx.lineTo(x + width, y);
    ctx.closePath();
    ctx.fill();
}

function drawLetter(ctx, slideProgress) {
    const x = 175, yBase = 190, width = 150, height = 80;
    const y = yBase - slideProgress * 80;

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(x, y, width, height);

    ctx.fillStyle = '#ccc';
    for (let i = 0; i < 4; i++) {
        ctx.fillRect(x + 10, y + 10 + i * 15, 130, 6);
    }
}

function drawLoading(ctx, loadingProgress) {
    const cx = canvas.width / 2;
    const cy = 320;
    const r = 6;
    const spacing = 20;

    for (let i = 0; i < 3; i++) {
        const phase = (loadingProgress - i * 0.2 + 1) % 1;
        const alpha = Math.max(0, 1 - Math.abs(phase * 2 - 1));
        ctx.beginPath();
        ctx.arc(cx + (i - 1) * spacing, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(50, 50, 50, ${alpha})`;
        ctx.fill();
    }
}

// Stage 2: Di chuyển ngang
function drawStage2() {
    ctx.beginPath();
    ctx.arc(posX, canvas.height / 2, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();

    posX += 2;
    if (posX > canvas.width + 20) posX = -20;
}

// Stage 3: Nhấp nháy tròn
function drawStage3() {
    radius = 10 + 10 * Math.abs(Math.sin(angle * 2));
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'green';
    ctx.fill();
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    clear();

    if (currentStage === 0) drawStage1();
    else if (currentStage === 1) drawStage2();
    else if (currentStage === 2) drawStage3();

    angle += 0.02;
    requestAnimationFrame(draw);
}

canvas.addEventListener('click', () => {
    currentStage = (currentStage + 1) % STAGE_COUNT;
});

setInterval(() => {
    currentStage = (currentStage + 1) % STAGE_COUNT;
}, 5000);

// Start animation
draw();
