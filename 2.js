let value = prompt("Введите значение");
value = +value;

if (isNaN(value)) {
    console.log("Упс, это не число" + isNaN(value));
} else if (value % 2 === 0) {
    console.log("Введено четное число " + value);
} else if (value !== value) {
    console.log("Упс, кажется, вы ошиблись");
} else {
    console.log("Введено нечетное число " + value);
}