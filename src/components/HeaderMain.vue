<script>
  export default { 
    
  }
</script>


<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__nav">
        <router-link to="/" class="nav__link">Main</router-link>
        <router-link to="/tasks" class="nav__link">Tasks</router-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss">

.header {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  background-color: #6f2232;
}
.header__inner {
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__nav {
  display: flex;
  gap: 40px;
}
.nav__link {
  cursor: pointer;
  font-size: 24px;
  box-sizing: border-box;
  text-decoration: none;
  color: #fff;
}
.nav__link:hover{
  border-bottom: 2px solid #fff;
}
</style>