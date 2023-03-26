///// practice 34
// let object = {
//   0: 1,
//   1: 2,
//   2: 3,
//   length: 3,
// }

// let arr = []

// for (let i = 0; i < object.length; i++) {
//   arr.push(object[i])
//   console.log(object[i])
// }

// console.log(arr)

// HW 34
// const myArray = ["first", "second", "third"]

// const newArray1 = myArray[0].split("")
// const newArray2 = myArray[1].split("")
// const newArray3 = myArray[2].split("")

// console.log(newArray1)
// console.log(newArray2)
// console.log(newArray3)

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

///////////////////////35///////////////

let arr1 = {
  a: 1,
  b: 2,
}

function copyObj(copyingObj) {
  let newObject = {}

  let key
  for (key in copyingObj) {
    newObject[key] = copyingObj[key]
  }
  return newObject
}

let oldObj = {
  name: "Bektemir",
  lastName: "Abilov",
  hobby: {
    1: "Gaming",
    2: "Watching movies",
  },
}

let newObject = copyObj(oldObj)
newObject.name = "Test"
// console.log(oldObj)
// console.log(newObject)

let newAssign = Object.assign(arr1, oldObj)
newAssign.hobby[1] = "dancing"
// console.log(newAssign)
// console.log(oldObj)

const arr = ["apple", "pear", "orange"]
// const arr2 = arr.slice()
// arr2[2] = "berry"
// console.log(arr2)
// console.log(arr)

const arrTech = ["pc", "laptop", "smartphone"],
  melody = ["edm", "rock", "pop"],
  combo = [...arrTech, ...melody, "someTest"]
// console.log(combo)

/// OOP lesson 36

let str = "Text"
let strObj = new String(str)
// console.log(typeof str)
// console.log(typeof strObj)
let array = [1, 2, 3]
// console.log(array)

let car = {
  kuzov: "steel",
  kolesa: "4 wheels",
  modal: function () {
    console.log("hello")
  },
}

// let mb = {
//   marka: "mersedes",
//   year: "2021",
// }

let mb = Object.create(car)
mb = {
  marka: "mersedes",
  year: "2021",
}

// mb.__proto__ = car

Object.setPrototypeOf(mb, car)

console.log(mb.modal)
mb.modal()

//// lesson 38 Динамическая типизация
