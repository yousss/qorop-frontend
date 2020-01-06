import Vuex from "vuex";
import auth from "~/store/modules/module_auth";
import sysConfig from "~/store/modules/module_config";
import lang from '~/store/modules/module_lang';
import jwtAuth from '~/store/modules/module_jwtAuth'


const LOADER_ENABLE = 'LOADER_ENABLE';
const LOADER_DISABLE = 'LOADER_DISABLE';
const START_REFRESH = 'START_REFRESH';
const END_REFRESH = 'END_REFRESH';
const LOGIN_MODAL_ENABLE = 'LOGIN_MODAL_ENABLE'
const LOGIN_MODAL_DISABLE = 'LOGIN_MODAL_DISABLE'
const OPEN_FORGOT_PASSWORD_MODAL = 'OPEN_FORGOT_PASSWORD_MODAL'
const CLOSE_FORGOT_PASSWORD_MODAL = 'CLOSE_FORGOT_PASSWORD_MODAL'

const createStore = () => {
    return new Vuex.Store({
        state: {
            refreshing: false,
            loader: false,
            blur: false,
            loginModal: false,
            modalDark: false,
            forgotPasswordModal: false,
        },
        mutations: {
            [LOADER_ENABLE] (state, status) {
                state.loader = true
                state.modalDark = status ? true : false;
            },
            [LOADER_DISABLE] (state) {
                state.loader = false
                state.modalDark = false;
            },
            [START_REFRESH] (state) {
                state.refreshing = true
            },
            [END_REFRESH] (state) {
                state.refreshing = false
            },
            [LOGIN_MODAL_ENABLE] (state) {
                state.loginModal = true;
                state.blur = true;
            },
            [LOGIN_MODAL_DISABLE] (state) {
                state.loginModal = false
                state.blur = false
            },
            [OPEN_FORGOT_PASSWORD_MODAL] (state) {
                state.forgotPasswordModal = true
                state.blur = true
            },
            [CLOSE_FORGOT_PASSWORD_MODAL] (state) {
                state.forgotPasswordModal = false
                state.blur = false
            },
        },
        getters: {
            loader: state => state.loader,
            refreshing: state => state.refreshing,
            loginModal: state => state.loginModal,
            forgotPasswordModal: state => state.forgotPasswordModal,
        },
        actions: {
            refresh ({ commit, dispatch }) {
                commit(START_REFRESH)
                Promise.all([
                    dispatch('getMailCount'),
                    dispatch('getBalance'),
                ]).then(x => {
                    commit(END_REFRESH)
                })
            },
            openloginModal ({ commit }) {
                commit(LOGIN_MODAL_ENABLE)
            },
            closeloginModal ({ commit }) {
                commit(LOGIN_MODAL_DISABLE)
            },
            openForgotPasswordModal ({ commit }) {
                commit(OPEN_FORGOT_PASSWORD_MODAL)
            },
            closeForgotPasswordModal ({ commit }) {
                commit(CLOSE_FORGOT_PASSWORD_MODAL)
            },
            setLogs ({ commit, state }, logData) {
                try {
                    let data = {
                        product: "Siam99",
                        is_authenticated: state.auth.isAuthenticated ? '1' : '0',
                        username: state.auth.isAuthenticated ? state.auth.username : '',
                        ...logData
                    }

                    return this.$axios.$post('/jwlogs/add', { data }).catch(e => console.log(e.response))
                } catch (e) {
                    console.log('log error', e);
                }
            },
            errorLogs ({ dispatch }, error) {
                let logData = {
                    category: 'API-Error',
                    code: error.code,
                    log_detail: {
                        error: error.error
                    },
                    flag: 'error'
                }

                dispatch('setLogs', logData)
            }
        },
        modules: {
            auth,
            sysConfig,
            lang,
            jwtAuth
        }
    });
}

export default createStore