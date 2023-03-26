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
  // попробуйте с помощью js поменять название товара и цену товара
  // name[0].innerText = "test"
  let price = this.parentNode.parentNode.querySelectorAll(".product-price")
  let image =
    this.parentNode.parentNode.parentNode.querySelectorAll(".product-image")
  // console.log(name[0].innerText)
  // console.log(price[0].innerHTML)
  // console.log(image[0].src)

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
  console.log(cartLi)
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
