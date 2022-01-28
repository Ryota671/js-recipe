const genkiFunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log("3が大好き!!!")
    } else if (n + "3") {
      console.log("3が大好き!!!")
    } else if ("3" + n) {
      console.log("3が大好き!!!")
    } else {
      console.log(n)
    }
  }
}

genkiFunction(100)
