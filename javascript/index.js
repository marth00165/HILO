
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

  user1Correct = [user1Cards[0]]
  let base1 = user1Cards[0]

  deck2.shuffle()
  user2Cards.push(deck2.deal())
  user2Correct = [user1Cards[0]]
  let base2 = user2Cards[0]

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
  holdButton.innerText = "Hold Cards"
  holdButton.className = "smallButton"

  holdButton.addEventListener("click", holdCards)
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
    console.log("base", base1)
    console.log(user1Cards)
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
      content.innerHTML = ""
      let card = deck.deal()
      user1Cards.push(card)
      player1Cards()
        if (!compareCardsHigher(user1Cards)) {
            turn = 2;
            setTimeout(function() {
            content.innerHTML = ""
            user1Cards = [base1]
            player1Cards()
      }, 2000)}
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
          user2Cards = [base2]
          player2Cards()
      }, 2000)}
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
          user1Cards
          setTimeout(function() {
            content.innerHTML = ""
            user1Cards = [base1]
            player1Cards()
          }, 2750)}
    } else if (turn === 2 && user2Cards.length < 6) {
      content2.innerHTML = ""
      let card = deck2.deal()
      user2Cards.push(card)
      player2Cards()

      if (!compareCardsLower(user2Cards)) {

        turn = 1;
        setTimeout(function() {
          content2.innerHTML = ""
          user2Cards = [base2]
          player2Cards()


      }, 2750)}
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

  function holdCards(){
    if (turn === 1) {
      base1 = user1Correct
      user1Cards = user1Correct
      turn = 2
    }
    else {
      base2 = user2Correct
      user2cards = user2Correct
      turn = 1
    }
  }

  player1Cards()
  player2Cards()
// })
