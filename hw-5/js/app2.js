// Известны два расстояния. Одно в километрах, другое - в футах (1 фут = 0,305м). Какое расстояние меньше?

let km = parseFloat(prompt('distance in kilometers'));
let feet = parseFloat(prompt('distance in feet'));

const conditionForDistance = km !== null && feet !== null

if (conditionForDistance) {
    let kmFromFeet = feet / 3280.84;

    if (km>kmFromFeet) {
        alert('km > feet')
    } else if (km<kmFromFeet) {
        alert('km < feet')
    } else {
        alert('km = feet')
    }
}