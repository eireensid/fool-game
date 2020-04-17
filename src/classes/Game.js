import Player from './Player'
import Deck from './CardDeck'

export default class Game {
  constructor (playersCount) {
    this.players = []
    for (let i = 0; i< playersCount; i++) {
      const player = new Player('' + i)
      this.players.push(player)
    }

    this.deck = new Deck()
    this.trump = this.deck.trump
    this.startPlayerInd = 0
  }

  getMinCard (cards, trump) {
    if (!cards.length) return null
    // начальная инициализация минимальных переменных
    let minCard = cards[0]
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i]
      if (minCard.isGreater(card, trump)) { // если минимальная карта больше текущей то
        minCard = card // минимальная карта присвоить текущей карте
      }
    }
    return minCard // вернуть минимальную карту
  }

  removePlayer (player) {
    let playerInd = this.players.indexOf(player)
    if (playerInd !== -1) {
      this.players.splice(playerInd, 1)
    }
  }

  start () {
    while (this.players.length > 1) {
      // Все игроки берут карты из колоды
      for (let i = 0; i < this.players.length; i++) {
        const player = this.players[i]
        player.takeCards(this.deck) 
      }
      // Текущий игрок ходит
      let startPlayer = this.players[this.startPlayerInd]  
      let startGiveCard = this.getMinCard(startPlayer.cards, this.trump)
      if (startGiveCard === null) {
        this.removePlayer(startPlayer)
        console.log(nextPlayer.name, 'won')
        this.startPlayerInd = this.startPlayerInd % this.players.length
        continue 
      }
      console.log(startPlayer.name, 'gave', nextPlayer.name, startGiveCard)
      startPlayer.deleteCard(startGiveCard)
      // Следующий игрок отбивается
      let nextPlayerInd = this.startPlayerInd + 1 % this.players.length 
      let nextPlayer = this.players[nextPlayerInd] 
      let canBeatCards = nextPlayer.cards.filter(card => card.isCanBeat(startGiveCard, this.trump))
      let afterNextPlayerInd = this.startPlayerInd + 2 % this.players.length
      if (!canBeatCards.length) {
        nextPlayer.cards.push(startGiveCard)
        console.log(nextPlayer.name, 'took the card')
        this.startPlayerInd = afterNextPlayerInd
        continue
      }
      let minCanBeatCard = this.getMinCard(canBeatCards, this.trump)
      console.log(nextPlayer.name, 'beat the card')
      let afterNextPlayer = this.players[afterNextPlayerInd]
      let cardsOnTable = []
      cardsOnTable.push(startGiveCard)
      cardsOnTable.push(minCanBeatCard)
      // первыйй игрок ищет у себя карты для подкидывания
      let startPlayerMatchingCards = startPlayer.findCardsForThrowing(cardsOnTable, this.trump)
      // первый игрок отдает найденные карты, и они удаляются из его карт (delete)
    }
    console.log('Game over, lost Player ', this.players[0].name)
  }
}