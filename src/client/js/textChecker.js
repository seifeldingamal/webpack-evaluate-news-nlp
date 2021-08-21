function checkText(inputText) {
    console.log("::: Running checkText :::", inputText);

    if (inputText.split(' ').length > 5) {
        return true
    } else {
        return false
    }
}

export { checkText }