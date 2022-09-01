<template>
  <form
    @submit.prevent="todo.id ? updateTodo(todo.id) : createTodo()"
  >
    <input
      v-model="todo.text"
      class="text-input"
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

<style scoped>
form {
  padding-bottom: 1em;
  display: flex;
  align-items: center;
}

.text-input {
  padding: 10px;
  flex-grow: 1;
}

button {
  font-weight: bold;
  padding: 12px;
  border-radius: 5%;
  margin-left: 0.5em;
  background-color: rgb(0, 130, 126);
  color: whitesmoke;
  border: none;
}

button:hover {
  cursor: pointer;
}
</style>
