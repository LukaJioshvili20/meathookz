<template>
  <div class="container">
    <div class="content">
      <div class="work-title">
        <h1>Projects</h1>
      </div>
      <div class="work-content">
        <WorkCard
            v-for="work in works.slice().reverse()"
            :key="work.id"
            :cardTitle="work.cardTitle"
            :cardDescription="work.cardDescription"
            :image="work.image"
            :link="work.link"
        >
        </WorkCard>
      </div>
    </div>
  </div>
</template>

<script>
import WorkCard from "../components/WorkCard";
export default {
  name: "Works",
  components:{
    WorkCard
  },
  data(){
    return{
      works:[
        {
          id:'Vue-Coach',
          cardTitle:"Vue.js - Coach App",
          cardDescription:"Coach Application with Authentication , Vuex and Router. ",
          image:"vue-coach.png",
          link:"https://github.com/LukaJioshvili20/vue.js3__coach-application-asynced"
        },
        {
          id:'Javascript-Projects',
          cardTitle:"Javascript Projects ",
          cardDescription:"Using Vanila Javascript for projects.",
          image:"javascript-projects.jpg",
          link:"https://github.com/LukaJioshvili20/LukaJioshvili20.github.io"
        },
        {
          id:'Vue-Invoice',
          cardTitle:"Vue.js - Invoice App",
          cardDescription:"Fully functioning CRUD application for invoices",
          image:"vue-invoice.png",
          link:"https://github.com/LukaJioshvili20/Invoice-Application"
        },
        {
          id:'Vue-BlogsNews',
          cardTitle:"Vue.js - Blogs and News",
          cardDescription:"Blogs and News website with authentication.",
          image:"vue-blogs-news.png",
          link:"https://github.com/LukaJioshvili20/Vue.js3__Blogs-News"
        },
        /*
        {
          id:'',
          cardTitle:"",
          cardDescription:"",
          image:"",
          link:""
        },
        */
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  padding: 0 8rem;
}
.work-title{
  text-align: center;
  margin-bottom: 2rem;
}
.work-content{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media screen and (max-width: 768px){
  .content{
    padding: 2rem;
    .work-content{
      justify-content: space-around;
    }
  }
}
</style>