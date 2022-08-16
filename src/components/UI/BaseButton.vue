<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode'],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #eb4d42;
  border: 1px solid #eb4d42;
  color: white;
  cursor: pointer;
  border-radius: 12px;
}

button:hover,
button:active {
  background-color: #ee3029;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3b6edd;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #f7c1c1;
}
</style>