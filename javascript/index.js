  function variables() {
        turn = 1;
        user1Cards = []
        user2Cards = []
        user1Correct = []
        user2Correct = []
        deck = new Deck()
        deck2 = new Deck()
        deck.shuffle()
        user1Cards.push(deck.deal())
        deck.base.push(user1Cards[0])
        deck2.shuffle()
        user2Cards.push(deck2.deal())
        deck2.base.push(user2Cards[0])
        cards2 = deck2.current
        cards = deck.current
        content = document.getElementById("content1")
        content2 = document.getElementById('content2')
        footer = document.getElementById('footer')
        higherButton = document.createElement("button")
        higherButton.innerText = "Higher"
        higherButton.addEventListener("click", function(e) {
            disableButtons()
            betHigher()
        })
        lowerButton = document.createElement("button")
        lowerButton.innerText = "Lower"
        lowerButton.addEventListener("click", function(e) {
            disableButtons()
            betLower()
        })
        higherButton.className = "button"
        lowerButton.className = "button"
        holdButton = document.createElement('button')
        holdButton.addEventListener("click", holdCards)
        holdButton.innerText = "Hold Cards"
        holdButton.className = "smallButton"
        newBaseCardButton = document.createElement('button')
        newBaseCardButton.innerText = "New Base Card"
        newBaseCardButton.className = "smallButton"
        newBaseCardButton.addEventListener("click", newBaseCard)
        smallFooter = document.getElementById('small')
        user1 = document.createElement("div")
        user1.innerText = "s p e n c e r"
        user2 = document.createElement("div")
        user2.innerText = "El-CuRRY"
    }

  function appendGame(){

    let tracker = document.getElementById("user1")
    tracker.id = "displayed"
    content.appendChild(user1)
    content2.appendChild(user2)
    //buttons append
    let smallbuttons = [higherButton, lowerButton]
    smallbuttons.forEach(function(button) {
      smallFooter.appendChild(button)
    })

    let buttons = [holdButton, newBaseCardButton]
    buttons.forEach(function(button) {
      footer.appendChild(button)
    })
  }


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
      content.innerHTML = ""
      let card = deck.deal()
      user1Cards.push(card)
      player1Cards()
        if (!compareCardsHigher(user1Cards)) {
          newBaseCardButton.disabled = false;
            turn = 2;
            user1Cards = deck.base.map(e => e)
            setTimeout(function() {
              changeTurns()
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
        newBaseCardButton.disabled = false;
        turn = 1;
        setTimeout(function() {
          changeTurns()
          content2.innerHTML = ""
          user2Cards = deck2.base.map(e => e)
          player2Cards()
      }, 2000)}else{
      }
  }
  setTimeout(function () {
    enableMostButtons()
    checkWinner()
  }, 1000);
}

  function betLower(){
    if (turn === 1 && user1Cards.length < 6) {
      content.innerHTML = ""
      let card = deck.deal()
      user1Cards.push(card)
      player1Cards()
      if (!compareCardsLower(user1Cards)) {
        newBaseCardButton.disabled = false;
          turn = 2;
          setTimeout(function() {
            changeTurns()
            content.innerHTML = ""
            console.log(deck.base)
            user1Cards = deck.base.map(e => e)
            player1Cards()
          }, 2000)}else{
          }
    } 
    else if (turn === 2 && user2Cards.length < 6) {
      content2.innerHTML = ""
      let card = deck2.deal()
      user2Cards.push(card)
      player2Cards()

      if (!compareCardsLower(user2Cards)) {
        newBaseCardButton.disabled = false;
        turn = 1;
        setTimeout(function() {
          changeTurns()
          content2.innerHTML = ""
          user2Cards = deck2.base.map(e => e)
          player2Cards()


      }, 2000)}else{
      }
    }
    setTimeout(function () {
      checkWinner()
      enableMostButtons()
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
    newBaseCardButton.disabled = false;
    if(turn === 1){
      changeTurns()
      turn = 2
      deck.base.length = 0
      deck.base = user1Cards.map(e => e)
    }
    else if(turn === 2){
      changeTurns()
      turn = 1
      deck2.base.length = 0
      deck2.base = user2Cards.map(e => e)
    }

  }

  function newBaseCard(){
    if (turn === 1){
      deck.base.pop()
      user1Cards.pop()
      let newCard = deck.deal()
      deck.base.push(newCard)
      user1Cards.push(newCard)
      content.innerHTML = ""
      newBaseCardButton.disabled = true;
      newBaseCardButton.style.background = "#7298B3"
      player1Cards()
    }
    else if(turn === 2) {
      deck2.base.pop()
      user2Cards.pop()
      let newCard = deck2.deal()
      deck2.base.push(newCard)
      user2Cards.push(newCard)
      content2.innerHTML = ""
      newBaseCardButton.disabled = true;
      newBaseCardButton.style.background = "#7298B3"
      player2Cards()
    }
  }

  function changeTurns() {
      enableButtons()
      let on = document.getElementById("displayed")
      let off = document.getElementById("off")
      on.id = "off"
      off.id = "displayed"
  }

  function disableButtons(){
      higherButton.disabled = true
      lowerButton.disabled = true
      holdButton.disabled = true
      newBaseCardButton.disabled = true
      higherButton.style.background = "#7298B3"
      lowerButton.style.background = "#7298B3"
      holdButton.style.background = "#7298B3"
      newBaseCardButton.style.background = "#7298B3"
  }

  function enableButtons(){
    higherButton.disabled = false
    lowerButton.disabled = false
    holdButton.disabled = false
    newBaseCardButton.disabled = false
    higherButton.style.background = "#FF5258"
    lowerButton.style.background = "#FF5258"
    holdButton.style.background = "#FF5258"
    newBaseCardButton.style.background = "#FF5258"
  }

  function enableMostButtons(){
    higherButton.disabled = false
    lowerButton.disabled = false
    holdButton.disabled = false
    higherButton.style.background = "#FF5258"
    lowerButton.style.background = "#FF5258"
    holdButton.style.background = "#FF5258"
  }

  function checkWinner(){
      if(user1Cards.length === 6){
          alert("Player 1 wins!")
          document.body.innerHTML = clone
          welcome()
      }else if (user2Cards.length === 6){
          alert("Player 2 wins!")
          document.body.innerHTML = clone
          welcome()
      }
  }


function welcome(){
  variables()
  clone = document.body.innerHTML
  let body = document.getElementById('body')
  let logo = document.createElement('h1')
  let motto = document.createElement('h3')
  let start = document.createElement('button')
  let startButton = document.getElementById('startButton')
  startButton.addEventListener("click", function(e){
    body.removeChild(logo)
    body.removeChild(motto)
    body.removeChild(startButton)
    appendGame()
    player1Cards()
    player2Cards()
  })
  start.innerText = "NEW GAME"
  logo.innerText = "Hi-Low"
  motto.innerText = "Aim High Score Low"
  body.appendChild(logo)
  body.appendChild(motto)
  body.appendChild(startButton)
  startButton.appendChild(start)

}

welcome()

function main(){



}
