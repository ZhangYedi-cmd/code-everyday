const obj = {
    foo: 1,
    bar: () => {
        return this.foo;
    }
}

console.log(obj.bar());