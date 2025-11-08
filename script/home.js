const layor = document.getElementById('layor');
const textlayor = document.getElementById('text-layor');
document.getElementById('hat').addEventListener("click", () => {
    layor.src = "picture/hat.png";
    textlayor.innerText = "this is my hat";
});
document.getElementById('plant').addEventListener("click", () => {
    layor.src = "picture/plant.png";
    textlayor.innerText = "this is my plant";
});
document.getElementById('flower').addEventListener("click", () => {
    layor.src = "picture/flower.png";
    textlayor.innerText = "this is my flower";
});