const quote = document.querySelector("#quote");


fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let todaysQuote = data[Math.floor((Math.random() * data.length))];
    let quote = todaysQuote.text === null ? "" : todaysQuote.text;
    let author = todaysQuote.author === null ? "" : todaysQuote.author;
    author = " - " + author;
    typingQuote(quote, author)
  });

function removeQuote() {
  quote.innerText = "";
  document.querySelector("#quote").hidden = true;
  document.querySelector(".inner-container").hidden = false;
  document.querySelector(".weather").hidden = false;
}

setTimeout(removeQuote, 12000);

function typingQuote(q, a) {
  let quoteAndAuthor = [q, a];
  let characterCount = 0;
  for (let i = 0; i < quoteAndAuthor.length; i++) {
    let sentence = quoteAndAuthor[i];
    let newContent = '';

    // go through all characters of the sentence
    for (let j = 0; j < sentence.length; j++) {
      let substring = sentence.substr(j, 1);
      // if we have a character, wrap it
      if (substring !== " ") {
        newContent += `<span style="--animation-order: ${characterCount};">${substring}</span>`;
      } else {
        newContent += "&nbsp;";
      }
      characterCount++;
    }
    quote.innerHTML += newContent;
  }
}


