const sum = (...args) => {
  const f = (...rets) => sum(...args,...rets)
  f.valueOf = () => args.reduce((x, y) => x + y)
  return f
}

console.log(sum(1)(2)(3)(4).valueOf());

