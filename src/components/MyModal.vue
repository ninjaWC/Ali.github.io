<template>
  <div class="modal">
    <div class="modal__inner">
      <div class="modal__header">
        
      </div>
      <div class="modal__body">
        <input 
          v-model="taskObj.name"
          type="text" 
          placeholder="Write new name">
        <input 
          v-model="taskObj.desc"
          type="text" 
          placeholder="Write new description">
      </div>
      <div class="modal__action">
        <button
        @click="console.log(taskObj)"
        >Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props:{
    task:{
      type: Object,
      required: true
    }
  },
  data(){
    return{
      taskObj:{
        id: this.task.id,
        name: this.task.taskName,
        desc: this.task.taskDecs
      }
    }
  },
  methods: { 

  },
  mounted(){
    console.log(this.task);
  }
}
</script>

<style>
.modal {}
.modal__inner {}
.modal__header {}
.modal__body {}
.modal__action {}
</style>