<template>
  <div class="loader-overlay" v-if="loading">
    <img src="~assets/img/loader.gif" alt="JeetWin Loader">
  </div>
</template>

<script>
export default {
  name: "JwPageLoader",
  data(){
    return{
      loading: false,
      timeout: ''
    }
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish(){
      this.timeout = setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  },
  beforeDestory() {
    clearTimeout(this.timeout);
  }
}
</script>

<style lang="stylus" scoped>
.loader-overlay{
  width 100vw;
  height: 100vh;
  position: fixed;
  overflow hidden;
  z-index: 99999;
  background-color: rgba(black, 1)

  img{
    position: absolute;
    top: 50%;
    left 50%;
    transform: translate(-50%, -50%)
  }
}
</style>