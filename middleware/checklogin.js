export default async function ({ app, store, redirect }) {
  try {
    // let { data } = await app.$axios.$post('/service/member/getOne')

    // app.$gtmEvent.gtmAddDataLayer({ 'ga_c_id': 'data.memberId.value' });
    // app.$logRocket.identify({
    //   name: data.realName.value,
    //   email: data.email.value,
    //   memberId: data.memberId.value
    // })

    store.commit('AUTHORIZE', data)
    store.commit('GET_USER_DETAILS', data);
    if (data.status.value === 2) {
      store.commit('ACCOUNT_FROZEN');
    }
  } catch (err) {
    app.$gtmEvent.gtmAddDataLayer({ 'ga_c_id': 'unknown' });

    if (err.response) {
      if (err.response.status === 401 && err.response.data.code === 'common.unauthorized') {
        store.commit('UNAUTHORIZE');
        if (app.context.route.name && app.context.route.name.split('___')[0] === 'account') {
          return redirect(301, app.localePath({ 'name': 'index' }))
        }
      }
    } else {
      console.log("CheckLogin Server Error", err)
    }
  }
}