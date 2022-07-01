import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'

export const useStore = defineStore('todos', {
  
  state: () => {
    return {

      todo: {
        text: '',
        id: null,
        done: false
      },

      todos: []

    }
  },

  actions: {

    resetTodo () {
      this.todo = { text: '', id: null, done: false }
    },

    createTodo () {
      !!this.todo.text && this.todos.push({ ...this.todo, id: nanoid() })
      this.resetTodo()
    },

    updateTodo (id) {
      !!this.todo.text && this.todos.find(_ => _.id === id).text = this.todo.text
      this.resetTodo()
    },

    deleteTodo (id) {
      this.todos = this.todos.filter(_ => _.id !== id)
    }

  }

})