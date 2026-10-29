//Expression
//Anonymous function
let data1 = () => {
  console.log('Hello')
}

let data2 = (x, y) => {
  console.log(x + y)
}


let data3 = () => {
  return 'Wow wow wow'
} 

let data4 = (a, b ,c) => {
  return a * b * c
}

let data5 = data1

//---------------------------
data1()
data2(10, 20)
console.log(data3())
console.log(data4(10, 20, 30))
data5()