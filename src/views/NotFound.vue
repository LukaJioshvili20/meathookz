<template>
  <div class="container x-container">
    <div class="content">
      <div class="not-found">
        <h1>Not Found</h1>
        <p>The page you're looking for was not found.</p>
      </div>
      <div class="return-homepage">

        <router-link to="/" class="bs-btn">

          <base-button>
            &lt; Go to Homepage />
          </base-button>

        </router-link>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NotFound",

}
</script>

<style lang="scss" scoped>
.not-found{
  margin: auto 0;
  text-align: center;
  padding: 2rem 0;
  h1{
    font-size: 3rem;
    margin:0;
  }
}
.return-homepage{
  text-align: center;
}
.bs-btn{
  margin: 2rem 0;
  text-align: center;
  text-decoration: inherit;
}
</style>