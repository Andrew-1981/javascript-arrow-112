'use strict'

// МАССИВЫ
// способы создания

const oe = [1, 2, 3, 4, 5]
console.log(oe)

const er = new Array(1, 2, 3, 4, 5)
console.log(er)

// размер массива можно измекнять, изменив его свойство length (не рекомендуется)

er.length = 8
console.log(er)

// обращение к элементам

console.log(oe[2])

// изменение и добавление элементов

oe[2] = 'fjdkjd'
oe[5] = 'ffffffffff'
console.log(oe)

const sdf = {
  dff: 'kjlj'
} 

// некоторые методы массивов

// добавление крайнего элемента

oe.push('sdfjklsdj')
console.log(oe)

// удаление крайнего элемента, метод pop не только удаляет но и возвращает значение удалённого элемента не явно

oe.pop()
console.log(oe)

const is = oe.pop()
console.log(is)

let fjs = 5
console.log(fjs)
fjs = console.log(fjs)
console.log(fjs)

function fi() {
  5 + 5
}

fjs = 3
console.log(fjs)
fjs = fi()
console.log(fjs)

// элемент unshift добавляет элемент в начало массива, остальные элементы сдвигаются вправо

const oiu = [
  1, 2, 3, 4, 5
]
console.log(oiu)
console.log(oiu[0])

oiu.unshift('fjjjk')
console.log(oiu)

// метод shift удаляет первый элемент и возвращает его значение

const asw = oiu.shift()
console.log(oiu)
console.log(asw)

// метод forEach не изменяет оригинал, перебирает все элементы массива и производит определенные действия над ними

oiu.forEach(el => console.log(el * 10))
