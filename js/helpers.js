let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY + diffY));
}

let getDistanceHint = distance =>{
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