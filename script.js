"use strict"

let productName = document.getElementsByClassName("product-name")
let productImage = document.getElementsByClassName("product-image")
let productPrice = document.getElementsByClassName("product-price")

// for (let name of productName) {
//   console.log(name)
// }

let cartIcon = document.querySelectorAll(".cart .icon")
for (let i = 0; i < cartIcon.length; i++) {
  cartIcon[i].addEventListener(
    "click",
    function () {
      let dropdownCart = document.querySelectorAll(".dropdown-cart")
      dropdownCart[0].classList.toggle("d-none")
    },
    false
  )
}

let clickButton = document.querySelectorAll(".add_to_cart")

let myFunc = function (e) {
  e.preventDefault()
  let name = this.parentNode.parentNode.querySelectorAll(".product-name")
  let price = this.parentNode.parentNode.querySelectorAll(".product-price")
  let image =
    this.parentNode.parentNode.parentNode.querySelectorAll(".product-image")
  // console.log(name[0].innerText)
  // console.log(price[0].innerHTML)
  // console.log(image[0].src)
  // попробуйте с помощью js поменять название товара и цену товара
  // name[0].innerText = "test"

  let cartLi = document.createElement("div")
  cartLi.classList.add("check-out")
  cartLi.innerHTML =
    '<div class="img-cart">\
  <a href="#"\
    ><img src="' +
    image[0].src +
    '" alt="img"\
  /></a>\
</div>\
<div class="para-cart">\
  <p><a href="#">' +
    name[0].innerText +
    "</a></p>\
  " +
    price[0].innerHTML +
    '\
  <br />\
  <a href="#"\
    ><i class="fa fa-trash-o" aria-hidden="true"></i\
  ></a>\
</div>'
  // console.log(cartLi)
  document.querySelectorAll(".dropdown-cart .cart-2")[0].append(cartLi)
  alert("Продукт добавлен")
  //// Удаление товара
  deleteProd()
  // Сумма цен всех продуктов
  totalPrice()
  totalProducts()
}

for (let i = 0; i < clickButton.length; i++) {
  clickButton[i].addEventListener("click", myFunc, false)
}

function deleteProd() {
  let cartRemove = document.querySelectorAll(".cart-2 .fa-trash-o")
  let deleteFunc = function (e) {
    e.preventDefault()
    this.parentNode.parentNode.parentNode.remove()
    totalPrice()
    totalProducts()
  }
  for (let i = 0; i < cartRemove.length; i++) {
    cartRemove[i].addEventListener("click", deleteFunc, false)
  }
}

function totalPrice() {
  /// Summary price
  let priceCount = document.querySelectorAll(".cart-2 .oprice")
  let priceCountPlacement = document.querySelectorAll(".cart .price-count")[0]
  let priceCountPlacementCart = document.querySelectorAll(
    ".total .price-count"
  )[0]
  let totalPrice = 0
  for (let i = 0; i < priceCount.length; i++) {
    totalPrice = totalPrice + +priceCount[i].innerHTML
    // console.log(priceCount[i].innerHTML)
    // console.log(totalPrice)
  }
  priceCountPlacement.innerHTML = "$" + totalPrice
  priceCountPlacementCart.innerHTML = "$" + totalPrice
  // console.log(priceCount[0].innerHTML)
  // console.log(priceCount)
}

function totalProducts() {
  let products = document.querySelectorAll(".dropdown-cart .check-out")
  let productsCounter = products.length
  let productsCounterPlacement = document.querySelectorAll(
    ".cart .products-count"
  )[0]
  productsCounterPlacement.innerHTML = productsCounter
}

///lsn 41
// const tabs = {
//   tabsList: ["Популярные", "Новинки", "Распродажа"],
// }

// let createUl = document.createElement("ul")

// tabs.tabsList.forEach((item, i) => {
//   createUl.innerHTML += `<li> ${item} </li>`
// })

// let insertList = document.querySelectorAll(".insert-list")
// insertList[0].innerHTML += createUl.outerHTML

/////45
// function hello(name) {
//   console.log(this)
//   console.log(this.name)
// }

// const theObj = {
//   name: "Tanya",
// }

// hello.call(theObj)

class productCard {
  constructor(img, classColor, status, name, price, oldPrice, insertTo) {
    this.img = img
    this.classColor = classColor
    this.status = status
    this.name = name
    this.price = price
    this.oldPrice = oldPrice
    this.insertTo = document.querySelector("#product .product-list")
    this.currencyPrice = 85
    this.price = this.convertToUSD(price)
    this.oldPrice = this.convertToUSD(oldPrice) + ".00"
  }

  convertToUSD(price) {
    const result = price / this.currencyPrice
    return result.toFixed(2)
  }

  render() {
    const productCard = document.createElement("div")
    productCard.classList.add("product")
    productCard.innerHTML = `
    <div class="img">
      <img
        class="product-image"
        src=${this.img}
        alt="product-image"
      />
      <span class="img-info ${this.classColor}"> ${this.status} </span>
      <span class="quick-view">
        <i class="fa-solid fa-arrows-up-down-left-right"></i>
        Quick view
      </span>
    </div>

    <div class="product-body">
      <p class="product-name">${this.name}</p>
      <p class="product-reviews">
        <span class="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </span>
        <span class="review-counter">6 Review(s)</span>
      </p>
      <p class="product-price">
        <span class="bold price"
          ><span class="currency">$</span>
          <span class="oprice">${this.price}</span>
          <span class="price-decimal">.</span>
          <span class="price-fractions">00</span>
        </span>
        <span class="crossed">${this.oldPrice}</span>
      </p>
      <div class="product-icons">
        <span class="product-icon add_to_cart">
          <i class="fa-solid fa-bag-shopping"></i>
        </span>
        <span class="product-icon">
          <i class="fa-solid fa-scale-balanced"></i>
        </span>
        <span class="product-icon">
          <i class="fa-solid fa-heart"></i>
        </span>
      </div>
    </div>`

    this.insertTo.append(productCard)
  }
}

new productCard(
  "/img/img63.jpg",
  "orange",
  "-50%",
  "Animal Print Sweatshirt",
  1100,
  2200
).render()
new productCard(
  "/img/img63.jpg",
  "green",
  "New",
  "Animal Print Sweatshirt 2",
  1230,
  2200
).render()
new productCard(
  "/img/img63.jpg",
  "green",
  "New",
  "Animal Print Sweatshirt 3",
  1230,
  2200
).render()
new productCard(
  "/img/img63.jpg",
  "green",
  "New",
  "Animal Print Sweatshirt 4",
  1230,
  2200
).render()
new productCard(
  "/img/img63.jpg",
  "green",
  "New",
  "Animal Print Sweatshirt 5",
  1230,
  2200
).render()

const inputSom = document.querySelector("#som")
const inputUSD = document.querySelector("#usd")
inputSom.addEventListener("input", () => {
  const request = new XMLHttpRequest()
  // request.open(method(GET / POST), url, asy, login, passw)
  request.open("GET", "currency.json")
  request.setRequestHeader("Content-type", "application/json; charset=UTF-8")
  request.send()

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request.response)
      // console.log(JSON.parse(request.response).currentCurrency.usd)
      const currencyStorage = JSON.parse(request.response)
      // console.log(inputSom.value / currencyStorage.currentCurrency.usd)
      inputUSD.value = (
        inputSom.value / currencyStorage.currentCurrency.usd
      ).toFixed(3)
    } else {
      inputUSD.value = "Что-то пошло не так"
    }
  })
})
inputUSD.addEventListener("input", () => {
  const request = new XMLHttpRequest()
  // request.open(method(GET / POST), url, asy, login, passw)
  request.open("GET", "currency.json")
  request.setRequestHeader("Content-type", "application/json; charset=UTF-8")
  request.send()

  request.addEventListener("load", () => {
    if (request.status === 200) {
      const currencyStorage = JSON.parse(request.response)
      inputSom.value = (
        inputUSD.value * currencyStorage.currentCurrency.usd
      ).toFixed(3)
    } else {
      inputSom.value = "Что-то пошло не так"
    }
  })
})

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json))

/////////////////////////////////hw24
// let hwObject = {
//   name: "Bektemir",
//   age: 25,
//   location: "Kyrgyzstan",
// }
// let hwArr = [0, 1, 2, 3, 4, 5]

// for (let key in hwObject) {
//   console.log("Ключ: " + key + " значение: " + hwObject[key])
// }

// hwArr.forEach(function (item, i, arr) {
//   console.log(i + ": " + item + " (массив:" + arr + ")")
// })

////////////////////hw25
// let user = prompt("Введите ваше имя и фамилию")

// alert(`Здравствуйте, ${user}`)

// let number1 = prompt("Введите первое число для сложения")

// let number2 = prompt("Введите второе число число для сложения")
// alert(`Результат = ${+number1 + +number2}`)

// let number3 = prompt("Введите первое число число для умножения")

// let number4 = prompt("Введите второе число число для умножения")
// alert(`Результат = ${+number3 * +number4}`)

///////////////hw26
// let operator = prompt("Введите оператор( +, -, *, /, % - взятие остатка )")

// let number1 = prompt("Введите первое число")

// let number2 = prompt("Введите второе число")
// // alert(`Результат = ${+number1 + +number2}`)
// if (operator == "+") {
//   alert(`Результат = ${+number1 + +number2}`)
// } else if (operator == "-") {
//   alert(`Результат = ${+number1 - +number2}`)
// } else if (operator == "*") {
//   alert(`Результат = ${+number1 * +number2}`)
// } else if (operator == "/") {
//   alert(`Результат = ${+number1 / +number2}`)
// } else if (operator == "%") {
//   alert(`Результат = ${+number1 % +number2}`)
// }

// let user = prompt("Введите имя пользователя")
// let pass = prompt("Введите пароль")

// if (user == "admin" && pass == "12345") {
//   alert(`Welcome`)
// } else if (user !== "admin") {
//   alert(`Имя пользователя неверно`)
// } else if (pass !== "12345") {
//   alert(`Пароль неверен`)
// } else {
//   alert("Проверьте правильность введенных данных ")
// }

//////////////////hw30
// let radius = prompt("Введите радиус окружности, чтобы найти ее длину")

// alert(`Длина окружности равна ${2 * Math.PI * radius}`)

// let number1 = prompt("Введите первое число")

// let number2 = prompt("Введите второе число")

// // console.log(+number1, +number2)
// // console.log(+number1 < +number2)

// function findLowerNumber(number1, number2) {
//   if (+number1 < +number2) {
//     alert(`Меньшее число ${number1}`)
//   } else if (number1 > number2) {
//     alert(`Меньшее число ${number2}`)
//   }
//   return
// }
// findLowerNumber(number1, number2)
//////////////////hw31

// let numberToStep = Number(prompt("Введите число, чтобы возвести ее в степень"))
// console.log(numberToStep)
// alert(`Степень введенного числа равна  ${Math.pow(numberToStep, 2)}`)

// let radius = prompt("Введите радиус окружности, чтобы найти ее площадь")

// alert(`Площадь окружности равна ${Math.PI * (radius * radius)}`)

// let length = prompt("Введите длину прямоугольника, чтобы найти его площадь")
// let width = prompt("Введите ширину прямоугольника, чтобы найти его площадь")

// alert(`Площадь прямоугольника равна ${length * width}`)

/////////////////hw32
// let number1 = prompt("Введите первое число")

// let number2 = prompt("Введите второе число")

// alert(`Сумма чисел равна ${Math.round(+number1 + +number2)}`)

/////////hw33
// function loginCallback() {
//   var username = prompt("Введите логин:")
//   var password = prompt("Введите пароль:")

//   // Здесь вы можете выполнить проверку логина и пароля
//   if (username === "admin" && password === "password") {
//     alert("Вход выполнен успешно!")
//   } else {
//     alert("Неверный логин или пароль.")
//   }
// }
// loginCallback()

// function createHTMLElementCallback() {
//   var tag = prompt("Введите тег элемента:")
//   var text = prompt("Введите текст элемента:")
//   var color = prompt("Введите цвет текста элемента:")

//   var element = document.createElement(tag)
//   element.textContent = text
//   element.style.color = color
//   element.style.textAlign = "center"

//   document.body.prepend(element)
// }
// createHTMLElementCallback()

////////////////////////////////hw34
// let object = {
//   0: "first",
//   1: "second",
//   2: "third",
//   length: 3,
// }

// let arr = []

// for (let i = 0; i < object.length; i++) {
//   arr.push(object[i])
//   // console.log(object[i])
// }

// console.log(arr)
// const myArray = ["first", "second", "third"]

// const newArray1 = myArray[0].split("")
// const newArray2 = myArray[1].split("")
// const newArray3 = myArray[2].split("")

// console.log(newArray1)
// console.log(newArray2)
// console.log(newArray3)

////////////////////////////////hw36
// let salary = {
//   almaz: 1200,
//   adilet: 1300,
//   nursultan: 3000,
// }

// let bonus = {
//   almaz: 400,
//   adilet: 300,
//   nursultan: 200,
// }

// // Метод для суммирования зарплаты с бонусом
// function calculateTotalSalaryWithBonus() {
//   let result = {}

//   // Перебираем ключи в объекте salary
//   for (let key in salary) {
//     if (salary.hasOwnProperty(key) && bonus.hasOwnProperty(key)) {
//       // Суммируем зарплату и бонус для каждого ключа
//       result[key] = salary[key] + bonus[key]
//     }
//   }

//   return result
// }

// // Вызов метода и вывод результата
// let totalSalaryWithBonus = calculateTotalSalaryWithBonus()
// console.log(totalSalaryWithBonus)

////////////////////hw38
// function convertToDifferentSystems() {
//   var input = prompt("Введите число:")

//   if (isNaN(input)) {
//     console.log("Введено не число")
//     return
//   }

//   var decimal = parseInt(input)
//   var hexadecimal = decimal.toString(16)
//   var octal = decimal.toString(8)
//   var binary = decimal.toString(2)

//   console.log(hexadecimal, octal, binary)
// }

// // Вызов функции
// convertToDifferentSystems()

////hw42
// let button = document.querySelectorAll("menu button.btn")
// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener("click", (e) => {
//     e.target.remove()
//   })
// }
let buttonYellow = document.getElementById("btn-1")
let buttonBlue = document.getElementById("btn-2")
let buttonRed = document.getElementById("btn-3")
let buttonWhite = document.getElementById("btn-4")
buttonYellow.addEventListener("click", (e) => {
  document.body.style.background = "yellow"
})
buttonBlue.addEventListener("click", (e) => {
  document.body.style.background = "blue"
})
buttonRed.addEventListener("click", (e) => {
  document.body.style.background = "red"
})
buttonWhite.addEventListener("click", (e) => {
  document.body.style.background = "white"
})
