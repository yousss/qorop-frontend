<template>
  <v-carousel
    cycle
    hide-delimiter-background
    hide-delimiters
    :show-arrows="false"
    class="carousel-container"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      transition="fade"
      reverse-transition="fade"
    >
      <v-sheet
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <img :src="loadImage(slide)" /> 
          <div class="display-title">Nature Inspired</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data () {
    return {
      slides: [
        'main-home-slider-img-1',
        'main-home-slider-img-2',
        'main-home-slider-img-3'
      ],
    }
  },

  methods: {
    loadImage (imageSrc) {
      try {
        return require(`~/assets/img/${imageSrc}.jpg`)
      } catch (error) {
        console.log(error)
        return
      }
    },

  },

}
</script>
<style lang="stylus" >
@import '~assets/variables.styl';

.carousel-container {
  height: 700px !important;

  img {
    height: 100%;
    width: 100%;
  }

  .v-carousel__item {
    height: 100% !important;
  }

  .fade-enter-active {
    transform-origin: 50% 65%;
    transition: transform 10s, filter 3s ease-in-out;
    filter: brightness(150%);
    transform: scale(1.3);
  }

  .fade-enter {
    filter: brightness(100%);
    transform: scale(1);
  }

  .display-title {
    color: $color-text-white-light;
    font-family: 'Dancing Script';
    position: absolute;
    font-size: 9rem;
  }
}
</style>