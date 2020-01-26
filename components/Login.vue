<template>
  <div class="text-center">
    <v-dialog
      v-model="loginModal"
      persistent
      max-width="450px"
      width="85%"
      transition="fade"
      content-class="loginModal"
    >
      <div class="loginModal-wrapper">
        <v-icon class="closeBtn" @click="closeLoginModal()"
          >mdi-close-circle-outline</v-icon
        >
        <h2><v-icon>mdi-lock</v-icon> {{ $t("auth.login.login") }}</h2>
        <v-form @submit.prevent="$v.$touch()" ref="form">
          <div class="form-group">
            <jw-input
              v-model="form.username"
              name="username"
              :handler="$v"
              :formData="form"
              :floatLabel="$t('auth.login.username')"
              type="text"
              @change="inputChange()"
            />
          </div>
          <div class="form-group pwWrap">
            <jw-input
              v-model="form.password"
              name="password"
              :handler="$v"
              :formData="form"
              :floatLabel="$t('auth.login.password')"
              type="password"
              @change="inputChange()"
            />
          </div>
          <jw-button
            class="jwbtn-red"
            @click.native="submit()"
            :loading="loginPending"
            >{{ $t("auth.login.btn") }}</jw-button
          >
        </v-form>
        <div class="login-footer">
          <p>
            {{ $t("auth.login.notMember") }}
            <nuxt-link :to="localePath('SignUp')" class="signUp">{{
              $t("auth.login.joinNow")
            }}</nuxt-link>
          </p>
          <p class="forgotPassword" @click="openForgotPassword()">
            {{ $t("auth.login.forgotPassword") }}
          </p>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
import { bus } from "@/store/services/bus";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        errorMessages: {
          username: {
            required: "auth.login.errMsg.username.required"
          },
          password: {
            required: "auth.login.errMsg.password.required"
          }
        }
      },
      usernamePwError: false,
      usernamePwErrorText: ""
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  computed: {
    ...mapGetters(["loginModal"])
  },
  methods: {
    ...mapActions(["closeLoginModal"]),
    openForgotPassword() {
      this.$store.commit("LOGIN_MODAL_DISABLE");
      setTimeout(() => {
        this.openForgotPasswordModal();
      }, 80);
    },
    showError(err) {
      this.$store.commit("LOADER_DISABLE");
      let errorData = [
        {
          color: "error",
          text: err
        }
      ];
      bus.$emit("showNotification", errorData);
    },
    submit() {
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        return true;
      } else {
        this.login({
          username: this.form.username,
          pwd: this.form.password,
          deviceType: 0
        })
          .then(res => {})
          .catch(err => {});
      }
    },

    inputChange() {
      this.usernamePwError = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/variables.styl';

.loginModal-wrapper{
  background-color: $color-white;
  padding: 20px 60px;
  border-radius: 10px;
  position: relative;
  .form-group{
    .errorWrapper{
      text-align: right;
      font-size: 12px;
      margin-top: -15px;
      .loginError{
        padding-right: 10px;
        color: $color-red
      }
    }
  }
  .pwWrap{
    min-height: 68px;
  }
  .closeBtn{
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 2.5rem;
    color: $color-text-grey;
    transition: all .3s ease;
    cursor pointer
    &:hover{
      color: $color-text-red;
      transform: rotate(90deg);
    }
  }
  h2{
    text-align: center;
    color: $color-text-grey;
    margin: 20px;
    i{
      color: $color-text-grey;
      margin-top: -5px;
    }
  }
  form{
    text-align: center
    .jwbtn{
      min-width: 150px;
    }
  }

  .login-footer{
    margin-top: 20px;
    text-align: center;
    font-size: 0.9rem;
    color: $color-text-grey;
    p{
      margin: 5px 0;
    }

    .forgotPassword{
      color: $color-text-grey;
      transition: all .3s ease;
      cursor: pointer;
      &:hover{
        color: $color-text-yellow;
      }
    }
  }
}
</style>

<style lang="stylus" scoped>
@import '~assets/variables.styl';

@media only screen and (min-width: 0px) and (max-width: 480px){
  .loginModal-wrapper{
    padding: 10px 30px;

    h2{
      margin: 10px;
    }
    .login-footer{
      margin-top: 20px;
    }
  }
}
</style>
