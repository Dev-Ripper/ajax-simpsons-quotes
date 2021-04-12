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
`
console.log('data decoded from JSON:', sim);

document.querySelector('#simpson').innerHTML = quoteHtml;
})

}

getSimpsonsQuotes()