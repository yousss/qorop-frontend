<template>
  <div class="product-container">
    <v-card class="mx-auto" max-width="700">
      <v-img
        class="white--text align-end"
        height="100%"
        :src="loadImage(dataSrc.img)"
        alt="product image loading"
      >
        <JwButton
          class="btn round jwbtn-red"
          @click.native="onProductClicked(dataSrc.id)"
          >View</JwButton
        >
        <v-rating
          v-model="rating"
          background-color="pink lighten-3"
          color="pink"
        ></v-rating>
        <v-card-title>{{ $t("products.title") }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">{{
        $t("products.subtitle")
      }}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ $t("products.text1") }}</div>

        <div>{{ $t("products.text2") }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 2
    };
  },
  props: {
    dataSrc: {
      type: Object
    }
  },
  methods: {
    loadImage(imageSrc) {
      try {
        return require(`~/assets/img/${imageSrc}.jpg`);
      } catch (error) {
        console.log(error);
        return;
      }
    },
    onProductClicked(id) {
      this.$router.push(
        this.localePath({ name: "products-id", params: "${id}" })
      );
    }
  }
};
</script>

<style lang="stylus" scoped>
.product-container {
  .v-card__title {
    color: #de6c64;
  }
  button {
    display: none;
  }

  &:hover {
    button {
      display: initial !important;
    }
  }
}
</style>
