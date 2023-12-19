// Шаг 1: Присвоение значений переменным
var title = "Мой Проект";
var screens = "Простые, Сложные, Интерактивные";
var screenPrice = 1500;  // Любое число
var rollback = 20;  // Любое число от 1 до 100
var fullPrice = 50000;  // Любое число
var adaptive = true;

// Шаг 2: Использование методов и свойств
console.log("Тип данных переменной title:", typeof title);
console.log("Тип данных переменной fullPrice:", typeof fullPrice);
console.log("Тип данных переменной adaptive:", typeof adaptive);

console.log("Длина строки из переменной screens:", screens.length);

console.log(`Стоимость верстки экранов (${screenPrice}) рублей`);
console.log(`Стоимость разработки сайта (${fullPrice}) рублей`);

var screensArray = screens.toLowerCase().split(', ');
console.log("Массив экранов:", screensArray);

console.log("Процент отката посреднику за работу:", fullPrice * (rollback / 100));

// Шаг 3: Проверка
console.log("Все проверено и работает!");

// Шаг 4: Добавление второго урока в репозиторий
// Предполагается, что у вас уже есть локальный репозиторий и связь с удаленным репозиторием

// Создаем и переходим в новую ветку
// git checkout -b lesson02 (в терминале)
// git add script.js (в терминале)
// git commit -m "Добавлены переменные и выполнены задачи" (в терминале)
// git push origin lesson02 (в терминале)
