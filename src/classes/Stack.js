class Stack {
  constructor (size) {
    if (size <= 0) {
      throw new Error('Stack size <= 0')
    }
    this.size = size
    this.arr = []
    this.topInd = size
  }

  push (el) {
    if (this.topInd === 0) {
      throw new Error('Stack overflow')
    }
    this.arr[this.topInd - 1] = el
    this.topInd = this.topInd - 1
  }

  pop () {
    if (this.topInd === this.size) {
      return null
    }
    const el = this.arr[this.topInd]
    this.arr[this.topInd] = undefined
    this.topInd = this.topInd + 1
    return el
  }

  isEmpty () {
    return this.topInd === this.size
  }
}

export default Stack
