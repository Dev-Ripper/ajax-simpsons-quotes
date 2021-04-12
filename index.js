const div = document.querySelector('#simpson')

function getSimpsonsQuotes(){

const url = "https://simpsons-quotes-api.herokuapp.com/quotes"

axios.get(url)
.then(function(res){
    return res.data;
})
.then(function(sim){
    const quoteHtml = `
<h1>${sim[0].character}</h1>
<img src="${sim[0].image}">
<p>${sim[0].quote}</p>
<button onclick="getSimpsonsQuotes()">New Quote</button>
`
console.log('data decoded from JSON:', sim);

div.innerHTML = quoteHtml;
})

}

getSimpsonsQuotes()

// const newQuoteButton = document.createElement("button")
// div.appendChild(newQuoteButton)

// newQuoteButton.onclick = function(){
//     getSimpsonsQuotes()
// }

