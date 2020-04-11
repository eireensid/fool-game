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
}