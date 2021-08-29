var div = document.getElementById("div");

document.getElementById("show").addEventListener("click", show);
document.getElementById("hide").addEventListener("click", hide);

function show() {
    document.getElementById("div").style.display = "block";
    div.style.display = "block";
}

function hide() {
    document.getElementById("div").style.display = "none";
    div.style.display = "none";
}