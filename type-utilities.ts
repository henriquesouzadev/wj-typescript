/**
 * Partial: Faz com que todas as propriedades do tipo sejam opcionais apenas no ponto que Partial é utilizado
 * Readonly: Não permite fazer alterações diretas no objeto
 * Pick: Pega somente as propriedades referenciadas do Tipo
 * Omit: Pega todas as propriedades do Tipo, menos as referenciadas
 */

type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'description'>

type TodoPreview2 = Omit<Todo, 'description'>

const todo: Readonly<Todo> = {
  title: 'Assistir dark de novo',
  description: 'Relembrar os detalhes',
  completed: false,
}

console.log(todo)

// todo.completed = true

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true }) 

console.log(todo2)

const todo3: TodoPreview = {
  title: 'Estudar Angular',
  description: 'angular'
}

const todo4: TodoPreview2 = {
  title: 'Estudar Redux',
  completed: false
}