let clickAreas = [];

// JSONファイルからクリック領域データを読み込む関数
async function loadClickAreas() {
    try {
        const response = await fetch('main-assets/clickAreas.json');
        clickAreas = await response.json();
    } catch (error) {
        console.error('Error loading click areas:', error);
    }
}

// ラベルを描画する関数
function drawLabel(x, y, text) {
    const centerX = x * canvas.width / 1600;
    const centerY = y * canvas.height / 900;
    const radius = 30;
    updateCanvasSize();
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.stroke();

    context.font = '20px Arial';
    context.fillStyle = 'blue';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, centerX, centerY);
}

// ポインターの処理を行う関数
function handlePointer(x, y) {
    for (const area of clickAreas) {
        if (x > area.xMin && x < area.xMax && y > area.yMin && y < area.yMax) {
            drawLabel(x, y, area.name);
        }
    }
}

// 各クリック領域の処理を行う関数
function getClickArea(x, y) {
    for (const area of clickAreas) {
        if (x > area.xMin && x < area.xMax && y > area.yMin && y < area.yMax) {
            return area;
        }
    }
    return null;
}