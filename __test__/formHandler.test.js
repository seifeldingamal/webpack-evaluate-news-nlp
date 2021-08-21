import formHandler from '../src/client/js/formHandler'

describe('Testing function output', () => {
    test('It should be true', () => {
        expect(formHandler).not.toBeNull
    })
})