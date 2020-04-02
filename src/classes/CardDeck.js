import Stack from './Stack'
import Card from './Card'

export default class Deck {
  constructor () {
    this.stack = new Stack(36)
    let cards = []
    for (let i = 0; i < Card.suits.length; i++) {
      for (let j = 0; j < Card.ranks.length; j++) {
        let suit = Card.suits[i]
        let rank = Card.ranks[j]
        let card = new Card(suit, rank)
        cards.push(card)
      }
    }
    console.log('cards', cards)
    this.shuffleArr(cards)
    console.log('create deck', cards)
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i]
      this.stack.push(card)
    }
    console.log('stack', this.stack)

    let randomInd = Math.floor(Math.random() * 4)
    this.trump = Card.suits[randomInd]
  }

  shuffleArr (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      // [arr[i], arr[j]] = [arr[j], arr[i]]
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
  isEmpty () {
    return this.stack.isEmpty()
  }
  pickCard () {
    return this.stack.pop()
  }
}

