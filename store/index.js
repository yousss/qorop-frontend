import Vuex from "vuex";
import auth from "~/store/modules/module_auth";
import version from "~/store/modules/module_version";

const LOADER_ENABLE = "LOADER_ENABLE";
const LOADER_DISABLE = "LOADER_DISABLE";
const OPEN_FORGOT_PASSWORD_MODAL = "OPEN_FORGOT_PASSWORD_MODAL";
const CLOSE_FORGOT_PASSWORD_MODAL = "CLOSE_FORGOT_PASSWORD_MODAL";
const TOGGLE_LOGIN_MODAL = "TOGGLE_LOGIN_MODAL";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loginModal: false
    },
    mutations: {
      [TOGGLE_LOGIN_MODAL](state, payload) {
        state.loginModal = payload;
      }
    },
    getters: {
      loginModal: state => state.loginModal
    },
    actions: {
      showLoginModal({ commit }) {
        commit(TOGGLE_LOGIN_MODAL, true);
      },
      closeLoginModal({ commit }) {
        commit(TOGGLE_LOGIN_MODAL, false);
      }
    },
    modules: {
      auth,
      version
    }
  });
};

export default createStore;
