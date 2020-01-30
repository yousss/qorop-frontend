<template>
  <div class="text-center">
    <v-dialog
      v-model="registerModal"
      persistent
      max-width="450px"
      width="85%"
      transition="fade"
      content-class="loginModal"
    >
      <div class="loginModal-wrapper">
        <v-icon class="closeBtn" @click="$emit('update:registerModal', false)"
          >mdi-close-circle-outline</v-icon
        >
        <h2><v-icon>mdi-lock</v-icon> {{ $t("auth.register.register") }}</h2>
        <v-form @submit.prevent="$v.$touch()" ref="form">
          <div class="form-group">
            <jw-input
              v-model="form.username"
              name="username"
              :handler="$v"
              :formData="form"
              :floatLabel="$t('auth.register.username')"
              type="text"
            />
            <jw-input
              v-model="form.email"
              name="email"
              :handler="$v"
              :formData="form"
              :floatLabel="$t('auth.register.email')"
              type="text"
            />
          </div>
          <div class="form-group pwWrap">
            <jw-input
              v-model="form.password"
              name="password"
              :handler="$v"
              :formData="form"
              :floatLabel="$t('auth.register.password')"
              type="password"
            />
          </div>
          <jw-button
            class="jwbtn-red"
            @click.native="submit()"
            :loading="loginPending"
            >{{ $t("auth.register.btn") }}</jw-button
          >
        </v-form>
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
      loginPending: false,
      form: {
        username: "",
        password: "",
        email: "",
        errorMessages: {
          username: {
            required: "auth.register.errMsg.username.required"
          },
          password: {
            required: "auth.register.errMsg.password.required"
          },
          email: {
            required: "auth.register.errMsg.email.required"
          }
        }
      }
    };
  },
  props: {
    registerModal: {
      type: Boolean
    }
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      },
      email: {
        required
      }
    }
  },
  mounted() {
    // bus.$on("openRegiserModal", payload => {
    //   this.registerModal = payload;
    // });
  },
  methods: {
    submit() {
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        return true;
      } else {
        this.login({
          username: this.form.username,
          pwd: this.form.password,
          email: this.email
        })
          .then(res => {
            this.loginPending = true;
          })
          .catch(err => {});
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/variables.styl';

.loginModal-wrapper{
  background-color: $color-white-light;
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
