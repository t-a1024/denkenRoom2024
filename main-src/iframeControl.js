let isIframeVisible = false;

// Iframeの表示を切り替える関数
function toggleIframe(url) {
    var iframe = document.getElementById("mainIframe");

    if (!iframe) {
        console.error("Error: iframe element not found.");
        return;
    }

    if (url === 0) {
        iframe.style.display = "none";
        isIframeVisible = false;
        canvas.style.filter = "blur(0px)";
        iframe.src = "";
        return;
    }

    iframe.src = url;

    if (iframe.style.display === "none") {
        iframe.style.display = "block";
        canvas.style.filter = "blur(4px)";
        isIframeVisible = true;
    } else {
        iframe.style.display = "none";
        iframe.src = "";
        canvas.style.filter = "blur(0px)";
        isIframeVisible = false;
    }
}
