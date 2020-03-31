export default class Card {
  constructor (suit, rank) {
    this.suit = suit
    this.rank = rank
  }
}

Card.suits = ['Heart', 'Diamond', 'Club', 'Spade']
Card.ranks = ['Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace']

