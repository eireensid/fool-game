import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Stack from './classes/Stack'
import Deck from './classes/CardDeck'

// let stack = new Stack(3)
// stack.push(4)
// stack.push(2)
// stack.push(1)
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.arr)

let deck = new Deck()
while (!deck.isEmpty()) {
  let card = deck.pickCard()
  console.log('pick card', card)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
