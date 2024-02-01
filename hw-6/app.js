const howManyYears = parseInt(prompt('Якого ти року народження?')); //how many

if (howManyYears) {
    const currentYear = 2024;
    alert('У цьому році тобі буде, або вже є ' + (currentYear - howManyYears) + ' років');
} else {
    alert('Шкода, що Ви не захотіли ввести свій рік народження..')
}

const whereFrom = prompt('Звідки ти?'); //where

const whereFromCapital = {
    'Київ': 'Україна',
    'Вашингтон': 'США',
    'Лондон': 'Велика Британія'
};

let isСapital = whereFrom === 'Київ' || whereFrom === 'Вашингтон' || whereFrom === 'Лондон';

let county = isСapital ? whereFromCapital[whereFrom] : '';

if (isСapital) {
    alert('Ти проживаєш у країні ' + county + ' в місті ' + whereFrom)
} else if (whereFrom){
    alert('Ти проживаєш у місті ' + whereFrom)
} else {
    alert('Шкода, що Ви не захотіли ввести своє місто..')
}

const favoriteSport = prompt('Який в тебе найулюбленеший вид спорту?'); //sport


const favoriteSprotMatch = {
    'Футбол': 'Круто! Хочеш стати як Шевченко?',
    'Баскетбол': 'Круто! Хочеш стати як Нікола Йокіч?',
    'Теніс': 'Круто! Хочеш стати як Карлос Алькарас?'
};

let sportMatch = favoriteSport === 'Футбол' || favoriteSport === 'Баскетбол' || favoriteSport === 'Теніс';

let sportMatchСoincided = sportMatch ? favoriteSprotMatch[favoriteSport] : '';

if (sportMatch) {
    alert(sportMatchСoincided)
} else if (favoriteSport){
    alert('Хороший вибір!')
} else {
    alert('Шкода, що Ви не захотіли ввести свій найулюбленеший вид спорту..')
}

