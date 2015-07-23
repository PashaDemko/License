
function randomchange(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}
console.log(randomchange(1, 20));