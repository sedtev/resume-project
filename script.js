let userAge = 20;
if (userAge >= 18) {
    console.log("приятного гунинга. мисье полнолетний");
} else {
    console.log("hell no");
}

for (let i = 1; i <= 5; i = i + 1) {
    console.log(`Забиваю гвоздь номер ${1}`);
}
//youre prettier then that//

let todoList = ["dota", "rofling po ds", "yayko", "essen", "schlafen"];

for (let i = 0; i < todoList.length; i = i +1) {
    let currentTask = todoList[i];
    if (currentTask === "dota") {
        console.log(`!!!ВНИМАНИЕ ВНИМАНИЕ: ${currentTask}, СПАСИБО ЗА ВНИМАНИЕ`);
    } else {
        console.log(`ВООБЩЕ ВСЬОРАВНО: ${currentTask}`);
    }

}


function calculateAge (actualYear, yearOfBirth) {
    const age = (actualYear - yearOfBirth);
    return age;

}
let myAge = calculateAge(2025, 1992);
let myaAge = calculateAge(2025, 1995);
let myeAge = calculateAge(2025, 1999);
let myitAge = calculateAge(2025, 1998);
let myuAge = calculateAge(2025, 1990);
let myyAge = calculateAge(2025, 1997);
console.log(myAge, myyAge);

let friendBirth = 2005;
function calculateAge(actualYear, friendBirth) {
    const friendAge = (actualYear - friendBirth);
    return friendAge;
}


const infoContainer = document.querySelector('.info-container');
if (infoContainer) {
    const subtitle = document.createElement('p');
    subtitle.textContent = "Junior Front-End Developer";
    subtitle.style.fontStyle = "italic"; // "italic" лучше писать с маленькой буквы
    subtitle.style.marginTop = "5px";    // ИСПРАВЛЕНО

    infoContainer.append(subtitle);
} else {
    console.error("Контейнер .info-container не найден!"); // Сообщение об ошибке в консоль
}


const mainTitle = document.querySelector('h1');
if (mainTitle) {
    mainTitle.style.color = '#0056b3';
}

const themeButtonc