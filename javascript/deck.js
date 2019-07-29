class Deck {
    constructor() {
        this.freshDeck = [//CLUBS
            {faceValue: "2C", url: "../images/cards/2C.png" },
            {faceValue: "3C", url: "../images/cards/3C.png" },
            {faceValue: "4C", url: "../images/cards/4C.png" },
            {faceValue: "5C", url: "../images/cards/5C.png" },
            {faceValue: "6C", url: "../images/cards/6C.png" },
            {faceValue: "7C", url: "../images/cards/7C.png" },
            {faceValue: "8C", url: "../images/cards/8C.png" },
            {faceValue: "9C", url: "../images/cards/9C.png" },
            {faceValue: "10C", url: "../images/cards/10C.png" },
            {faceValue: "11C", url: "../images/cards/JC.png" },
            {faceValue: "12C", url: "../images/cards/QC.png" },
            {faceValue: "13C", url: "../images/cards/KC.png" },
            {faceValue: "14C", url: "../images/cards/AC.png" },
            //DIAMONDS
            {faceValue: "2D", url: "../images/cards/2D.png" },
            {faceValue: "3D", url: "../images/cards/3D.png" },
            {faceValue: "4D", url: "../images/cards/4D.png" },
            {faceValue: "5D", url: "../images/cards/5D.png" },
            {faceValue: "6D", url: "../images/cards/6D.png" },
            {faceValue: "7D", url: "../images/cards/7D.png" },
            {faceValue: "8D", url: "../images/cards/8D.png" },
            {faceValue: "9D", url: "../images/cards/9D.png" },
            {faceValue: "10D", url: "../images/cards/10D.png" },
            {faceValue: "11D", url: "../images/cards/JD.png" },
            {faceValue: "12D", url: "../images/cards/QD.png" },
            {faceValue: "13D", url: "../images/cards/KD.png" },
            {faceValue: "14D", url: "../images/cards/AD.png" },
            //HEARTS
            {faceValue: "2H", url: "../images/cards/2H.png" },
            {faceValue: "3H", url: "../images/cards/3H.png" },
            {faceValue: "4H", url: "../images/cards/4H.png" },
            {faceValue: "5H", url: "../images/cards/5H.png" },
            {faceValue: "6H", url: "../images/cards/6H.png" },
            {faceValue: "7H", url: "../images/cards/7H.png" },
            {faceValue: "8H", url: "../images/cards/8H.png" },
            {faceValue: "9H", url: "../images/cards/9H.png" },
            {faceValue: "10H", url: "../images/cards/10H.png" },
            {faceValue: "11H", url: "../images/cards/JH.png" },
            {faceValue: "12H", url: "../images/cards/QH.png" },
            {faceValue: "13H", url: "../images/cards/KH.png" },
            {faceValue: "14H", url: "../images/cards/AH.png" },
            //SPADES
            {faceValue: "2S", url: "../images/cards/2S.png" },
            {faceValue: "3S", url: "../images/cards/3S.png" },
            {faceValue: "4S", url: "../images/cards/4S.png" },
            {faceValue: "5S", url: "../images/cards/5S.png" },
            {faceValue: "6S", url: "../images/cards/6S.png" },
            {faceValue: "7S", url: "../images/cards/7S.png" },
            {faceValue: "8S", url: "../images/cards/8S.png" },
            {faceValue: "9S", url: "../images/cards/9S.png" },
            {faceValue: "10S", url: "../images/cards/10S.png" },
            {faceValue: "11S", url: "../images/cards/JS.png" },
            {faceValue: "12S", url: "../images/cards/QS.png" },
            {faceValue: "13S", url: "../images/cards/KS.png" },
            {faceValue: "14S", url: "../images/cards/AS.png" },
            ]


        this.current = this.freshDeck
    }

    shuffle() {
        let deck = this.current;
        let m = deck.length, i;
       
        while (m) {
          i = Math.floor(Math.random() * m--);
       
          [deck[m], deck[i]] = [deck[i], deck[m]];
        }
       
        this.current = deck
        return deck;
       }
}

