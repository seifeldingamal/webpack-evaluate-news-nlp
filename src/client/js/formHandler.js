import axios from 'axios'

function handleSubmit(event) {
    console.log("::: Running handleSubmit :::", event);
    event.preventDefault()

    // check what text was put into the form field
    let text = document.getElementById('text').value
    const bool = Client.checkText(text)
    const input = document.getElementById('text')

    if (bool) {
        input.value = ""
        input.classList.remove('error')
        
        axios.post('http://localhost:8081/api', {
            text
        })
        //axios.get('http://localhost:8081/test')
        .then(res => res.data)
            .then(function(res) {
                console.log(res);
                document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement
                document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence
                document.getElementById('irony').innerHTML = 'Irony: ' + res.irony
                document.getElementById('score').innerHTML = 'Polarity: ' + res.score_tag
                document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity
            })
    } else {
        input.value = ""
        input.classList.add('error')
        alert('Entered Text much be More than 5 Words!')
    }
}

export { handleSubmit }
