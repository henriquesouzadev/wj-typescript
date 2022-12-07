// boolean
let isOpen: boolean
isOpen = true

// string
let message: string
message = `foo ${isOpen}`

// number
let total: number
total = 0xff0

// array (type[])
let items: string[]
items = ['foo', 'bar']

let values: Array<number>
values = [1, 2, 3]

// tuple 
let title: [number, string]
title = [1, 'foo']

// enum
enum Colors {
  white = '#fff',
  black = '#000'
}

// any
let coisa: any
coisa = 'true'

// void (vazio)
function logger(): void {
  console.log('foo')
}

// null / undefined
type Bla = string | undefined

// never
function error(): never {
  throw new Error('error')
}

// object
let cart: object
cart = {
  key: 'foo'
}

// Type Inference
let message2 = "mensagem"

window.addEventListener('click', (e) => {
  console.log(e.target)
})