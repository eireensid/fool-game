import Player from './Player'
import Deck from './CardDeck'

export default Game {
  constructor (playersCount) {
    this.players = []
    for (let i = 0; i< playersCount; i++) {
      const player = new Player('' + i)
      this.players.push(player)
    }

    this.deck = new Deck()
    this.trump = this.deck.trump
    this.nextInd = 0
  }

  start () {
    while (!this.deck.isEmpty() || this.players.length > 1) {
      for (let i = 0; i < this.players.length; i++) {
        const player = this.players[i]
        player.takeCards(this.deck)
      }
      player
    }
  }
}