<template>
  <li
    :style = "{
      'text-decoration': todo.done ? 'line-through' : 'none'
    }"
  >
    {{ todo.text }}
    <button @click="todo.done = !todo.done">
      Done
    </button>
    <button @click="todoModel = { ...todo }">
      Edit
    </button>
    <button @click="deleteTodo(todo.id)">
      Delete
    </button>
  </li>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia'
import { useStore } from '@/store/todos'

export default {

  props: ['todo'],

  computed: {
    ...mapWritableState(useStore, {
      todoModel: 'todo'
    })
  },

  methods: {
    ...mapActions(useStore, ['deleteTodo'])
  }

}
</script>

<style scoped>
li {
  margin-top: 0.5em;
}
</style>
