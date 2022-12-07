// Type Alias

// Definição
type GameT = {
  title: string;
}

type DLCT = {
  extra: string;
}

// Intersection
type GameCollectionT = GameT & DLCT & { content: boolean; }

// Implements
// class CreateGameT implements GameCollectionT {}

// Declarar função
type getSimilarT = (title: string) => void


// ========= Diferenças ========= //
type IDT = string | number

// pode declarar tuplas normalmente
type TupleT = [number, number]

[1, 2] as TupleT

// Apenas uma declaração por escopo
type JQueryT = { a: string }
type JQuery = { b: string }

// mais recomendado: 
// na maioria das vezes
// React - Props