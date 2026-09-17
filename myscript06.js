//function มี 4 ประเภท
//no parameter, no return
function myFuncA() {
  console.log('AAA')
  console.log('BBB')
}

//have parameter no return
function myFuncB(x, y) {
  console.log(x + y)
}

//no parameter has return
function myFuncC() {
  console.log('Hello')
  return 'World'
}

//have parater has return
function myFuncD(fullname, age) {
  return `${fullname} is ${age} years old.`
}

//---------------------------------------
//call function แบบไม่มี return
myFuncA()
myFuncB(10, 20)

//call function แบบมี return
console.log(myFuncC())

let data = myFuncD('John', 25)
console.log(data)