document.addEventListener("DOMContentLoaded", function(){
    let deck = new Deck()
    let deck2 = new Deck()
    let cards2 = deck2.freshDeck
    let cards = deck.freshDeck
    let content = document.getElementById("content1")
    let content2 = document.getElementById('content2')
    let footer = document.getElementById('footer')
    let higherButton = document.createElement("button")
    higherButton.innerText = "Higher"
    let lowerButton = document.createElement("button")
    lowerButton.innerText = "Lower"
    higherButton.className = "button"
    lowerButton.className = "button"
    let holdButton = document.createElement('button')
    holdButton.innerText = "Hold Cards"
    holdButton.className = "smallButton"
    let newCard = document.createElement('button')
    newCard.innerText = "New Base Card"
    newCard.className = "smallButton"
    let smallFooter = document.getElementById('small')
    let user1 = document.createElement("div")
    let user2 = document.createElement("div")
    content.appendChild(user1)
    content2.appendChild(user2)


    //buttons append
    let smallbuttons = [higherButton, lowerButton]
    smallbuttons.forEach(function(button){
      smallFooter.appendChild(button)
    })

    let buttons = [holdButton,newCard]
    buttons.forEach(function(button){
      footer.appendChild(button)
    })


    //all cards
    for (var i = 0; i < 6; i++) {
    let image = document.createElement("img")
    image.src = deck.freshDeck[0].url
    image.className = "card"
    content.appendChild(image)
    }

    
    


  //player 2 cards
    for (var i = 0; i < 6; i++) {
      let image = document.createElement("img")
      image.src = deck.freshDeck[0].url
      image.className = "card"
      content2.appendChild(image)
      }
})