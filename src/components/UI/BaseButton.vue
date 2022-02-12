<template>
  <button class="btn" aria-label="Base Button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
}
</script>

<style lang="scss" scoped>
button{
  cursor: pointer;
  outline: none;
  border: none;
  color: white;
  background-color: #CC1100;
  padding: 0.8rem 1.6rem;
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  transition: background-color 150ms ease-in-out;
  &:hover{
    background-color: #de3323;
  }
}
</style>