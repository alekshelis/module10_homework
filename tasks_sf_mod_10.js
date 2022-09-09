//создайте программу перевода долларов в рубли, используя prompt alert 
const dollars = prompt('How many dollars du you have?')

let rubles = dollars * 65
alert(`You have ${rubles} rubles`)

/*Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса 
(арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.
*/

const value = prompt('Введите значение')
const number = +value

if (typeof number !== 'number' || isNaN(number)) {
    console.log('Упс, кажется вы ошиблись')
} 

else if (number % 2 === 0) {
    console.log('четное')
} else {
    console.log('нечетное')
}

/* Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».
Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».
*/

const x = 5

switch(typeof x) {
    case 'number':
        console.log(`${x} число`)
    break
    case 'string':
        console.log(`${x} строка`)
    break
    case 'boolean':
        console.log(`${x} булевое значение`)
    break    
    default:
        console.log(`Тип ${x} не определен`)
}


// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".


const str = 'Hello'
console.log(str.split('').reverse().join(''))

// второй вариант

const strReg = (str) => {
    return str.split('').reverse().join('')
}
console.log(strReg('Hello'))

// третий вариант

const strRev = str => str.split('').reverse().join('')
console.log(strRev('Hello'))


// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.


const randomNumber = getRandomNumber(0, 100)

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

console.log(randomNumber)


// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.


const myArray = [1, 2, 3, 4, 5, 6]

console.log(myArray.length)

myArray.forEach(el => console.log(el))

// c индексами 

const myArray1 = [1, 2, 3, 4, 5, 6]

myArray.forEach((el, index) => {
    console.log(el, index)
})

// for

const myArray2 = [1, 2, 3, 4, 5, 6]

for(let i = 0; i < myArray2.length; i++) {
    console.log(myArray2[i])
}


/*Дан массив. Проверить, одинаковые ли элементы 
в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
*/


const unicArray = (array) => {
    let unicValue = true
    for (let i = 0; i < array.length; i++) {
        if(array[0] !== array[i]) {
            unicValue = false
        } 
    }
    return unicValue
}
unicArray([undefined, undefined, undefined])

// второй вариант

const unicArray1 = [1, 1, 1, 1, 1,]

console.log(new Set(unicArray1).size === 1 ? true : false)


/* Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
*/


const someArray = [0, 0, 5, 7, 9, 4, 6, 8, null]

const oddEven = (someArray) => {
    let even = 0
    let odd = 0
    let zero = 0
    someArray.forEach(el => {
      if (typeof el === 'number') {
        if (el === 0) {
            zero += 1
        } else if (el % 2 === 0) {
            even += 1
        } else {
            odd += 1
        }
    } 
    })
    console.log(`Кол-во четных: ${even}`)
    console.log(`Кол-во нечетных: ${odd}`)
    console.log(`Кол-во нолей: ${zero}`)
}
oddEven(someArray)
 

/*Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.
*/


let newMap = new Map([
    ["apple", "green"],

    ["strawberry", "red"],

    ["blueberry", "blue"]
])

for (keys of newMap.keys()) {
    console.log(`Ключ - ${keys}, значение - ${newMap.get(keys)}`)
}


