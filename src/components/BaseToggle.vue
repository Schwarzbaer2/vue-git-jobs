<template>
  <label class="toggle" for="myToggle">
    <input class="toggle__input" name="" type="checkbox" id="myToggle" />
    <div class="toggle__fill"></div>
  </label>
</template>

<script>
export default {
  name: "BaseToggle",
  props: ["mode"],
};
</script>

<style scoped lang="scss">
.toggle {
  --width: 2.5rem;
  --height: calc(var(--width) / 2);
  --border-radius: calc(var(--height) / 2);

  display: inline-block;
  cursor: pointer;

  &__input {
    display: none;
  }

  &__fill {
    position: relative;
    width: var(--width);
    height: var(--height);
    border-radius: var(--border-radius);
    background-color: $secondary-white;
    transition: background 0.2s;
  }
}

.toggle__fill::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: var(--height);
  width: var(--height);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  background-color: $primary-violet;
  border-radius: var(--border-radius);
  transition: transform 0.2s;
}

.toggle__input:checked ~ .toggle__fill::after {
  transform: translateX(var(--height));
}
</style>
