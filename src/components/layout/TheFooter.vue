<template>
  <footer>
    <div class="container inner-footer">
      <p>© 2021 <a href="https://github.com/LukaJioshvili20" >Luka Jioshvili.</a> All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style lang="scss" scoped>
footer{
  margin-top: auto;
  .inner-footer{
    text-align: center;
    line-height: 2rem;
    p{
      font-size: 0.8rem;
      a{
        letter-spacing: 1px;
        color: white;
        border-radius: 0.5rem;
        text-decoration: inherit;
        padding: 0.5rem ;
        background-color: #303030;
        transition: background-color 150ms ease-in-out;
        &:hover{
          background-color: #CC1100;
        }
      }
    }
  }
}
</style>