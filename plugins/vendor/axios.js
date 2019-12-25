import uuid from "@/store/services/uuid";

export default function ({ $axios, redirect, store }) {
  $axios.onRequest(config => {
    // config.headers.common['access-token'] = store.state.auth.user.headers.access_token
    // config.headers.common['token-type'] = store.state.auth.user.headers.token_type
    // config.headers.common['client'] = store.state.auth.user.headers.client
    // config.headers.common['expiry'] = store.state.auth.user.headers.expiry
    // config.headers.common['uid'] = store.state.auth.user.headers.uid
    if (config.method === 'get') {
      config = {
        ...config,
        cacheRefresh: uuid()
      };
    }
  });

  $axios.onError(error => {
    try {
      let authenticated = store.state.auth.isAuthenticated
      if (error && error.response) {
        const code = parseInt(error.response && error.response.status)
        const msg = error.response.data.code ? error.response.data.code.toLowerCase() : "";
        if (code === 401 && msg === 'common.unauthorized') {
          setTimeout(() => {
            store.dispatch('clearDataOnUnauthorized')
            if (authenticated) store.dispatch('error401')
            return false;
          }, 1000);
        }
      }
    } catch (e) {
      console.log('err');
      throw 'err';
    }
  });
}
