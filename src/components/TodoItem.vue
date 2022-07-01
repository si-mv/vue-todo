<template>
  <li
    :style = "{
      'text-decoration': todo.done ? 'line-through' : 'none'
    }"
  >
    <span>
      <input
        type="checkbox"
        v-model="todo.done"
      />
    </span>
    <span class="text">{{ todo.text }}</span>
    <button @click="todoModel = { ...todo }">
      <span class="material-icons">edit</span>
    </button>
    <button @click="deleteTodo(todo.id)">
      <span class="material-icons">delete</span>
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
  margin-top: 1em;
  display: flex;
  align-items: center;
}

input[type="checkbox"] {
  height: 1.5em;
  width: 1.5em;
  accent-color: indigo;
}

.text {
  margin-left: 1em;
  flex-grow: 1;
}

button {
  border: none;
  background-color: transparent;
  margin-left: 0.5em;
}

button:hover {
  cursor: pointer;
}
</style>
