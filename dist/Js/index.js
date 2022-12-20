function opennav() {
    let element = document.getElementById('nav-links');
    if (element.style.left == "-100%") {
        element.style.left = "0"
    } else {
        element.style.left = "-100%"
    }
}