let turn = 1;


// document.addEventListener("DOMContentLoaded", function() {
  let user1Cards = []
  let user2Cards = []
  let user1Correct = []
  let user2Correct = []


  let deck = new Deck()
  let deck2 = new Deck()
  deck.shuffle()
  user1Cards.push(deck.deal())


  deck.base.push(user1Cards[0])
  deck2.shuffle()
  user2Cards.push(deck2.deal())
  deck2.base.push(user2Cards[0])

  let cards2 = deck2.current
  let cards = deck.current
  let content = document.getElementById("content1")
  let content2 = document.getElementById('content2')
  let footer = document.getElementById('footer')
  let higherButton = document.createElement("button")
  higherButton.innerText = "Higher"
  higherButton.addEventListener("click", function(e) {
    higherButton.disabled = true;
    betHigher()
  })
  let lowerButton = document.createElement("button")
  lowerButton.innerText = "Lower"
  lowerButton.addEventListener("click", function(e) {
    lowerButton.disabled = true;
    betLower()
  })
  higherButton.className = "button"
  lowerButton.className = "button"
  let holdButton = document.createElement('button')
  holdButton.addEventListener("click", holdCards)
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
  smallbuttons.forEach(function(button) {
    smallFooter.appendChild(button)
  })

  let buttons = [holdButton, newCard]
  buttons.forEach(function(button) {
    footer.appendChild(button)
  })


  //player1  cards
  function player1Cards() {
    user1Cards.forEach(card => {
      let image = document.createElement("img")
      image.src = card.url
      image.className = "card"
      content.appendChild(image)
    })


    for (var i = 0; i < (6 - user1Cards.length); i++) {
      let image = document.createElement("img")
      image.src = "../images/cards/yellow_back.png"
      image.className = "card"
      content.appendChild(image)
    }
  }



  //player 2 cards
  function player2Cards() {
    user2Cards.forEach(card => {
      let image = document.createElement("img")
      image.src = card.url
      image.className = "card"
      content2.appendChild(image)
    })

    for (var i = 0; i < (6 - user2Cards.length); i++) {
      let image = document.createElement("img")
      image.src = "../images/cards/red_back.png"
      image.className = "card"
      content2.appendChild(image)
    }
  }




  function betHigher() {

    //player 1
    if (turn === 1 && user1Cards.length < 6) {
      console.log(deck.base)
      content.innerHTML = ""
      let card = deck.deal()
      user1Cards.push(card)
      player1Cards()
        if (!compareCardsHigher(user1Cards)) {
            user1Cards = []
            turn = 2;
            console.log(deck.base)
            user1Cards = deck.base.map(e => e)
            setTimeout(function() {
              content.innerHTML = ""
              player1Cards()
      }, 2000)}else{
      }


    }
    //player 2
     else if (turn === 2 && user2Cards.length < 6) {
      content2.innerHTML = ""
      let card = deck2.deal()
      user2Cards.push(card)
      player2Cards()
      if (!compareCardsHigher(user2Cards)) {
        turn = 1;
        setTimeout(function() {
          content2.innerHTML = ""
          user2Cards = deck2.base.map(e => e)
          player2Cards()
      }, 2000)}else{
      }
  }
  setTimeout(function () {
    higherButton.disabled = false;
  }, 1000);
}

  function betLower(){
    if (turn === 1 && user1Cards.length < 6) {
      content.innerHTML = ""
      let card = deck.deal()
      user1Cards.push(card)
      player1Cards()
      if (!compareCardsLower(user1Cards)) {
          turn = 2;
          setTimeout(function() {
            content.innerHTML = ""
            console.log(deck.base)
            user1Cards = deck.base.map(e => e)
            player1Cards()
          }, 2000)}else{
          }
    } else if (turn === 2 && user2Cards.length < 6) {
      content2.innerHTML = ""
      let card = deck2.deal()
      user2Cards.push(card)
      player2Cards()

      if (!compareCardsLower(user2Cards)) {

        turn = 1;
        setTimeout(function() {
          content2.innerHTML = ""
          user2Cards = deck2.base.map(e => e)
          player2Cards()


      }, 2000)}else{
      }
    }
    setTimeout(function () {
      lowerButton.disabled = false;
    }, 1000);
  }






  function compareCardsHigher(cards) {
    if (cards[cards.length - 1].faceValue > cards[cards.length - 2].faceValue) {
      return true;
    } else {
      return false;
    }
  }

  function compareCardsLower(cards) {
    if (cards[cards.length - 1].faceValue < cards[cards.length - 2].faceValue) {
      return true;
    } else {
      return false;
    }
  }

  function holdCards() {
    if(turn === 1){
      turn = 2
      deck.base.length = 0
      deck.base = user1Cards.map(e => e)
    }
    else if(turn === 2){
      turn = 1
      deck2.base.length = 0
      deck2.base = user2Cards.map(e => e)
    }

  }


  player1Cards()
  player2Cards()
// })
