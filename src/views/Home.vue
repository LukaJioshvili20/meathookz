<template>
  <div class="container">
    <div class="content">
      <div class="short-info">
        <div class="name">
          <h1>Luka Jioshvili</h1>
          <p>Front-end Developer</p>
        </div>
        <div class="doom-guy-animated">
          <img :src="require(`@/assets/images/DoomGuyAnimated.gif`)" alt="Doom Guy">
        </div>
      </div>

      <base-information>
        <template v-slot:title>
          About
        </template>
        <template v-slot:description>
          &nbsp;&nbsp;Luka is a front-end developer and freelance from Georgia with a great passion for becoming great developer.
          He wants to become full-stack developer , but before he started learning front-end. While he is offline ,
          he loves playing video games and drawing sketches. His goal is not simple as just becoming developer ,
          he wants to do more than that...
        </template>
      </base-information>

      <base-information>
        <template v-slot:title>
          Technology
        </template>
        <template v-slot:description>
          &nbsp;&nbsp;Now Luka has a little arsenal of programming tools ,
          but he knows modern mark-up HTML5 and CSS3 with pre-processors like SAAS and SCSS,
          CSS frameworks like Bootstrap and tailwind . As for actual programming languages he knows usage and basics of
          following languages : Javascript , Vue.js 3 and C++.
        </template>
      </base-information>


      <div class="go-works">
        <router-link to="/works" class="bs-btn">
          <base-button>
            &lt; Works />
          </base-button>
        </router-link>
      </div>
      <div class="biography">
        <div class="title">
          <h1>Biography</h1>
        </div>
        <div class="years">
          <ul>
            <li>
              <span class="years">2002</span>
              &nbsp;&nbsp;Born in Borjomi, Georgia.
            </li>
            <li>
              <span class="years">2020</span>
              &nbsp;&nbsp;Graduated Public School in Borjomi.
            </li>
            <li>
              <span class="years">2020</span>
              &nbsp;&nbsp;Started Learning at the School of Information Technology at the Caucasus University.
            </li>
            <li>
              <span class="years">2020</span>
              &nbsp;&nbsp;Worked at Saatec Software Company in Tbilisi!
            </li>
            <li>
              <span class="years">2020 - Present</span>
              &nbsp;&nbsp;Works as a freelance.
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'Homepage',
  props:['darkMode'],
  components: {

  }
}
</script>

<style lang="scss">
.content{
  padding: 0 7rem;
  .short-info{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;
    .name{
      padding: 1rem 0;
      h1{
        margin: 0;
        font-size: 3.2rem;
        font-weight: normal;
      }
    }
    .doom-guy-animated{
      img{
        width: auto;
        height: 150px;
        transform: rotateY(180deg);
      }
    }
  }
  .go-works{
    text-align: center;
  }
  .biography{
    margin-bottom: 2rem;
    .years{
      ul{
        list-style: none;
        margin: 0;
        padding: 0;
        li{
          margin-bottom: 0.15rem;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .content{
    padding: 0;
    .short-info{
      flex-direction: column-reverse;
      text-align: center;
      .name{
        h1{
          font-size: 2.4rem;
        }
      }
    }
    .doom-guy-animated{
      img{
        height: 225px !important;
      }
    }
  }
}
</style>