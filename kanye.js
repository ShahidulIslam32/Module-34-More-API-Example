const loadQuate = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => load(data))
}

const load = quote => {
    let getQuote = document.getElementById('quote')
    getQuote.innerText = quote.quote
}