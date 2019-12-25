<template>
  <div class="errorWrapper">
    <div class="error-page-container">
      <div class="err-slot">
        <img src="~/assets/img/404error.png" alt="404">
      </div>
      <div>
        <h1>{{ $t("error.desc1") }}</h1>
        <p>{{ $t("error.desc2") }}</p>
      </div>
      <a href="/" class="redirect"><jw-button class="jwbtn-primary home" icon="mdi-arrow-left">{{ $t("error.home") }}</jw-button></a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="stylus" scoped>
@import '~assets/variables.styl';

.errorWrapper {
  width: 100vw;
  height: 100vh;
  background-color: $color-black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
}

.error-page-container {
  width: 100vw;
  height: 100vh;
  background: rgba(137, 37, 244, 0);
  background: -moz-linear-gradient(-45deg, rgba(137, 37, 244, 0) 0%, rgba(137, 37, 244, 0.5) 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(137, 37, 244, 0)), color-stop(100%, rgba(137, 37, 244, 0.5)));
  background: -webkit-linear-gradient(-45deg, rgba(137, 37, 244, 0) 0%, rgba(137, 37, 244, 0.5) 100%);
  background: -o-linear-gradient(-45deg, rgba(137, 37, 244, 0) 0%, rgba(137, 37, 244, 0.5) 100%);
  background: -ms-linear-gradient(-45deg, rgba(137, 37, 244, 0) 0%, rgba(137, 37, 244, 0.5) 100%);
  background: linear-gradient(135deg, rgba(137, 37, 244, 0) 0%, rgba(137, 37, 244, 0.5) 100%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 100px;
  overflow: hidden;
}

.err-slot {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
}

img {
  width: 100%;
}

h1 {
  color: $color-text-white;
  font-weight: 400;
}

p {
  margin-top: 10px;
  font-size: 1.75rem;
  font-weight: 300;
  color: $color-text-white;
}

a.redirect {
  height: 70px;
  display: flex;
}

.jwbtn {
  width: 220px;
}
</style>

<style lang="stylus" scoped>
@media only screen and (min-width: 0px) and (max-width: 640px) {
  .error-page-container {
    padding: 50px;
  }
}

@media only screen and (min-width: 0px) and (max-width: 480px) {
  h1 {
    font-size: 1.25rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
