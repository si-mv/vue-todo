<template>
  <h1>{{ title }}</h1>
  <todo-form />
  <todo-item
    v-for="todo in todos"
    :key="todo.id"
    :todo="todo"
  />
</template>

<script>
import { mapWritableState } from 'pinia'
import { useStore } from '@/store/todos'

export default {

  data () {
    return {
      title: 'Vue Todo'
    }
  },

  computed: {
    ...mapWritableState(useStore, ['todos'])
  }

}
</script>

<style>
button {
  margin-left: 0.5em;
}
</style>
