// Task 1.
// Виведіть у консоль ваше ім'я. Нагадую - в ході роботи, консоль відкрита завжди!
console.log("Bohdan");

// Task 2.
// Виведіть у консоль номер місяця в якому ви народилися. Вивчіть чим відрізняється вивід числа і рядка.
console.log(4);
// Task 3.
// Виведіть у консоль рядок: 'Ласкаво '+'просимо '+' на курс'
console.log("Ласкаво " + "просимо " + " на курс");
// Task 4.
// За допомогою alert виведіть число 2019. Після спрацювання коду - закоментуйте його, щоб не заважав подальшої розробки
// alert(2019);
// Task 5.
// За допомогою console.log виведіть результат операції 2019 - 200. Перевірте результат в консолі.
console.log(2019 - 200);

// Task 6.
// На сторінці створено div#six. За допомогою document.getElementById запишіть в div#six текст 'Hello World'.
const six = document.getElementById("six");
six.textContent = "Hello World";
// Task 7.
// На сторінці створено div#seven. За допомогою document.getElementById запишіть в даний елемент результат множення 12 на 12. Множення можна зробити за допомогою знака зірочки (shift + 8).
const seven = document.getElementById("seven");
seven.textContent = 12 * 12;
// Task 8.
// На сторінці створено div.out-8. За допомогою document.querySelector запишіть в даний елемент текст "task-8".
const out8 = document.querySelector(".out-8");
out8.textContent = "task-8";
// Task 9.
// На сторінці створена верстка:
// <h2>Hello <span class="out-8">everyone</span></h2>
// Замініть за допомогою querySelector текст всередині span на 'world'
const out9 = document.querySelector(".out-9");
out9.textContent = "world";
// ⚠️ точно виводимо результат в елемент з селектором .out-8❓
// оскільки document.querySelector() шукає до першого співпадіння резулатат буде інший

// Task 10.
// На сторінці створено div.out-10. За допомогою innerHTML запишіть всередину нього наступний рядок  '<h2>Hi</h2>'.

const out10 = document.querySelector(".out-10");
out10.innerHTML = "<h2>Hi</h2>";

// Task 11.
// На сторінці створено div.out-11. Запишіть всередину нього рядок '123'. Для запису використовуйте innerHTML. Другою операцією - допишіть в div.out-11 рядок '456'. Для дозапису застосуйте +=.

const out11 = document.querySelector(".out-11");
out11.innerHTML = "123";
out11.innerHTML += "456";

// Task 12.
//  На сторінці створено div.out-12. Отримайте його в змінну a. За допомогою innerHTML запишіть всередину змінної a число 3.1415. Вивчіть як в JS пишуться дробові значення - через крапку або через кому!

const a = document.querySelector(".out-12");
a.innerHTML = 3.1415;

// Task 13.
// На сторінці створено div.out-13. Отримайте його в змінну out13. За допомогою innerHTML запишіть в нього рядок: '<img src="https://itgid.info/img/js20/js20_unit_01.png" alt="js">'
// Зверніть увагу. Вам доведеться вставити рядок, який вже містить лапки. Головне щоб лапки чергувалися.
// Тому при вставці оберніть даний рядок одинарними лапками. Якщо все зроблено вірно - то на сторінці з'явиться картинка.

const out13 = document.querySelector(".out-13");
out13.innerHTML =
  '<img src="https://itgid.info/img/js20/js20_unit_01.png" alt="js">';

// Task 14.
// Створіть дві змінні x1 = 6, x2 = 3. В div.out-14 виведіть результат множення x1 на x2.
const x1 = 6;
const x2 = 3;
const out14 = document.querySelector(".out-14");
out14.innerHTML = x1 * x2;

// Task 15.
// Створіть дві змінні y1 = 6, y2 = 3. В div.out-15 виведіть результат ділення y1 на y2.
const y1 = 6;
const y2 = 3;
const out15 = document.querySelector(".out-15");
out15.innerHTML = y1 / y2;
