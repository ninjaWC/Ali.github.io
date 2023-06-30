import * as Vue from 'vue'
import Vuex from 'vuex'


const store = new Vuex.Store({
  state:{
    tasks:[],
  },
  mutations:{
    // add
    createTask(state, task){
      if(task != ''){
        task.id=Date.now();
        state.tasks.push(task);
      }
      localStorage.setItem(`tasks`, JSON.stringify(state.tasks));
    },
    // delete
    deleteTask(state, task){
      state.tasks = state.tasks.filter(t => t.id !== task.id);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
  getters:{
    tasks(state){
      return state.tasks
    }
  }
})

export default store
