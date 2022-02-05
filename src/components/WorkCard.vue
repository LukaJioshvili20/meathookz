<template>
  <div class="work-card">
    <a :href="link">
      <div class="work-image">
        <img :src="require('@/assets/images/works/'+ image )" alt="Project&&Work Card Image">
      </div>
      <div class="work-title">
        <h1>{{ cardTitle }}</h1>
      </div>
      <div class="work-description">
        <p>{{ cardDescription }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "WorkCard",
  props: ['link','image','cardTitle','cardDescription']
}
</script>

<style lang="scss" scoped>
.work-card{
  height: auto;
  width: 240px;
  text-align: center;
  margin-bottom: 1rem;
  a{
    text-decoration: inherit;
    color: inherit;
  }
  .work-image{
    width: 100%;
    height: 160px;
    border-radius: 0.5rem;
    overflow: hidden;
    img{
      height: 100%;
      width: 100%;
      transition: all 200ms ease-in-out;
      &:hover{
        transform: scale(1.05);
      }
    }
  }
  .work-title{
    h1{
      font-size: 1.5rem;
      margin: 0.5rem 0;
    }
  }
  .work-description{
    text-align: center;
    p{
      margin: 0;
      font-size: 1rem;
    }
  }
}
@media screen and (max-width: 768px){
  .work-card{
    width: 100%;
    height: auto;
    .work-image{
      width: auto;
      height:auto;
    }
  }
}
</style>
