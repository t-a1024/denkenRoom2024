const canvas = document.getElementById("mainCanvas");
const context = canvas.getContext("2d");
const image = new Image();

image.src = 'main-assets/homeimg.png'; // 画像ファイルのパスを指定

image.onload = function() {
    drawBackground();
};

// 背景画像を描画する関数
function drawBackground() {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
}

// Canvasサイズの更新
function updateCanvasSize() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    canvas.width = viewportWidth;
    canvas.height = viewportHeight;

    if (viewportWidth * 9 > viewportHeight * 16) {
        canvas.width = viewportHeight * 16 / 9;
    } else {
        canvas.height = viewportWidth * 9 / 16;
    }

    drawBackground();
}

// 最初に一度実行して初期化
updateCanvasSize();

// ウィンドウがリサイズされたときにCanvasサイズを更新
window.addEventListener("resize", updateCanvasSize);
