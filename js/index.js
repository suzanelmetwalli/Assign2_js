function getQuote() {
    var authors = ["― Oscar Wilde","― Frank Zappa","― Marcus Tullius Cicero","― Mahatma Gandhi"];
    var quotes = ['" Be yourself; everyone else is already taken."','"So many books, so little time."','"A room without books is like a body without a soul."','"Be the change that you wish to see in the world."'];
    var num = Math.floor(Math.random() * (authors.length));
    document.getElementById("quote").innerHTML = quotes[num];
    document.getElementById("author").innerHTML = authors[num];
}
