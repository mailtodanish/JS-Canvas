var [isDrawing, lastX, lastY, hue] = [false, 0, 0, 0];
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
console.log(ctx);
canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight / 2;
ctx.strokeStyle = "red";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 50;

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  [lastX, lastY] = [e.offsetX, e.offsetY];
  isDrawing = true;
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

function draw(e) {
  if (!isDrawing) return true;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  [lastX, lastY] = [e.offsetX, e.offsetY];
  ctx.stroke();
  hue++;
  if (hue > 360) hue = 0;
}
