<template>
  <form
    @submit.prevent="todo.id ? updateTodo(todo.id) : createTodo()"
  >
    <input
      v-model="todo.text"
      type="text"
      placeholder="Add your todo..."
    />
    <button type="submit">
      Save
    </button>
  </form>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useStore } from '@/store/todos'

export default {

  computed: {
    ...mapState(useStore, ['todo', 'todos'])
  },

  methods: {
    ...mapActions(useStore, ['createTodo', 'updateTodo'])
  }

}
</script>
