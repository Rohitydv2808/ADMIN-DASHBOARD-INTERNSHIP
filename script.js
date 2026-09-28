let canvas = document.getElementById("salesChart");

let ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 280;

let values = [80, 150, 100, 190, 130, 220, 170];

ctx.beginPath();

ctx.moveTo(20, 230);

values.forEach((value, index) => {

    let x = 20 + index * 85;
    let y = 230 - value;

    ctx.lineTo(x, y);
});

ctx.strokeStyle = "#2563eb";
ctx.lineWidth = 4;

ctx.stroke();

ctx.font = "14px Arial";

ctx.fillStyle = "#333";

ctx.fillText(
    "Jan       Feb       Mar       Apr       May       Jun       Jul",
    20,
    260
);