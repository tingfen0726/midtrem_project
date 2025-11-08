let current = 1;
let pic = ["picture/pic1.jpg", "picture/pic2.jpg", "picture/pic3.jpg", "picture/pic4.jpg", "picture/pic5.jpg"];
const prevbtn = document.getElementById("prev");
const nextbtn = document.getElementById("next");
const label = document.getElementById("of");
const imgs = document.getElementById("imgs");

prevbtn.addEventListener("click", function(){
    if(current > 1){
        current--;
    } else{
        current = 5;
    }
    label.innerText = "image " + current + " of 5";
    imgs.src = pic[current-1];
});
nextbtn.addEventListener("click", function(){
    if(current < 5){
        current++;
    } else{
        current = 1;
    }
    label.innerText = "image " + current + " of 5";
    imgs.src = pic[current-1];
});