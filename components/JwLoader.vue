<template>
  <div class="loader-overlay" :class="{'dark': $store.state.modalDark}">
    
  </div>
</template>

<script>
export default {
  name: "JwLoader",
  data () {
    return {
    }
  },
}
</script>

<style lang="stylus" scoped>
.loader-overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  z-index: 99999;
  background-color: rgba(black, 0.8);

  &.dark {
    background-color: rgba(black, 1);
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>