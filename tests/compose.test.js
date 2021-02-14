const compose = require('../src/compose')

describe('Compose work with different types', ()=>{
    test('Number', ()=>{
        const add = (a) => a+10
        expect(compose(add, add, add)(10)).toBe(40)
    })
    test('String', ()=>{
        const addString = (msg) => `${msg} work with strings`
        const msg = (msg) => msg
        expect(compose(addString, msg)('Compose')).toBe('Compose work with strings')
    })
    test('Boolean', ()=>{
        const addTrue = a => a && true
        const addFalse = a => a && false
        expect(compose(addTrue, addFalse, addFalse, addTrue)(false)).toBe(false)
        expect(compose(addTrue, addTrue, addTrue, addTrue)(true)).toBe(true)
        expect(compose(addFalse, addFalse, addFalse, addFalse)(true)).toBe(false)
    })
})