import List from "./List"

export default class Player {
  constructor (name) {
    this.name = name
    this.cardList = new List()
  }
  
  takeCards (deck) {
    while (!deck.isEmpty() && this.cardList.count !== 6) {
      // take card from deck    
      let card = deck.pickCard()
      // insert card to card list
      this.cardList.append(card)
    }
  }
}