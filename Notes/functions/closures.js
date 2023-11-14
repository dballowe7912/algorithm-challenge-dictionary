function buildFunctions() {
  const arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(
      function () {
        console.log(i)
      }
    )
  }

  return arr;
}

fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();
