<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link to="/">Luka Jioshvili</router-link>
      </div>
      <div class="nav-links" v-show="!mobile">
        <router-link to="/works">&lt; Works /></router-link>
        <a href="https://github.com/LukaJioshvili20/meathookz">&lt; Source Code /></a>
      </div>
      <div class="mode">
        <div class="modeToggle">
          <button class="modeIcon" @click="toggleMode" :aria-label="!btnDark? 'Dark Mode' : 'Light Mode' "  :class="btnDark?'btn-dark':'btn-light'">
            <icon v-if="!btnDark" name="moon"></icon>
            <icon v-if="btnDark" name="sun"></icon>
          </button>
          <button class="menuIcon" @click="toggleMobileNav" aria-label="Menu Button" v-show="mobile" :class="btnDark?'btn-menu-dark':'btn-menu-light'">
            <icon name="bars"></icon>
          </button>

        </div>
      </div>
    </nav>
    <transition name="mobile-nav">
      <div class="mobile-nav" @click="checkClick" ref="mobileNav" v-show="mobileNav"  :class="btnDark?'mobile-nav-dark':'mobile-nav-light'">
        <router-link to="/">&lt; HomePage /></router-link>
        <router-link to="/works">&lt; Works /></router-link>
        <a href="https://github.com/LukaJioshvili20/hellwalker">&lt; Source Code /></a>
      </div>
    </transition>
  </header>
</template>

<script>
import Icon from '/src/components/VIcon'
export default {
  name: "Navigation",
  props: ['darkMode','btnDark'],
  data(){
    return{
      mobile:null,
      mobileNav:null,
      windowWidth:null,
    };
  },
  components:{
    Icon,
  },
  created(){
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods:{
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 768){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
    toggleMobileNav(){
      this.mobileNav = !this.mobileNav;
    },
    toggleMode(){
      this.$emit('toggle-mode');
    },
  }
}
</script>

<style lang="scss" scoped>
.btn-dark{
  background-color: #B45E33;
  transition: background-color 200ms ease-in-out;
  &:hover{
    background-color: #cd774c;
  }
}
.btn-light{
  background-color: #CC1100;
  transition: background-color 200ms ease-in-out;
  &:hover{
    background-color: #de3323;
  }
}
.btn-menu-dark{
  background-color: #303030;
  &:hover{
    background-color: rgba(48, 48, 48, 0.85);
  }
}
.btn-menu-light{
  background-color: #303030;
  &:hover{
    background-color: rgba(48, 48, 48, 0.85);
  }
}
header{
  z-index: 100;
  nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 0;
    @media screen and (max-width: 768px) {
      &{
        padding: 1rem;
      }
    }
    a{
      line-height: 40px;
    }
    .branding{
      display: flex;
      -moz-box-align: center;
      margin-right: 1rem;
      a{
        font-size: 1.3rem;
        letter-spacing: 1px;
        color: inherit;
        text-decoration: inherit;
      }
    }
    .nav-links{
      display: flex;
      flex-direction: row;
      width: auto;
      margin-top: 0;
      a{
        outline: 2px solid transparent;
        outline-offset: 2px;
        padding: 0 0.5rem;
        margin-left: 0.5rem;
        color: inherit;
        text-decoration: none;
        text-underline-offset: 5px;
        border-bottom: 2px solid transparent;
        &:hover{
          border-bottom: 2px solid rgba(255,255,255,0.5);
        }
      }
    }
    .mode{
      flex: 1;
      text-align: right;
      .modeToggle{
        display: inline-block;
        opacity: 1;
        transform: none;
        button{
          cursor:pointer;
          display: inline-flex;
          appearance: none;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          position: relative;
          white-space: nowrap;
          vertical-align: middle;
          outline: 2px solid transparent;
          outline-offset: 2px ;
          width: auto;
          line-height: 1.2;
          border-radius: 0.5rem;
          min-width: 2.5rem;
          height: 2.5rem;
          padding-inline-start: 1rem;
          padding-inline-end: 1rem;
          padding: 0;
          border: 0;
          transition: background-color 200ms ease-in-out;

        }
        .menuIcon{
          margin-left: 0.5rem;
          border: 2px solid transparent;
          transition: all 200ms ease-in-out;
        }
      }
    }

  }
  .mobile-nav-light{
    background-color: white;
  }
  .mobile-nav-dark{
    background-color: #303030;
  }
  .mobile-nav{
    padding: 0.5rem 0;
    width: 100%;
    max-width: 200px;
    text-align: left;
    display: flex;
    flex-direction: column;
    position: absolute;
    right:1rem;
    top:66px;
    z-index: 1000;
    border-radius: 0.5rem;
    a{
      margin-left: 0.5rem;
      padding: 0.5rem ;
      color: inherit;
      text-decoration: inherit;
      text-underline-offset: 0.5rem;
      letter-spacing: 1px;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
.mobile-nav-enter-active,
.mobile-nav-leave-active{
  transition: opacity 200ms ;
}
.mobile-nav-enter,
.mobile-nav-leave-to{
  opacity: 0;
}
</style>