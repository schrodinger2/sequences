function recaman () {
  let steps = 1;
  let count = 0;
  let disqualfiedNums = [];
  let recArr = [0];
  let recNum = document.querySelector('.recaman');
  console.log(recNum.value);
  let recaman = document.querySelector("#recaman");
  for (var i = 0; i < recNum.value; i++) {
    disqualfiedNums.push(count);
    if (count - steps > 0 && ! disqualfiedNums.includes(count - steps)) {
      count -= steps;
    }else {
      count += steps;
    }
    steps += 1;
    recArr.push(count)
  }
  recaman.textContent = recArr;
}
function fibonacci () {
  let nextNum;
  let fib = [0, 1];
  let fibNum = document.querySelector('.fibonacci');
  console.log(fibNum.value);
  let fibonacci = document.querySelector("#fibonacci");
  for (var i = 0; i < fibNum.valueAsNumber; i++) {
    nextNum = fib[i] + fib[i+1];
    fib.push(nextNum);
  }
  fibonacci.textContent = fib;
}
