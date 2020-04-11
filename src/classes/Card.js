export default class Card {
  constructor (suit, rank) {
    this.suit = suit
    this.rank = rank
  }

  isGreater (other, trump) {
    return (Card.ranks.indexOf(this.rank) > Card.ranks.indexOf(other.rank)) || (this.suit === trump && other.suit !== trump)
  }

  isCanBeat (other, trump) {
    return (this.suit === other.suit && this.isGreater(other, trump)) || (this.suit === trump && other.suit !== trump)
  }
}

Card.suits = ['Heart', 'Diamond', 'Club', 'Spade']
Card.ranks = ['Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace']

