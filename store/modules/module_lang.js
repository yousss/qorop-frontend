const state = () => ({
    locales: ['en', 'kh'],
    locale: 'en'
});

const mutations = {
    SET_LANG (state, locale) {
        if (state.locales.includes(locale)) {
            state.locale = locale
        }
    }
};

const lang = {
    state,
    mutations
}

export default lang