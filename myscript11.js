//callback function

function myFuncA(xx, yy ,zz) {
  let data = xx + yy(20,30)

  console.log(data)

  zz('wow wow wow')
}

//---------------------------------
myFuncA(
  100,
  function (x, y) {
    return x * y
  },
  (info) => {
    console.log(`IoT: ${info}`)
  }
)

