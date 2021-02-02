const compose = (...functions) => (arg) => functions.reduceRight((acc, fn) => fn(acc), arg)
module.exports = compose