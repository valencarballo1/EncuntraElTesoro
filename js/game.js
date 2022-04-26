const width = 400;
const heigh= 400;

let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

let Distancias = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY + diffY));
}

let DistanciasDelJuego = distance =>{
    if (distance < 30){
        return "Estas muy cerca!"
    } else if (distance < 40){
        return "Estas cerca"
    } else if (distance < 60){
        return "caliente"
    } else if (distance < 100){
        return "Calido"
    } else if (distance < 180){
        return "Frio"
    } else if (distance < 360){
        return "Muy frio"
    } else {
        return "Congelado"
    }
}

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(heigh)
};

let $map = document.getElementById("Map");
let $distance = document.getElementById("distance");
let clicks = 0;
$map.addEventListener("click", function(e){
    clicks++;
    let distance = Distancias(e, target);
    let distanceHint = DistanciasDelJuego(distance);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`

    if (distance < 20){
        alert("Haz encontrado el tesoro en" + " " + clicks + " " + "Clicks");
        location.reload();
    }

})
