
function randomchange(min, max){
    min = min ||1;
    max = max || 100;
    return Math.floor(Math.random() * (max-min) + min);
}
console.log(randomchange(1, 20));