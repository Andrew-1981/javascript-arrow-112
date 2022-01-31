// // ФУНКЦИИ

'use strict'

// console.log(window)
// console.log(window.innerHeight)
// console.log(window.innerWidth)
// console.log(screen.height)
// console.log(screen.width)

// // простая функция

// let a = 5,
//   b = 6

// function sum(d, e) {
//   const c = d + e
//   console.log(c)
// }

// sum(a, b)

// // функция- это объект, который имеет свои свойства

// function great(a, b, c, d) {
//   const f = a + b + c + d
// }

// great()

// console.dir(great)
// console.log(great)

// function dpr() {
//   return window.devicePixelRatio
// }
// console.log(dpr())

// nord(3, 5);

// function nord(aa = 7, bb = 8, cc = 9) {
//   console.log(aa, bb, cc)
// }

// // не рекомендуется мутировать объекты внутри функции, аргумент объект передает ссылку в качестве параметра

// const green = {
//   abc: 100
// }

// function def(red) {
//   red.abc += 5
// }

// def(green)

// console.log(green.abc)

// // лучше использовать копирование объекта

// const ch = {
//   ab: 1999
// }

// function cd(pr) {
//   const fff = Object.assign({}, pr)
//   fff.ab += 1
//   return fff
// }

// // если нет команды return функция по умолчанию возвращает undefined

// const dd = cd(ch)

// console.log(ch.ab)
// console.log(dd.ab)



// // КОЛБЭК ФУНКЦИИ

// // не работает хзчт
// function ik() {
//   const d = 10
//   console.log(d)
// }

// function ww(tt) {
//   function tt() {}
// }

// ww(ik)

// // Пример колбэк функции

// function wq() {
//   console.log('Andrew')
// }

// console.log('start')

// setTimeout(wq, 3000)

// // ПРАВИЛА РАБОТЫ С ФУНКЦИЯМИ

// // 1 Называть функцию глаголом, согласно выполняемых ею действий
// // 2 Одна функция должна выполнять одно действие
// // 3 Функция должна быть чистой, т.е. не изменять свойства внешних переменных, а работать только с внутренними

// // ОБЛАСТЬ ВИДИМОСТИ (границы действия переменной)

// //глобальную переменную sw можно вызвать и использовать из функции, переменную aq можно использовать только внутри функции т.к. она там объявлена, глобальная aq и локальная aq- разные переменные

// // пример

// let aq = 3,
//   sw = 4

// function cce() {
//   let aq = 0
//   sw = 8
//   console.log(aq)
// }
// cce()
// console.log(aq)
// console.log(sw)

// // пример 2

// // функцию fe можно вызвать только внутри функции ie

// console.log(ks) т.е мы не можем обратиться к переменной ks т.к. она вложена на локальный уровень ниже и уничтожается как только функция fe была выполнена, переменной s было присвоено значение в локальной области и оно сохранилось в глобальной т.к. переменная не была объявлена в локальной. Также видимость сохраняется и в блоках ветвления и циклах и т.п., внутри фигурных скобок.

let r = 7
let s

function ie() {

  let io = 5

  function fe() {

    s = 5
    let ks = 8
    console.log(fu())
    console.log(r)
    console.log(io)
  }
  fe()
}
ie()
console.log(s)

// не рекомендуется присваивать в локальных областях автоматические глобольные переменные (без объявления они автоматически становятся глобальными):

function fu() {
  // a = 5
  return 'на связи'
}
// fu() 
// console.log(a)

// правила работы с переменными
// 1 все переменные объявлять перед их использованием
// 2 использовать const везде где это возможно
// 3 не изменять из локальных областей глобальных переменных

// для запрещения использования необъявленных переменных и т.п. используется объявление строгого режима в самом начале программы: 'use strict', или если нужен строгий режим внутри локальной области то 'use strict' ставится сразу после открывающей фигурной скобки.

// ЛОЖНЫЕ ЗНАЧЕНИЯ

// оператор Boolean выдаёт значения операндов false или true
// в данных примерах везде false
console.log(Boolean(''))
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(di()))

function di(){return 5 + 5}

// оператор !не всегда возвращает булево значение, операторы &и и ||или возвращают значение одного из операндов

// оператор !не возвращает обратное булево значение двойной оператор !!нене позволяет конвертировать выражение в булево значение

console.log(!0)
console.log(!!0)

// оператор && при проверке двух операндов в случае если булево значениие первого операнда false просто возвращает его значение не проверяя второй операнд, если первый true в любом случае возвращается значение второго оператора

console.log(0 && 4)
console.log(2 && false)
console.log(1 && 4)

// оператор ||или ведет себя наоборот т.е. если первый операнд истина он сразу возвращает его значение если ложь то значение второго операнда

console.log(1 || 4)
console.log(0 || false)
console.log(0 || 4)

// трюк вместо if использовать &&

let c
c && console.log('выполнено')
c || console.log('невыполнено')

// оператор && возвращает значение первого ложного операнда, ||- первого истинного

let ce = 5, cd = 0, cs = 98, cl =3

console.log(ce && cd && cs && cl)
console.log(ce || cd || cs || cl)

// оператор ...
// при его использовании в копии можно независимо от оригинала изменять только основные свойства, вложенные будут изменяться вместе с оригиналом, также можно добавлять копии свойства, если эти свойства уже есть в оригинале то они будут перезаписаны, но если ...объект записать после добавленных свойств и они в нём уже будут то они перепишутся как в оригинале. С его помощью также можно объединять несколько объектов в одном, одинаковые свойства также будут перезаписываться в зависимости от порядка располождения

const aws = {
  color: 'red',
  size: 35,
  punkt: {
    netto: 55,
    brutto: 100
  }
}

const aqs = {
  ...aws,
  speed: 44
}

aqs.punkt.brutto = 999
aqs.color = 382

console.log(aws)
console.log(aqs)

console.log(aws)
console.log(aqs)

console.table(aws)
console.table(aqs)

const aws1 = {
  color: 'red',
  size: 777777,
  punkt: {
    netto: 999999,
    brutto: 100
  }
}

const aws2 = {
  color: 'red',
  size: 35,
  punkt: {
    netto: 55,
    brutto: 100
  }
}

const aes = {
  ...aws2,
  ...aws1
}

console.table(aes)

// интерполяция 

function iu(){
  return 'Andrew'
}
const co = 'My name '

console.log(`${co}${iu()}`)

// стрелочная функция

const jk = () => {console.log('стрелка')}

setTimeout(jk, 3000)

setTimeout(() => {console.log('стрелка ')}, 3000)

console.log(Date())

// СОЗДАНИЕ ОБЪЕКТА С ПОМОЩЬЮ СТРЕЛОЧНОЙ ФУНКЦИИ
// круглые скобки без return возвращают значение, параметр функции ведет себя как переменная и мы добавляем свойство с помощью оператора запятая

const ow = {
  color: 'blue',
  size: 67
}

const ou = (one, two = Date()) => ({
  ...one,
  two,
})

const qo = ou(ow)
console.log(qo)

let f = 9, i = 54, ce = 43
const jwq = {
  f,
  i,
  ce,
}

console.table(jwq)
