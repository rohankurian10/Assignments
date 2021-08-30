document.getElementById("show").addEventListener("click", show);
document.getElementById("hide").addEventListener("click", hide);

function show() {
    document.getElementById("div").style.visibility = "visible";
}

function hide() {
    document.getElementById("div").style.visibility = "hidden";
}