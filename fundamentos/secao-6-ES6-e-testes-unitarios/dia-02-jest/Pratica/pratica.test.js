const {
  removeItem,
  myFizzBuzz,
} = require('./pratica.js');

// Exercício 1

describe('Exercício 1', () => {
  test('Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })
  it('Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })
  it('Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})

// Exercício 2

describe('Exercício 2', () => {
  test('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".', () => {
    expect(myFizzBuzz(30)).toBe('fizzbuzz')
  })
  it('Caso num seja um número divisível apenas por 3, a função retorna "fizz"', () => {
expect(myFizzBuzz(27)).toBe('fizz')
  })
  test('Caso num seja um número divisível apenas por 5, a função retorna "buzz"', () => {
expect(myFizzBuzz(25)).toBe('buzz')
  })
  it('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.', () => {
expect(myFizzBuzz(14)).toBe(14)
  })
  test('Caso num não seja um número, a função retorna false.', () => {
    expect(myFizzBuzz('xabalau')).toBeFalsy()
  })
})

