"use strict"

let productName = document.getElementsByClassName("product-name")
let productImage = document.getElementsByClassName("product-image")
let productPrice = document.getElementsByClassName("product-price")

for (let name of productName) {
  console.log(name)
}

let clickButton = document.querySelectorAll(".add_to_cart")

let myFunc = function () {
  let name = this.parentNode.parentNode.querySelectorAll(".product-name")
  // попробуйте с помощью js поменять название товара и цену товара
  // name[0].innerText = "test"
  let price = this.parentNode.parentNode.querySelectorAll(".product-price")
  let image =
    this.parentNode.parentNode.parentNode.querySelectorAll(".product-image")
  console.log(name[0].innerText)
  console.log(price[0].innerText)
  console.log(image[0].src)
}

for (let i = 0; i < clickButton.length; i++) {
  clickButton[i].addEventListener("click", myFunc, false)
}

// let productName = document.getElementsByClassName("product-name")
// console.log(productName[0].innerHTML)
// let productImage = document.getElementsByClassName("product-image")
// console.log(productImage[0])
// let productPrice = document.getElementsByClassName("product-price")
// console.log(productPrice[0])
// productPrice[0].remove()

// let arr = ["apple", "orange", "pear"]
// arr.forEach(function (item, i, arr) {
//   alert(i + ": " + item + " (массив:" + arr + ")")
// })

////////////////////////

// var arr = [1, -1, 2, -2, 3]

// var positiveArr = arr.filter(function (number) {
//   return number > 0
// })

// alert(positiveArr) // 1,2,3
//////////////////////////////////////////
// var names = ["HTML", "CSS", "JavaScript"]

// var nameLengths = names.map(function (name) {
//   return name.length
// })

// // получили массив с длинами
// alert(nameLengths) // 4,3,10

// var arr = [1, -1, 2, -2, 3]

// function isPositive(number) {
//   return number > 0
// }

// alert(arr.every(isPositive)) // false, не все положительные
// alert(arr.some(isPositive)) // true, есть хоть одно положительное

///////////////

// var arr = [1, 2, 3, 4, 5]

// // для каждого элемента массива запустить функцию,
// // промежуточный результат передавать первым аргументом далее
// var result = arr.reduce(function (sum, current) {
//   return sum + current
// }, 0)

// alert(result) // 15

// let rad = prompt("Введите радиус окружности")
// let length = rad * 3.14
// alert(length)окружности

// let num1 = prompt("Введите первое число")
// let num2 = prompt("Введите второе число")
// if (num1 < num2) {
//   alert(num1)
// } else {
//   alert(num2)
// }
