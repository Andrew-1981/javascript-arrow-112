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

// свойство массива map

const zc = [1, 2, 3, 4, 5]

const cx = zc.map(d => d * 5)
console.log(zc)
console.log(cx)

// ДЕСТРУКТОРИЗАЦИЯ 
// присвоение переменным свойств объекта

const kn = {
  f: 'fdf',
  s: 343
}
const {f, s} = kn
console.log(f, s)

// присвоение переменным элементов массива

const cdf = Array('dfds', 'flie', 'dfs', 'fkji', 'fsie')

const [a, b, c, d, e] = cdf
console.log(a, b, c, d, e)

// присвоение параметрам функции свойств объекта

const gf = ({f, s}) => console.log(f, s)
gf(kn)

// УСЛОВНЫЙ ОПЕРАТОР SWITCH

const dec = 12

switch(dec){
  case 2: 
    console.log('fev')
  break
  case 12:
    console.log('dec')
  break
  default:
    console.log('ffffff')  
}

// ТЕРНАРНЫЙ ОПЕРАТОР
// можно оперировать только выражениями, а не инструкциями, можно вызывать функции т.к. это выражения
dec
  ? console.log('истинно')
  : console.log('ложно')

const fh = 5, jj = 0

fh && jj
  ? fi()
  : console.log('dd')

const fas = 4

console.log(fas >= 0 ? -fas : fas)

