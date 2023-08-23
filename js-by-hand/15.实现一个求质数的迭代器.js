
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function* getNext() {
  let currNum = 1

  while (currNum < 100) {
    if (isPrime(currNum)) {
      console.log(currNum)
      yield currNum
    }
    currNum++
  }
}

let g = getNext()

g.next()
g.next()
g.next()
g.next()
g.next()
g.next()
g.next()
g.next()
g.next()
