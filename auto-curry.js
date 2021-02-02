const autoCurry = (fn) => {
    const curried = (...args) => args.length >= fn.length ? fn.apply(this, args) : (...args2)=>curried.apply(this, args.concat(args2))
    return curried
}
