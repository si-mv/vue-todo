<template>
  <li
    :style = "{
      'text-decoration': todo.done ? 'line-through' : 'none'
    }"
  >
    <input type="checkbox" v-model="todo.done" />
    {{ todo.text }}
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
