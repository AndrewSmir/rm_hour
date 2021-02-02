const promisify = (fn) => (...args) => new Promise((res, rej) => fn(...args, (err, data) => err ? rej(err) : res(data)))
module.exports = promisify