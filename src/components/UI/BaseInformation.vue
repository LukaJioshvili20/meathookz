<template>
  <div class="information">
    <div class="title">
      <h1>
        <slot name="title"></slot>
      </h1>
    </div>
    <div class="description">
      <p>
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInformation"
}
</script>

<style lang="scss" scoped>
.information{
  margin-bottom: 2rem;
  text-align: justify;
}

.title{
  h1{
    font-size: 1.5rem;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
    text-decoration-color: #B45E33;
  }
}
</style>