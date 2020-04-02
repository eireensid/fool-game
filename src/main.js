import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Stack from './classes/Stack'
import Deck from './classes/CardDeck'
import List from './classes/List'
import Player from './classes/Player'


// let stack = new Stack(3)
// stack.push(4)
// stack.push(2)
// stack.push(1)
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.arr)

// let deck = new Deck()
// while (!deck.isEmpty()) {
//   let card = deck.pickCard()
//   console.log('pick card', card)
// }

// let list = new List()
// list.append(0)
// list.append(1)
// list.append(2)
// list.append(3)
// list.insert(4, 5)
// console.log('list', list)

let deck = new Deck()
let player = new Player('Ivan')
player.takeCards(deck)
console.log('player', player)

console.log('trump', deck.trump)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
