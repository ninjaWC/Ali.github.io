<script>
export default{
  data(){
    return{
      task:{
        taskName:'',
        taskDesc:'',
      }
    }
  },
  methods:{
    createTask(){
      this.$store.commit('createTask', this.task);
      this.task = {
        taskName: '',
        taskDesc: ''
      }
    }
  }
}
</script>

<template>
  <form class="task__form" @submit.prevent>
        <h3>Create Task</h3>
        <input
          v-model="task.taskName"
          
          type="text" 
          placeholder="Task name..."
        >
        <input 
          v-model="task.taskDesc"
          
          type="text" 
          placeholder="Task description"
        >
        <button v-on:click="createTask">Create Task</button>
  </form>
</template>

<style>
</style>