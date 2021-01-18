import { createStore } from "vuex";

export default createStore({
  state() {
    return { counter: 1 };
  },
  mutations: {
    incrCounter(state) {
      state.counter++;
    },
    add(state, payload) {
      // console.log(payload);
      // state.counter += payload;
      state.counter += payload.value; // redux style
    },
  },
});
