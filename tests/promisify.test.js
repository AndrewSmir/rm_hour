const promisify = require('../src/promisify')
const fs = require('fs')
const writeFile = fs.writeFile
const readFile = fs.readFile
const deleteFile = fs.unlink

describe('Possible to create promisify function and resolve it', ()=>{
    it('Create promisified writeFile function and create file', ()=>{
        const promisifyWriteFile = promisify(writeFile)
        return promisifyWriteFile('./test.txt', 'I am exist').then(data => expect(data).toBeUndefined());
    })

    it('Create promisified readFile function and read file', ()=>{
        const promisifyReadFile = promisify(readFile)
        return promisifyReadFile('./test.txt', 'UTF-8').then(data => expect(data).toEqual('I am exist'));
    })

    it('Create promisified deleteFile function and delete file', ()=>{
        const promisifyDeleteFile = promisify(deleteFile)
        return promisifyDeleteFile('./test.txt').then(data => expect(data).toBeUndefined());
    })
})