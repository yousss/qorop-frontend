const AUTHORIZE = "AUTHORIZE";
const UNAUTHORIZE = "UNAUTHORIZE";
const UNAUTHORIZED = "UNAUTHORIZED";
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const GET_USER_DETAILS = "GET_USER_DETAILS";
const CLEAR_USER_DATA = "CLEAR_USER_DATA";
const SUBSCRIBE_TO_NEWSLETTER = "SUBSCRIBE_TO_NEWSLETTER";
const ERROR_SUBSCRIPTION = "ERROR_SUBSCRIPTION";
const ACCOUNT_FROZEN = "ACCOUNT_FROZEN";

function initialState() {
  return {
    isAuthenticated: false,
    pending: false,
    frozenStatus: false,
    username: "",
    memberID: "",
    user: {
      headers: {
        access_token: "",
        token_type: "",
        client: "",
        expiry: "",
        uid: ""
      },
      fullname: "",
      email: "",
      phone: "",
      gender: "",
      dob: "",
      identityNumber: "",
      facebook: "",
      line: "",
      address: ""
    },
    subscriptionStatus: "",
    loginPending: false,
    lastLoginTime: ""
  };
}

const state = {
  ...initialState(),
  error_unauth: false
};

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  username: state => state.username,
  user: state => state.user,
  lastLoginTime: state => state.lastLoginTime,
  memberID: state => state.memberID,
  error_unauth: state => state.error_unauth,
  loginPending: state => state.loginPending,
  frozenStatus: state => state.frozenStatus,
  subscriptionStatus: state => state.subscriptionStatus
};

const mutations = {
  [LOGIN](state) {
    state.loginPending = true;
  },
  [LOGIN_SUCCESS](state) {
    state.isAuthenticated = true;
    state.error_unauth = false;
    state.loginPending = false;
  },
  [AUTHORIZE](state, payload) {
    state.pending = false;
    state.isAuthenticated = true;
    state.username = payload.username.value;
    state.memberID = payload.memberId.value;
    state.lastLoginTime = payload.lastLoginTime.value;
  },
  [UNAUTHORIZED](state) {
    state.pending = false;
    state.error_unauth = true;
  },
  [UNAUTHORIZE](state) {
    state.pending = false;
    state.isAuthenticated = false;
  },
  [LOGOUT](state) {
    state.isAuthenticated = false;
  },
  [GET_USER_DETAILS](state, payload) {
    state.user.dob = payload.birthday.value;
    state.user.fullname = payload.realName.value;
    state.user.email = payload.email.value;
    state.user.phone = payload.phoneNumber.value;
    state.user.gender = payload.gender.value;
    state.user.identityNumber = payload.identityNumber.value;
    state.user.facebook = payload.facebook.value;
    state.user.line = payload.line.value;
    state.user.address = payload.address.value;
  },
  [CLEAR_USER_DATA](state) {
    const s = initialState();
    Object.keys(s).forEach(key => {
      state[key] = s[key];
    });
  },
  [SUBSCRIBE_TO_NEWSLETTER](state, payload) {
    state.subscriptionStatus = payload;
  },
  [ERROR_SUBSCRIPTION](state) {
    state.subscriptionStatus = "error";
  },
  [ACCOUNT_FROZEN](state) {
    state.frozenStatus = true;
  }
};

const actions = {
  async checkAxiosTest() {
    try {
      return await this.$axios.$get(process.env.POST + "/posts");
    } catch (error) {
      console.log(error);
    }
  },
  async login({ commit, dispatch, state }, creds) {
    try {
      // commit(LOGIN);
      // let {
      //   data: { user }
      // } = await this.$axios.$post("/service/auth/login", creds);
      // await Promise.all([dispatch("checkLogin")]);
      // return user;
    } catch (error) {
      state.loginPending = false;
      if (error.response) {
        let err = error.response.data;
        if (
          err.code === "member.username.noExist" ||
          err.code === "member.password.error" ||
          err.message === "Cannot read property 'Id' of undefined"
        ) {
          throw "api.auth.login.invalid";
        } else if (err.code === "common.disabledAccount") {
          throw "api.auth.login.disabled";
        } else {
          throw "Unknown error on Login! Error status: " +
            err.status +
            " Error Code: " +
            err.code;
        }
      } else {
        throw "api.error";
      }
    }
  },
  async logout({ commit, dispatch }) {
    try {
      // await this.$axios.$post("/service/auth/logout");
      // this.$gtmEvent.gtmAddDataLayer({
      //   ga_c_id: "unknown"
      // });
      // dispatch("clearDataOnUnauthorized");
    } catch (err) {
      console.error("logout error", err);
    }
  },
  async clearDataOnUnauthorized({ commit, dispatch }) {
    try {
      await Promise.all([]);
      commit(LOGOUT);
    } catch (err) {
      console.log(err);
    }
  },
  async checkLogin({ state, commit }) {
    try {
      // let { data } = await this.$axios.$post("/service/member/getOne");
      // this.$gtmEvent.gtmAddDataLayer({
      //   ga_c_id: data.memberId.value
      // });
      // this.$logRocket.identify({
      //   name: data.realName.value,
      //   email: data.email.value,
      //   memberId: data.memberId.value
      // });

      // commit(AUTHORIZE, data);
      // commit(GET_USER_DETAILS, data);
      if (data.status.value === 2) {
        commit(ACCOUNT_FROZEN);
      }
      return data;
    } catch (err) {
      if (err.response) {
        if (
          err.response.status === 401 &&
          err.response.data.code === "common.unauthorized"
        ) {
          commit("UNAUTHORIZE");
          // if(this.$route.name && this.$route.name.split('___')[0]==='account'){
          //   this.$router.push(this.localePath({name: 'index'}));
          // }
        }
      } else {
        console.log("CheckLogin Server Error", err.message);
      }
    }
  },
  checkUsername({ commit }, username) {
    return this.$axios.$post("/service/member/checkUsername", {
      username
    });
  },
  async checkPhoneNumber({ commit }, phoneNumber) {
    try {
      return await this.$axios.$post("/service/member/checkPhoneNumber", {
        phoneNumber
      });
    } catch (err) {
      switch (err.response.data.code) {
        case "member.phone.exist":
          throw "Member.Phone.Exist";
          break;
        default:
          throw "api.unCaught";
          break;
      }
    }
  },
  async getCaptcha({ commit }) {
    let {
      data: {
        captcha: { data }
      }
    } = await this.$axios.$post("/service/auth/captcha");
    let imgString = data.reduce((prev, curr) => {
      return prev + String.fromCharCode(curr);
    }, "");
    let res = `data:image/jpeg;base64,${btoa(imgString)}`;
    return res;
  },
  async signUpNewUser({ dispatch }, userData) {
    try {
      return await this.$axios.$post("/service/member", userData);
    } catch (err) {
      switch (err.response.data.code) {
        case "common.captcha.wrong":
          throw "Captcha.Wrong";
          break;
        case "common.captcha.expired":
          throw "Captcha.Expired";
          break;
        case "member.referee.noExist":
          throw "Member.Referee.NoExist";
          break;
        case "common.parameter.illegal":
          switch (err.response.data.data.field) {
            case "email":
              throw "Member.Email.Invalid";
              break;
            default:
              break;
          }
        case "common.parameter.duplicated":
          switch (err.response.data.data.field) {
            case "email":
              throw "Member.Email.Exist";
              break;
            case "identityNumber":
              throw "Member.identityNumber.Exist";
              break;
            default:
              break;
          }
        case "common.parameter.verification.failed":
          throw "Member.identityNumber.Wrong";
        default:
          dispatch("errorLogs", { code: "EVT-SignUp", error: err.response });
          let logData = {
            category: "SignUp",
            code: "EVT-SignUp",
            log_detail: {
              errMsg: err.response.data
            },
            flag: "error"
          };
          dispatch("setLogs", logData);
          throw "api.unCaught";
          break;
      }
    }
  },
  submitforgotPassword({ commit }, params) {
    // return this.$axios.$post("/service/member/password/reset", params);
  },
  changePassword({ commit }, params) {
    // return this.$axios.$put("/service/member/password", params);
  },
  async updateUser({ commit, state }, userDetails) {
    try {
      let { data } = await this.$axios.$put("/service/member", userDetails);
      commit(GET_USER_DETAILS, data);
    } catch (err) {
      console.error("update user error", err);
      throw err;
    }
  },
  clearUserData({ commit }) {
    commit(CLEAR_USER_DATA);
  },
  error401({ commit }) {
    commit(UNAUTHORIZED);
  },
  async checkNewsLetterSubscription({ commit }, memberId) {
    try {
      const userId = {
        memberId: memberId
      };
      let status = await this.$axios.$post(
        process.env.CMSAPI + "/api/vendor/newsletter/checkstatus",
        userId
      );
      if (status.data) {
        commit(SUBSCRIBE_TO_NEWSLETTER, status.data.status);
      } else {
        commit(SUBSCRIBE_TO_NEWSLETTER, status.code);
      }
    } catch (err) {
      commit(ERROR_SUBSCRIPTION);
    }
  },
  async newsletterSubscription({ commit, dispatch, state }, subscriptionData) {
    try {
      var data = {
        category: "Newsletter",
        code: "EVT-Newsletter"
      };
      await this.$axios.$post(
        process.env.CMSAPI + "/api/vendor/newsletter/subscribe",
        subscriptionData.data
      );

      dispatch("setLogs", {
        ...data,
        flag: "info",
        log_detail: {
          subscription: "Checked",
          userStatus: subscriptionData.status
        }
      });
      return "joined";
    } catch (e) {
      var er = "api.error";
      var err = e.response.data;

      if (err) {
        var errMsg = "";
        var er = "";
        switch (err.message) {
          case "email.subscriber.duplicate":
            er = "Subscriber email already used";
            errMsg = {
              error: "Subscriber email already used"
            };
            break;
          case "subscription.error":
            er = "Error with subscription API";
            errMsg = {
              error: "Error with subscription API"
            };
            break;
          default:
            er = "Something went wrong. Contact Customer Support";
            errMsg = err.message;
            break;
        }
        dispatch("setLogs", {
          ...data,
          flag: "failed",
          log_detail: errMsg
        });
      } else {
        dispatch("setLogs", {
          ...data,
          flag: "failed",
          log_detail: e.response.msg
        });
      }
      commit(ERROR_SUBSCRIPTION);
      throw er;
    }
  },
  async changeNewsletterStatus({ commit, dispatch }, subscriptionData) {
    try {
      await this.$axios.$post(
        process.env.CMSAPI + "/api/vendor/newsletter/status",
        subscriptionData
      );
    } catch (e) {
      let error = "";
      if (e.response.data.message === "user.no.exist") {
        error = "Member subscriber doesn't exist.";
      } else if (e.response.data.message === "status.required") {
        error = "Subscriber status is required";
      } else {
        error = e.response.msg;
      }
      let logData = {
        category: "Newsletter",
        code: "EVT-Newsletter",
        log_detail: {
          error
        },
        flag: "failed"
      };
      dispatch("setLogs", logData);
      throw e;
    }
  }
};

const auth = {
  state,
  getters,
  mutations,
  actions
};

export default auth;
