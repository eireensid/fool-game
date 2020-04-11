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

  giveMinCard (trump) {
    // начальная инициализация минимальных переменных
    let minCard = this.cardList.head
    let minInd = 0
    if (minCard === null) return null // если список пуст вернуть ничего
    // начальная инициализация текущих переменных
    let curCard = this.cardList.head
    let curInd = 0
    // цикл обхода всего списка для поиска минимума
    while (curCard.next !== null) { // пока у текущей карты есть следующая
      curInd++ // увеличиваем индекс рассматриваемой карты на один
      curCard = curCard.next // текущая карта равна следующей
      if (minCard.isGreater(curCard, trump)) { // если минимальная карта больше текущей то
        minCard = curCard // минимальная карта присвоить текущей карте
        minInd = curInd // запомнить индекс минимальной карты
      }
    }
    this.cardList.delete(minInd) // удалить из списка минимальную карту по ее индексу, затем и запоминали его
    return minCard // вернуть минимальную карту
  }
}