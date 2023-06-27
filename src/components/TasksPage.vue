<script>
import TaskForm from '@/components/TaskForm.vue';
import TaskList from '@/components/TaskList.vue';
export default {
  async mounted(){
      const data = localStorage.getItem(`${this.$store.state.tasks}`);
      console.log(data);
      JSON.parse(data);
      // this.$store.
  },

  components:{
    TaskForm,
    TaskList,
  },
  methods:{
    createTask(task){
      this.tasks.push(task);
    },
    deleteTask(task){
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    },
    acceptEdit(task){
      this.tasks.push(task);
    }
  }
}
</script>

<template>
  <div class="task">
    <div class="task__inner">
      <TaskForm
        @create="createTask"
      />
      <hr>
      <h3 
        v-if="this.$store.getters.tasks.length >0"
      >Created Tasks</h3>
      <h3
        v-else
      > There's no tasks for today!</h3>
      <TaskList 
      :tasks="tasks"
      @delete="deleteTask"
      @edditedTask="acceptEdit"
      />
    </div>
  </div> 
</template>

<style lang="scss">
hr{
  width: 500px;
  margin: 30px 10px;
}
  .task{
    box-sizing: border-box;
    color: #fff;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    &__inner{
      display: flex;
      flex-direction: column;
      align-items: center;
      .task__form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        max-width: 400px;
        & input{
          width: 300px;
          height: 40px;
          padding: 10px 20px 0px 20px;
          color: #fff;
          font-size: 18px;
          background-color: transparent;
          border: none;
          border-bottom: 2px solid #fff;
          &:focus{
            border-bottom: 2px solid #fff;
          }
        }
        & button{
          width: 150px;
          height: 40px;
          background-color: transparent;
          color: #fff;
          border: 1px solid #fff;
          border-radius: 10px;
          transition: .3s;

          cursor: pointer;
          &:hover{
            color: #333;
            background-color: #fff;
            box-shadow: 0px 5px 20px #e47c71;
          }
        }
      }
      .task__actions{
        margin: 20px 0px;
        padding: 15px 35px;
        border: 2px solid #fff;
        min-width: 500px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .actions__item{
          .action__name {
            font-size: 20px;
            & span{
              font-size: 16px;
            }
          }
        }
        .actions__button{
          & button{cursor: pointer;}
          & button:first-child{
            background-color: transparent;
            transition: .3s;
            width: 70px;
            height: 40px;
            border: 1px solid #fff;
            border-radius: 5px;
            color: #fff;

            margin-right: 10px;
            &:hover{
              color:#333;
              background-color: #fff;
              box-shadow: 0px 0px 15px #098123;
            }
          }
          & button:last-child{
            background-color: transparent;
            transition: .3s;
            width: 70px;
            height: 40px;
            border: 1px solid #fff;
            border-radius: 5px;
            color: #fff;
            &:hover{
              color:#333;
              background-color: #fff;
              box-shadow: 0px 0px 15px #a00d0d;
            }
          }
        }
      }
    }
  }
</style>