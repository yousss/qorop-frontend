const ADD_NEWS = 'ADD_NEWS'

const state = {
    news: []
};

const getters = {
    news: state => state.news
}

const mutations = {
    [ADD_NEWS] (state, res) {
        state.news = res
    }
}

const actions = {
    async getAnnoucement ({ commit }) {
        try {
            let announcement = await this.$axios.$post('/service/info/announcement/getList', {
                "sorts": [
                    {
                        "columnName": "addTime",
                        "orderType": "desc"
                    }
                ]
            })
            commit('ADD_NEWS', announcement.data)
        } catch (e) {
            console.error('announcement error', e);
        }
    }
}

const announcement = {
    state,
    getters,
    mutations,
    actions
}

export default announcement;