function func() {
  function sum(a, b) {
    return a + b;
  }
  x = 10;
  y = 20;

  console.log(sum(x, y)); // 30
  debugger;
  x = 20;
  y = 30;

  console.log(sum(x, y)); // 50
}

func();
