const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById(".quote");
const author = document.getElementById(".author");

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  quote.innerText = data.content;
  author.innerHTML = data.author;
}

getQuote(apiUrl);

function post() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerText +
      " - " +
      author.innerText,
    "Post Window",
    "width=600, height=300"
  );
}
