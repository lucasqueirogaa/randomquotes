const button = document.querySelector(".button");
const quoteHtml = document.querySelector(".quote");
const authorHtml = document.querySelector(".author");

const quotesGenerator = function () {
  let quotes = {
    "- Albert Camus":
      "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
    "- Lewis B. Smedes":
      "To forgive is to set a prisoner free and discover that the prisoner was you.",
      "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
    "- Denis Diderot":
      "Man will never be free until the last king is strangled with the entrails of the last priest.",
  };

  let authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];
  let quotePrint = quotes[author];
  quoteHtml.textContent = quotePrint;
  authorHtml.textContent = author;
};

button.addEventListener("click", quotesGenerator);
