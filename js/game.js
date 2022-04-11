const width = 400;
const heigh= 400;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(heigh)
};

let $map = document.getElementById("Map");
let $distance = document.getElementById("distance");
let clicks = 0;
$map.addEventListener("click", function(e){
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`

    if (distance < 20){
        alert("Haz encontrado el tesoro en" + " " + clicks + " " + "Clicks");
        location.reload();
    }

})
