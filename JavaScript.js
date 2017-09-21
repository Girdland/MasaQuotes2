function makeQuote() {
    var quotes = ["I have relieved", "Let me ask you helping", "I'm happy to teach me", "My understanding have become clearly at all"];

    var random = Math.floor((Math.random() * 4) + 0);

    document.getElementById("quote").innerHTML = quotes[random];
}
