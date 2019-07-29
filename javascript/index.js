document.addEventListener("DOMContentLoaded", function(){
    let deck = new Deck()
    console.log(deck.freshDeck)
    body = document.getElementById("content")
    image = document.createElement("img")
    image.src = deck.freshDeck[0].url
    body.appendChild(image)
























})