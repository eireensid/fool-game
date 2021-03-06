class Node {
  constructor (value, next, prev) {
    this.value = value
    this.next = next
    this.prev = prev
  }
}

export default class List {
  constructor () {
    this.head = null
    this.tail = null
    this.count = 0
  }

  append (value) {
    if (this.head === null) {
      this.head = new Node(value, null, null)
      this.tail = this.head
    } else {
      let node = new Node(value, null, this.tail)
      this.tail.next = node
      this.tail = node
    }
    this.count++
  }

  delete (ind) {
    let node = this.head
    for (let i = 0; i < ind; i++) {
      node = node.next
    }
    let prev = node.prev
    let next = node.next
    if (prev !== null) {
      prev.next = next
    }
    if (next !== null) {
      next.prev = prev
    }
    this.count--
  }

  insert (ind, value) {
    if (ind === this.count) {
      this.append(value)
      return
    }
    let node = this.head
    for (let i = 0; i < ind; i++) {
      node = node.next
    }
    let prev = node.prev
    let newNode = new Node(value, node, prev)
    if (prev !== null) {
      prev.next = newNode
    }
    node.prev = newNode
    this.count++
    if (ind === 0) {
      this.head = newNode
    }
  }

  toArr () {
    let arr = []
    let curNode = this.cardList.head
    if (curNode === null) return arr
    arr.push(curNode.value)
    while (curNode.next !== null) {
      curNode = curNode.next
      arr.push(curNode.value)
    }
    return arr
  }
}
