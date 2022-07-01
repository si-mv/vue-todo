<template>
  <main>
    <h1>{{ title }}</h1>
    <todo-form />
    <todo-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
  </main>
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
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0px;
  padding: 10px;
}

#app {
  height: calc(100vh - 20px);
  width: 100%;
  display: flex;
  justify-content: center;
}

main {
  width: 100%;
  max-width: 35em;
}
</style>
