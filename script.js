var main = document.querySelector("#main");
var image = document.querySelector("#page .move");

main.addEventListener("mousemove",function (dets) {
    image.style.top = 1-dets.y*0.05 + "px";
    image.style.left = 1-dets.x*0.05 + "px";
})