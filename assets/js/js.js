
// function loginn() {
//  wrap.classList.toggle('hide')
// }

// function loginn2() {
//   wrap1.classList.toggle('hide')
// }

// function closeModal() {
//   wrap.classList.toggle("hide");
// }

// function closeModal1() {
//   wrap1.classList.toggle("hide");
// }

// function rotateBtn(e) {
//   e.style.transform = "rotate(360deg)";
// }

// function loginn() {
//   wrap.classList.toggle('hide')
//  }

//  function loginn2() {
//    wrap1.classList.toggle('hide')
//  }

//  function closeModal() {
//    wrap.classList.toggle("hide");
//  }

//  function closeModal1() {
//    wrap1.classList.toggle("hide");
//  }

//  function rotateBtn(e) {
//    e.style.transform = "rotate(360deg)";
//  }

// Functions


let person =  {
  bio(adres, mail){
    return this.name + " " + this.age + " " + adres + " " + mail
  }
}

let person1 = {
  name: "Uchenna",
  adrs: "Abia",
  adrs2: "PH",
  age: 50,
  innerObj: {
    name: "Uchenna",
    adrs: "Abia",
    adrs2: "PH",
    age: 50
  }
}

person1.nativity = "Edda"
person1.bio = () => "Uchenna Martins Anya"

for(let u in person1){
  console.log(person1[u])
}
console.log(person.bio.apply(person1, ["Aba", "anya@mail.com"]))

'use strict'

function func(age, address, firstName, lastName = "Anya") {
  console.log(this)
  return `
  I am called ${firstName} ${lastName}
  I am  ${age}
  years old, I live in
  ${address}`
}



func()

function higherFunc (){
  return func()
}

function higherFunc2 (fun){
  return fun
}

console.log()
document.getElementById("bio")
// .innerText = higherFunc2(func('dd', 3, 'rr', 'boi'))

document.getElementById("bio1")
// .innerText = func(54, "Owerri", "Rose")

// Array

let myArray = ["Uchenna", 50, true, {name: "Uche"}, [2, true, "Anya"], undefined]

console.log(myArray[4][2])

const myName = "Emeka Okeh"   // Emeka Okeh

console.log(myName)

let obj = {
  fisrtName: "Uchenna ",
  lastName: "Anya ",
  myBio(age, address = "Aba") {
    return `${this.fisrtName} ${this.lastName} ${age} ${address}`
  }
}

function Ops(name, address, mail){
  this.names = name
  this.addrs = address
  this.mails = mail
}

Ops.prototype.trade = "JS Developer"
Ops.prototype.about = function(siblings, aunty="Rose"){return siblings + aunty + this.names + this.trade + this.addrs + this.mails}

let opss = new Ops("Uche", "Aba, Abia", "uche@mail.com")


let show = document.getElementById("show")
// show.innerHTML = obj.myBio(100, "Owerri ").toUpperCase() + opss.about("John")

document.getElementById("show")
// show.style.backgroundColor = "pink"
// show.style.padding = "1rem"
// show.style.margin = "1rem"

// Javascript Array

let myArr = ["Mango", 'Liwi', ['John', 4], {name: "Uchenna", age: 30}, true, false, 49]
console.log(myArr[5])

let aa = myArr[[myArr.length - 1]]

// Array methods.

console.log(aa.length)

// Array Iteration

// This is how you can loop through an array

// forEach, for, for in, for of, reduce etc

let newArry = [2, 3, 9, 10, 11, 90]

for(let i=0; i<newArry.length; i++){
  // console.log(newArry[i])
  let arr = newArry[i]
document.getElementById("arr").innerHTML = arr

}

console.log(newArry)