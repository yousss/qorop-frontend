const cookieparser = process.server ? require('cookieparser') : undefined
const Cookie = process.client ? require('js-cookie') : undefined

const SET_AUTH = 'SET_AUTH'
const SET_LOGOUT = 'SET_LOGOUT'

const state = () => {
    return {
        auth: null,
        isAuthenticated: false
    }
}
const mutations = {
    [SET_AUTH] (state, auth) {
        state.auth = auth
    },
    [SET_LOGOUT] (state, auth) {
        state.auth = auth
    }
}
const actions = {
    nuxtServerInit ({ commit }, { req }) {
        let auth = null
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                auth = JSON.parse(parsed.auth)
            } catch (err) {
                console.log(err)
                // No valid cookie found
            }
        }
        commit(SET_AUTH, auth)
    },

    login ({ commit }, payload) {
        try {
            let { data: token } = this.$axios.$post('/api/v1/auth');
            const auth = {
                accessToken: token
            }
            commit(SET_AUTH, auth)
            Cookie.set('auth', auth)
        } catch (error) {
            let code = error.response.code;
            switch (code) {
                case 'auth.user.fail':
                    throw "auth.user.fail";
                case 'auth.user.account.frozen':
                    throw "auth.user.account.frozen";
                default:
                    throw "unknown"
            }
        }

    },

    logout ({ commit }) {
        commit(SET_LOGOUT, null)
    }

}

const jwtAuth = {
    state,
    mutations,
    actions
}

export default jwtAuth