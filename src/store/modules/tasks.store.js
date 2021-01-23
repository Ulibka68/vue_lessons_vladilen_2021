export default {
  namespaced: true,

  /*
  В tasklist лежат записи вида

  title: "",
  date: "",
  description: "",
  status: "",
  key:"MRi0CryREnCRqqHtsry"
  */

  state: () => ({
    taskList: [],
  }),

  mutations: {
    addNewTask(state, newTask) {
      state.taskList.push(newTask);
    },
    // add(state, payload) {
    //   state.counter += payload.value; // redux style
    // },
  },
  getters: {
    counter(state) {
      if (state.counter > 50) return 0;
      return state.counter;
    },
    doubleCounter(_, getters) {
      return getters.counter * 2;
    },
    doubleCounterGlob(_, getters, rootState, rootGetters) {
      return rootGetters.uppercaseTitle + " " + getters.counter * 2;
    },
  },
  actions: {
    incrementAsync({ commit }, payload) {
      console.log("incrementAsync start");
      setTimeout(() => {
        commit({ type: "add", ...payload });
        console.log("incrementAsync end");
      }, 500);
    },
    incrementAsyncDelay({ commit }, { value, delay }) {
      console.log("incrementAsync start");
      setTimeout(() => {
        commit({ type: "add", value });
        console.log("incrementAsync end");
      }, delay);
    },
  },
};
