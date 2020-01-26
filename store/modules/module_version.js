const state = () => ({
  version: "0.0.1"
});

const getters = {
  version: state => state.version
};

const version = {
  state,
  getters
};

export default version;
