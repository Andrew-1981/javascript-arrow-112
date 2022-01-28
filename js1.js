// // ФУНКЦИИ

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

function wq() {
  console.log('Andrew')
}

console.log('start')

setTimeout(wq, 3000)

