document.addEventListener("DOMContentLoaded", function() {
  let user1Cards = []
  let user2Cards = []
  let user1Correct = []
  let user2Correct = []
  let turn = 1;
  let deck = new Deck()
  let deck2 = new Deck()
  deck.shuffle()
  user1Cards.push(deck.deal())
  base1 = user1Cards[0]
  deck2.shuffle()
  user2Cards.push(deck2.deal())
  base2 = user2Cards[0]
  let cards2 = deck2.current
  let cards = deck.current
  let content = document.getElementById("content1")
  let content2 = document.getElementById('content2')
  let footer = document.getElementById('footer')
  let higherButton = document.createElement("button")
  higherButton.innerText = "Higher"
  higherButton.addEventListener("click", function(e) {
    betHigher(turn)
  })
  let lowerButton = document.createElement("button")
  lowerButton.innerText = "Lower"
  lowerButton.addEventListener("click", function(e) {
    betLower(turn)
  })
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
  console.log(user1Cards)



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
  console.log(user2Cards)




  function betHigher(turn) {
    if (turn === 1 && user1Cards.length < 6) {
      content.innerHTML = ""
      let card = deck.deal()
      user1Cards.push(card)
      player1Cards()
      setTimeout(function() {
        console.log(compareCardsHigher(user1Cards))
        if (!compareCardsHigher(user1Cards)) {
          content.innerHTML = ""
          user1Cards = [base1]
          player1Cards()
        }
      }, 2750);
    } else if (turn === 2 && user2Cards.length < 6) {
      content2.innerHTML = ""
      let card = deck.deal()
      user2Cards.push(card)
      player2Cards()
    }
  }

  function betLower(turn){
    if (turn === 1 && user1Cards.length < 6) {
      content.innerHTML = ""
      let card = deck.deal()
      user1Cards.push(card)
      player1Cards()
      setTimeout(function() {
        console.log(compareCardsLower(user1Cards))
        if (!compareCardsLower(user1Cards)) {
          content.innerHTML = ""
          user1Cards = [base1]
          player1Cards()
        }
      }, 2750);
    } else if (turn === 2 && user2Cards.length < 6) {
      content2.innerHTML = ""
      let card = deck.deal()
      user2Cards.push(card)
      player2Cards()
    }
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

  player1Cards()
  player2Cards()
})
