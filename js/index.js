/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

//  let answer = prompt("Яка офіційна назва JavaScript?")
//  console.log (answer)

//  function cheakAnswer(string) {
//     if (string === "ECMAScript") {
//         alert("Вірно!")
//     } else {
//         alert("Не знаєте? ECMAScript!")
//     }
//  }

// cheakAnswer(answer)

/**
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 */
// const userNumber = prompt("Введіть кількість хвилин")

// const hours = String(Math.floor(userNumber / 60)).padStart(2, 0);
// console.log(hours)
// const minutes = String(userNumber % 60).padStart(2, 0);
// console.log(minutes)
// console.log(`${hours}:${minutes}`)

/**
*? Напишіть код, який питає
*? логін за допомогою prompt та логує результат
*? у консоль браузера
    
*? Якщо відвідувач вводить "Admin",
*? то prompt запитує пароль.
*? Якщо нічого не ввели або натиснуто клавішу Esc
*? вивести рядок "Canceled"
*? В іншому випадку вивести рядок "Я вас не знаю"
    
*? Пароль перевірять так:
*? Якщо введено пароль "Password",
*? то вивести рядок "Вітаю"
*? інакше виводить рядок "Невірний пароль!"
 */

// const userLogin = prompt("Enter login!");
// if (userLogin === "Admin") {
//   const userPassword = prompt("Enter password!");
//   if (userPassword === "Password") {
//     alert("Вітаю");
//   } else {
//     alert("Невірний пароль!");
//   }
//   // } else if (userLogin === "" || userLogin === null) {
// } else if (!userLogin) {
//   alert("Canceled");
// } else {
//   alert("Я вас не знаю");
// }


/**
 *? Напишіть цикл, який виводить у консоль
 *? всі непарні числа  від max до min  за спаданням
 */
// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }


/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.*/

// let userNumber = prompt("Enter number");
// let total = 0;
// while (userNumber !== null) {
//   total += Number(userNumber);
  
//   userNumber = prompt("Enter number");


// }

// alert(`Загальна сума введених чисел дорівнює ${total}.`);

/**
 *? У змінній min лежить число від 0 до 59.
 *? Визначте, в яку чверть години потрапляє
 *? це число (у першу, другу, третю чи четверту).
 */

//  let min = 59;
// if (min >=0 && min <=15) {
//   console.log("Перша чверть");
// } else if (min >=16 && min <=30) {
//   console.log("Друга чверть");
// } else if (min >=31 && min <=45) {
//   console.log("Третя чверть");
// } else {
//   console.log("Четверта чверть");
// }

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */
const user = {
  name: "John",
  age: 20,
  hobby: "tennis",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
console.log(user);
const keys = Object.keys(user)
console.log(keys);

for (const key of keys)
{
  console.log(`${key}:${user[key]}`);
}

