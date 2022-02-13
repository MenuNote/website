const screen_img = document.getElementById("screen");

function loop() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkThemeMq.matches) {
        screen_img.src = "assets/screen-dark.png"
    } else {
        screen_img.src = "assets/screen-light.png"
    }

    setTimeout(loop, 1000);
}

loop();