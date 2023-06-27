<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>

<template>
    <div class="main">
      <Transition name="slide-fade">
        <div class="intro">
        <div class="intro__inner">
          <div class="intro__title title">Welcome!</div>
          <div class="intro__subtitle subtitle">Press button to try the App</div>
          <div class="intro__button">
            <router-link to="/tasks" class="btn">Try the App</router-link>
          </div>
        </div>
      </div>
      </Transition>
    </div>
</template>

<style lang="scss">
.main{
  height: 90vh;
}
.intro {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    .intro__title {
    }
    .intro__subtitle {
      margin: 40px 0px;
    }
    .intro__button {
      & .btn{
        cursor: pointer;
        background-color: transparent;
        border-radius: 10px;
        color:#fff;
        text-decoration: none;
        padding: 15px 30px;

        border: 1px solid #fff;
        transition: .5s;
      }
      & .btn:hover{
        background-color: #fff;
        color: #333;
        box-shadow: 0px 5px 20px #e47c71;
      }
    }
  }
}

.title{
  color: #c7493a;
  font-size: 120px;
}
.subtitle{
  font-size: 20px;
  color: #fefefe;
}

/*------------------------*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>
