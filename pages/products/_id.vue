<template>
  <div class="productCardDetail">
    <v-container>
      <v-layout row justify-center>
      <div class="imageWrapper col-lg-6 col-md-6 col-sm-6 col-12">
        <img width="100%" src="~assets/img/product-1.jpg" />
      </div>
      <div class="productContent col-lg-6 col-md-6 col-sm-6 col-12">
        <div class="productTitle">
          <h1>Lorem ipsum</h1>
        </div>
        <div class="rating">
          <v-rating
            v-model="rating"
            background-color="pink lighten-3"
            color="pink"
          ></v-rating>
        </div>
        <div class="price">
          <h2>$300</h2>
        </div>
        <div class="detail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus vestibulum
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus vestibulum
        </div>
        <div class="btnWrapper">
          <div class="addToCartInputBox">
            <v-text-field
            v-model="qty"
            solo
          ></v-text-field>
          <v-icon>mdi-plus</v-icon>
          <v-icon>mdi-minus</v-icon>
          </div>
          <JwButton class="btn round jwbtn-pink">Add to cart</JwButton>
        </div>
      </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import productCard from "~/components/product/index.vue";
export default {
  data() {
    return {
      rating: 4,
      qty: 1,
      proudctId: this.$route.id,
      products: [
        { id: 1, img: "product-1" },
        { id: 2, img: "product-2" },
        { id: 3, img: "product-3" },
        { id: 4, img: "product-4" }
      ]
    };
  },
  computed: {
    product() {
      return this.products.map(product => product.id === this.proudctId);
    }
  },
  components: {
    productCard
  },
  methods:{
    appendIconCallback () {
      alert('12ddddddddd')
    },
    onPlus () {
      alert('ddddddddddddd')
    },
  }
};
</script>

<style lang="stylus">
@import '~assets/variables.styl';
.productCardDetail {
  .rating {
    .v-rating {
      i {
        font-size: 1rem;
      }
    }
  }
  .productContent {
    .price {
      h2 {
        color: $color-text-grey;
      }
    }
    .btnWrapper {
      display: flex;
      div {
        width: 70%;
      }
      .addToCartInputBox {
        display: flex;

      }
      button {
        // height: 60%;
      }
    }
  }
}
@media only screen and (min-width: 0px) and (max-width: 960px) {
  .productCardDetail{
    .productContent{
      .btnWrapper>button {  
        height: 42%;
        width: 60%;
      }
    }
  }
}
</style>
