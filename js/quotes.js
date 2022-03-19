const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let todaysQuote = data[Math.floor((Math.random() * data.length))];
    quote.innerText = todaysQuote.text;
    author.innerText = todaysQuote.author;
  });

