var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function drawStars() {
    var grd = ctx.createLinearGradient(0, 0, 0, 300);
    grd.addColorStop(0,"#1f2052ff");
    grd.addColorStop(0.2,"#402b78ff");
    grd.addColorStop(0.4,"#803e69ff");
    grd.addColorStop(0.6,"#de4318ff");
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,500,300);

    ctx.font = "15px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("THE CITY", 10, 20);
    const starCount = 50;

    ctx.beginPath();
    ctx.arc(250,190,40,0,2*Math.PI);
    ctx.fillStyle = "#FCF59E";
    ctx.fill();

    const gradient = ctx.createRadialGradient(250, 190, 40 * 0.5, 250, 190, 40 * 1.5);
    gradient.addColorStop(0, "rgba(248, 235, 49, 0.3)");
    gradient.addColorStop(0.5, "rgba(252,245,158,0.15)"); 
    gradient.addColorStop(1, "rgba(252,245,158,0)"); 
    ctx.beginPath();
    ctx.arc(250, 190, 40 * 2, 0, 2 * Math.PI);
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.fillStyle = "white";
    for (let i = 0; i < starCount; i++) {
        const x = Math.random() * 500;
        const y = Math.random() * 100;
        ctx.fillRect(x, y, 1, 1);
    }

    var grd = ctx.createLinearGradient(0, 190, 0, 300);
    grd.addColorStop(0,"#430e07ff");
    grd.addColorStop(0.8,"#c25b1bff");
    ctx.fillStyle = grd;
    ctx.fillRect(0,190,500,110);

    ctx.fillStyle = "black";

    ctx.fillRect(0,160,22,40);
    ctx.fillRect(20,164,18,36);
    ctx.fillRect(40,161,25,39);
    ctx.fillRect(65,130,20,70);
    ctx.fillRect(85,166,17,34);
    ctx.fillRect(102,172,23,28);
    ctx.fillRect(125,170,19,30);
    ctx.fillRect(144,175,21,25); 
    ctx.fillRect(165,173,20,27); 
    ctx.fillRect(185,145,24,55);
    ctx.fillRect(209,181,18,19);
    ctx.fillRect(227,184,20,16);
    ctx.fillRect(247,182,22,18);

    ctx.fillRect(269,185,20,15);
    ctx.fillRect(289,183,18,17);
    ctx.fillRect(307,178,25,22);
    ctx.fillRect(332,176,20,24);
    ctx.fillRect(352,174,19,26);
    ctx.fillRect(372,140,24,60);
    ctx.fillRect(396,171,20,29);
    ctx.fillRect(416,168,23,32);
    ctx.fillRect(439,170,21,30);
    ctx.fillRect(460,120,25,80);
    ctx.fillRect(485,165,20,35);
    ctx.fillRect(505,160,22,40);

    ctx.fillStyle = "rgba(75, 50, 14, 0.2)";
    ctx.fillRect(0,200+(200-(160+40)),22,40);
    ctx.fillRect(20,200+(200-(164+36)),18,36);
    ctx.fillRect(40,200+(200-(161+39)),25,39);
    ctx.fillRect(65,200+(200-(130+70)),20,70);
    ctx.fillRect(85,200+(200-(166+34)),17,34);
    ctx.fillRect(102,200+(200-(172+28)),23,28);
    ctx.fillRect(125,200+(200-(170+30)),19,30);
    ctx.fillRect(144,200+(200-(175+25)),21,25);
    ctx.fillRect(165,200+(200-(173+27)),20,27);
    ctx.fillRect(185,200+(200-(145+55)),24,55);
    ctx.fillRect(209,200+(200-(181+19)),18,19);
    ctx.fillRect(227,200+(200-(184+16)),20,16);
    ctx.fillRect(247,200+(200-(182+18)),22,18);
    ctx.fillRect(269,200+(200-(185+15)),20,15);
    ctx.fillRect(289,200+(200-(183+17)),18,17);
    ctx.fillRect(307,200+(200-(178+22)),25,22);
    ctx.fillRect(332,200+(200-(176+24)),20,24);
    ctx.fillRect(352,200+(200-(174+26)),19,26);
    ctx.fillRect(372,200+(200-(140+60)),24,60);
    ctx.fillRect(396,200+(200-(171+29)),20,29);
    ctx.fillRect(416,200+(200-(168+32)),23,32);
    ctx.fillRect(439,200+(200-(170+30)),21,30);
    ctx.fillRect(460,200+(200-(120+80)),25,80);
    ctx.fillRect(485,200+(200-(165+35)),20,35);
    ctx.fillRect(505,200+(200-(160+40)),22,40);

}

drawStars();
document.getElementById("star").addEventListener("click", drawStars);

