<script>
  // import MainPage from './components/MainPage.vue';
  import HeaderMain from './components/HeaderMain.vue';
  export default { 
    components: {
      HeaderMain,
    },
    async mounted(){
      const data = localStorage.getItem(`${this.$store.state.tasks}`);
      console.log(data);
      JSON.parse(data);
      // this.$store.
    }
  }
</script>

<template>
  <HeaderMain/>
  <router-view></router-view>
</template>

<style>
body{
  margin: 0;
  padding: 0;
  background-color: #333;
}
</style>
