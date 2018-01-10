import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    message: 'hello World!'
  }
});

export default store;
