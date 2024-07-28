let isMouseInside = false;

canvas.addEventListener('mouseenter', () => {
    isMouseInside = true;
});

canvas.addEventListener('mouseleave', () => {
    isMouseInside = false;
    context.clearRect(0, 0, canvas.width, canvas.height); // マウスが外れたらCanvasをクリア
    updateCanvasSize();
});

canvas.addEventListener('mousemove', (event) => {
    if (isMouseInside) {
        let mouseX = event.clientX - canvas.getBoundingClientRect().left;
        let mouseY = event.clientY - canvas.getBoundingClientRect().top;
        mouseX = (mouseX / canvas.width) * 1600;
        mouseY = (mouseY / canvas.height) * 900;

        updateCanvasSize();
        handlePointer(mouseX, mouseY);
    }
});

canvas.addEventListener('click', (event) => {
    let x = event.clientX - canvas.getBoundingClientRect().left;
    let y = event.clientY - canvas.getBoundingClientRect().top;

    const canvasX = (x / canvas.width) * 1600;
    const canvasY = (y / canvas.height) * 900;

    handleClick(canvasX, canvasY);
})

function handleClick(x, y) {
    const area = getClickArea(x, y);
    if (area) {
        if (area.name === 'outdoor' && isIframeVisible) {
            toggleIframe(0);
        } else {
            toggleIframe(area.url);
        }
    } else {
        toggleIframe(0);
    }
}
