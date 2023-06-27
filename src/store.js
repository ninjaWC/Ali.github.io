import * as Vue from 'vue'
import Vuex from 'vuex'


const store = new Vuex.Store({
  state:{
    tasks:[],
  },
  mutations:{
    // add
    createTask(state, task){
      task.id=Date.now();
      state.tasks.push(task);
      let tasksItem = state.tasks.find(t=>t.id == task.id);
      localStorage.setItem(`${tasksItem.id}`, JSON.stringify(tasksItem));
    },
    // delete
    deleteTask(state, task){
      state.tasks = state.tasks.filter(t => t.id !== task.id);
      localStorage.removeItem(task.id);
    },
  },
  getters:{
    tasks(state){
      return state.tasks
    }
  }
})

export default store
