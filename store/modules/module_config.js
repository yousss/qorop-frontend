
const SET_BANK_NUMBER_LIMIT = "SET_BANK_NUMBER_LIMIT";
const TOGGLE_SIDE_DRAWER = "TOGGLE_SIDE_DRAWER";
const TOGGLE_MINI_DRAWER = "TOGGLE_MINI_DRAWER";


const state = {
  bankLimit: null,
  showDrawer: true,
  showMiniDrawer: false
};

const getters = {
  bankLimit: state => state.bankLimit,
  showDrawer: state => state.showDrawer,
  showMiniDrawer: state => state.showMiniDrawer
};

const mutations = {
  [SET_BANK_NUMBER_LIMIT] (state, payload){
    state.bankLimit = parseInt(payload['MEMBER_BANK_QUANTITY']);
  },
  [TOGGLE_SIDE_DRAWER] (state) {
    state.showDrawer = !state.showDrawer
  },
  [TOGGLE_MINI_DRAWER] (state) {
    state.showMiniDrawer = !state.showMiniDrawer
  }
};

const actions = {
  async getBankLimit({ commit, dispatch }){
    try{
      let result =  await dispatch('getSysConfig', ["MEMBER_BANK_QUANTITY"]);
      commit(SET_BANK_NUMBER_LIMIT, result);
    }catch(e){
      console.log(e);
    }
  },
  async getSysConfig({ commit }, parameters){
    try{
      let { data } = await this.$axios.$post('/service/info/system/config/getList', { parameters })
      return data;
    }catch(e){
      console.log(e)
    }
  },
  toggleSideDrawer({ commit }) {
    commit(TOGGLE_SIDE_DRAWER)
  },
  toggleMiniDrawer({ commit }) {
    commit(TOGGLE_MINI_DRAWER)
  }
}

const sysConfig = {
  state, 
  getters, 
  mutations,
  actions
}

export default sysConfig;