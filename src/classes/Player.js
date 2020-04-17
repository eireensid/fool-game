export default class Player {
  constructor (name) {
    this.name = name
    this.cards = []
  }
  
  takeCards (deck) {
    while (!deck.isEmpty() && this.cards.length !== 6) {
      // take card from deck    
      let card = deck.pickCard()
      // insert card to card list
      this.cards.push(card)
    }
  }

  deleteCard (card) {
    let cardInd = this.cards.indexOf(card)
    if (cardInd !== -1) {
      this.cards.splice(cardInd, 1)
    }
  }

  findCardsForThrowing (cardsOnTable, trump) {
    let matchingCards = []
    for (let i = 0; i < this.cards.length; i++) {
      let card = this.cards[i]
      for (let j = 0; j < cardsOnTable.length; j++) {
        let cardOnTable = cardsOnTable[j]
        if (card.rank === cardOnTable.rank && card.suit !== trump) {
          matchingCards.push(card.rank)
        }
      }
      return matchingCards
    }
  }
}