<template>
  <div class="app" :class="darkMode ? 'dark' : 'light'">
    <TheNavigation :dakMode="darkMode" :btnDark="darkMode" @toggle-mode="toggleMode" />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <TheFooter/>
  </div>
</template>

<script>
import TheNavigation from './components/layout/TheNavigation'
import TheFooter from './components/layout/TheFooter'
export default{
  name:"App",
  components:{
    TheNavigation,
    TheFooter,
  },
  data (){
    return{
      darkMode:true,
    }
  },
  methods:{
    toggleMode(){
      this.darkMode = this.darkMode !== true;
    }
  }
}
</script>

<style lang="scss">
/* Font Families */
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');
@font-face {
  font-family: "Hellwalker";
  src: local("hellwalker"),   url('./assets/fonts/Hellwalker-bold.ttf') format("truetype");
}
/* Main-Global Settings */
#app {
  font-family: "Hellwalker" , "M Plus Rounded 1c", "Varela Round", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app{
  transition: all 200ms ease-in-out;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
}
body{
  background: #202023;
  color: rgba(255,255,255,0.9);
  margin: 0;
  padding: 0;
}
/* Background Mode */
.dark{
  background:#202023;
  color: rgba(255,255,255,0.9);
}
.light{
  background: #F0E7DB;
  color: #202023;
}
/* Text Selection */
::-moz-selection {
  color: #fff;
  background: #B45E33;
}
::selection {
  color: #fff;
  background: #B45E33;
}
/* Layout */
.container{
  width: 768px;
  margin: 0 auto;
}
.x-container{
  margin: auto !important;
}
@media screen and (max-width: 768px) {
  .container{
    width: auto;
    padding: 1rem;
  }
}
/* Router Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms linear;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* Scroll Bar */
::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 10px;
  width: 10px;
  transition: background-color 200ms ease-in-out;
  &:hover{
    background-color: #de3323;
  }
}
::-webkit-scrollbar-track{
  background: #202023;
}
</style>