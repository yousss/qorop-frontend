<template>
  <v-dialog v-model="show" max-width="600px" width="80%" content-class="jwModal" scrollable>
    <div class="jwModal-wrapper">
      <v-card>
        <v-icon class="closeBtn" @click="close()">mdi-close</v-icon>    
        <v-card-title>
          <h3><slot name="header"></slot></h3>
        </v-card-title>
        <v-card-text>
          <slot></slot>
        </v-card-text>
      </v-card>
    </div>
  </v-dialog>
</template>

<script>
import { bus } from "@/store/services/bus";

export default {
  name: "JwModal",
  data () {
    return {
      show: false
    }
  },
  created () {
    bus.$on('showModal', () => {
      this.$store.state.blur = true
      this.show = true
    })
  },
  methods: {
    close () {
      this.show = false;
    }
  },
  watch: {
    'show': function (val) {
      if (!val) {
        this.$store.state.blur = false;
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/variables.styl';

.jwModal-wrapper {
  .card {
    position: relative;
    border-radius: 10px;
    padding: 40px;
    background-color: $secondary;

    .card__title {
      text-align: center;

      h3 {
        color: $color-grey;
        text-align: center;
        width: 100%;
        font-size: 1.4rem;
        margin-bottom: 20px;
      }
    }

    .card__text {
      padding: 0;
      color: #F1F1F1;
      padding: 0 50px;
      font-size: 1rem;
    }

    .closeBtn {
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 1rem;
      color: $color-grey;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        color: white;
        transform: rotate(90deg);
      }
    }
  }
}
</style>


<style lang="stylus">
@import '~assets/variables.styl';

@media only screen and (min-width: 0px) and (max-width: 1600px) {
}

@media only screen and (min-width: 0px) and (max-width: 1300px) {
}

@media only screen and (min-width: 0px) and (max-width: 1280px) {
}

@media only screen and (min-width: 0px) and (max-width: 960px) {
  .jwModal-wrapper .card {
    padding: 30px;
  }
}

@media only screen and (min-width: 0px) and (max-width: 800px) {
}

@media only screen and (min-width: 0px) and (max-width: 640px) {
  .jwModal-wrapper .card .card__text {
    padding: 0 25px;
  }
}

@media only screen and (min-width: 0px) and (max-width: 480px) {
  .jwModal-wrapper .card {
    padding: 15px;
  }

  .jwModal-wrapper .card .card__title h3 {
    font-size: 1.2rem;
  }

  .jwModal-wrapper .card .card__title {
    padding: 10px 5px;
    padding-top: 40px;
  }

  .jwModal-wrapper .card .card__text {
    padding: 0 15px;
  }
}
</style>