<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="localePath({ name: item.to })"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      flat
      max-height="500"
      color="red"
      elevation-on-scroll
    >
      <v-app-bar-nav-icon color="black" @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon color="black"
          >mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon
        >
      </v-btn>
      <div class="image-wrapper">
        <nuxt-link :to="localePath({ name: 'index' })">
          <img src="~/assets/img/logo.png" />
        </nuxt-link>
      </div>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <div class="searchWrapper">
        <v-text-field
          class="inputSearch"
          append-icon="mdi-search-web"
        ></v-text-field>
        <jw-button class="btn round jwbtn-pink">search</jw-button>
      </div>
      <v-tabs align-with-title background-color="transparent" optional>
        <v-tab>{{ $t("links.myCart") }}</v-tab>
        <v-tab>{{ $t("links.myFavorite") }}</v-tab>
        <v-tab>{{ $t("links.register") }}</v-tab>
        <v-tab>{{ $t("links.login") }}</v-tab>
      </v-tabs>
      <language />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import carousel from "~/components/carousel/index.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import language from "~/components/language/lang.vue";

export default {
  data() {
    return {
      users: [],
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "index"
        },
        {
          icon: "mdi-chart-bubble",
          title: "About",
          to: "about"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  mounted() {
    this.$fbCustomerChat;
    console.log(this.isAuthenticated);
    this.getUsers();
  },
  components: {
    carousel,
    VuetifyLogo,
    language
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  },
  methods: {
    ...mapActions(["checkAxiosTest", "checkLogin"]),
    getUsers() {
      this.checkAxiosTest()
        .then(res => {
          this.users = res;
        })
        .catch(err => {
          console.log(err);
        });

      this.checkLogin();
    }
  }
};
</script>
<style lang="stylus">
@import '~assets/variables.styl';

.v-application {
  font-family: $body-font-family;
}

.v-tabs {
  .v-slide-group__content {
    display: flex;
    justify-content: flex-end;
  }
}

.v-toolbar__content .image-wrapper {
  height: 70%;
  width: 6%;

  img {
    width: 100%;
    height: 100%;
  }
}

.searchWrapper {
  margin-left 10%
  justify-content: flex-end
  display inline-flex
  width 69%;
}

.v-toolbar__content .v-btn__content {
  .v-icon {
    color: $color-text-black;

    &:hover {
      color: $color-text-pink-1;
    }
  }
}
</style>
