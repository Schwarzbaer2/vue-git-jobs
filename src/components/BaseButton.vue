<template>
  <button class="button">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.button {
  padding: 1.5rem 3.5rem;
  background: $primary-violet;
  color: $secondary-white;
  border: none;
  border-radius: 0.313rem;
  font-family: $kumbh-sans;
  font-weight: bold;
}
</style>
