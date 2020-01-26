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
      <div class="leftToolbar">
        <div class="image-wrapper">
          <nuxt-link :to="localePath({ name: 'index' })">
            <img src="~/assets/img/logo.png" />
          </nuxt-link>
        </div>
        <div class="version">Version {{ getVersion }}</div>
        <div class="searchWrapper">
          <v-text-field
            class="inputSearch"
            append-icon="mdi-search-web"
          ></v-text-field>
          <jw-button class="btn round jwbtn-pink">search</jw-button>
        </div>
      </div>
      <v-tabs align-with-title background-color="transparent" optional>
        <v-tab>{{ $t("links.myCart") }}</v-tab>
        <v-tab>{{ $t("links.myFavorite") }}</v-tab>
        <v-tab>{{ $t("links.register") }}</v-tab>
        <v-tab @click="openLoginModal()">{{ $t("links.login") }}</v-tab>
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
      <Login />
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Login from "~/components/Login.vue";
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
          icon: "mdi-home",
          title: "Home",
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
  },
  components: {
    Login,
    VuetifyLogo,
    language
  },
  computed: {
    ...mapGetters(["version"]),
    getVersion() {
      if (process.env.NODE_ENV === "development") return this.version + " dev";
      return this.version;
    }
  },
  methods: {
    ...mapActions(["showLoginModal"]),
    openLoginModal() {
      this.showLoginModal();
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
.leftToolbar {
  max-width 100%
  align-items: center
  display flex
  justify-content center
  width 100%
}

.v-toolbar__content .image-wrapper {
  height: 70%;
  width: 6%;

  img {
    width: 100%;
    height: 100%;
  }
}
.version {
  margin-left: 10px;
  color : $color-text-grey;
  width 40%
  justify-content center
}
.searchWrapper {
  justify-content: flex-end
  display inline-flex
  width 60%;
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
