const {test, expect}=require('@jest/globals')
const totalizar = require('./totalizar.js')

test('soma 2+1', () => {
    const resultado = totalizar(2, 1, "+");
    expect(resultado).toBe(3);
}); 

test('soma 2+1.5', () => {
    const resultado = totalizar(2, 0.5, "+");
    expect(resultado).toBe(2.5);
}); 

test('subtraçao 1-2', () => {
    const resultado = totalizar(1, 2, "-");
    expect(resultado).toBe(-1);
}); 

test('subtraçao 2-1', () => {
    const resultado = totalizar(2, 1, "-");
    expect(resultado).toBe(1);
}); 

test('subtraçao 2-0.5', () => {
    const resultado = totalizar(2, 0.5, "-");
    expect(resultado).toBe(1.5);
}); 

test('multiplicação 2*0', () => {
    const resultado = totalizar(2, 0, "*");
    expect(resultado).toBe(0);
}); 

test('multiplicação 2*2', () => {
    const resultado = totalizar(2, 2, "*");
    expect(resultado).toBe(4);
}); 

test('multiplicação 2*2.5', () => {
    const resultado = totalizar(2, 2.5, "*");
    expect(resultado).toBe(5);
}); 

test('divisão 10/2', () => {
    const resultado = totalizar(10, 2, "/");
    expect(resultado).toBe(5);
}); 

test('divisão 10/2.5', () => {
    const resultado = totalizar(10, 2.5, "/");
    expect(resultado).toBe(4);
}); 

test('divisão 10/0', () => {
    const resultado = totalizar(10, 0, "/");
    expect(resultado).toBe(0);
}); 