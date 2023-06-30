
<template>
  <transition-group name="fade">
    <div
      v-for="task in this.$store.getters.tasks"
      v-bind:key="task.id"
      class="task__actions">

      <div class="actions__item">
        <div class="action__name">
          <span>{{ task.id }}.</span> 
          <span
            v-if="toggle == false"
          >
            {{ task.taskName }}
          </span>

          <input
            v-else
            v-model="edittedTask.name"
            type="text">

        </div>
        <div class="action__desc">
          <span v-if="toggle == false">
            {{ task.taskDesc }}
          </span>

          <input 
            v-else 
            v-model="editTask.desc"
            type="text">

        </div>
      </div>

      <div class="actions__button">
        <button
          v-if="toggle == false"
          value="{{ task.id }}"
          @click="editTask(task.id)"
        > Edit </button>
        <button
          v-else
          @click="acceptEdit()"
        > Accept </button>
        <button
          @click="this.$store.commit('deleteTask', task)"
        >Delete</button>
      </div>

    </div>
  </transition-group>
</template>

<script>
// import MyModal from './MyModal.vue';
  export default{
    data(){
      return{
        edittedTask:{
          name:'',
          desc:'',
        },
        toggle: false,
        taskItem: this.tasks,
      }
    },
    async mounted(){
      const data = await localStorage.getItem(`tasks`);
      if(data){
        this.$store.state.tasks = JSON.parse(data);
      }
    },
  }
</script>


<style lang="scss">
h2{
  color: #e47c71;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.action__name {
  & input{
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #fff
  }
}
.action__desc {
  & input{
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #fff
  }
}
</style>