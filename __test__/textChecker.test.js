import { checkText } from '../src/client/js/textChecker'

describe('Testing function for right amout of words', () => {
    const text = 'The restaurant was great even though it’s not near Madrid.'
    test('It should be true', () => {
        const response = checkText(text)
        expect(response).toBe(true)
    })
})

describe('Testing function for wrong amout of words', () => {
    const text = 'Only 3 words'
    test('It should be false', () => {
        const response = checkText(text)
        expect(response).toBeFalsy()
    })
})