document.addEventListener("DOMContentLoaded", function(){
    let deck = new Deck()
    let body = document.getElementById("content")
    let shuffled = deck.shuffle()
    //console.log(deck)
    let card = shuffled[0]
    let image = document.createElement("img")
    image.src = card.url
    image.addEventListener('click', function() {
        let newDeck = deck.shuffle()
        let newCard = newDeck[0]
        image.src = newCard.url
        newDeck.shift()
    })
    image.style = "max-height: 100px;"
    body.appendChild(image)
    
    
























})


















