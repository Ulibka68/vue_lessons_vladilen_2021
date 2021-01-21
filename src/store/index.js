import { createStore, createLogger } from "vuex";

// import counterModule from "@/store/modules/counter";

// import the auto exporter
import modules from "./modules";

const debug = process.env.NODE_ENV !== "production";

const initialState = () => ({
  variable1: 1,
  variable2: 2,
  variable3: 3,
});

export default createStore({
  // modules: { count: counterModule },
  modules,
  state() {
    return {
      appTitle: "Vuex Working",
    };
  },
  getters: {
    uppercaseTitle(state) {
      return state.appTitle.toUpperCase();
    },
  },
  mutations: {
    RESET(state) {
      const newState = initialState();
      Object.keys(newState).forEach((key) => {
        state[key] = newState[key];
      });
    },
  },
  plugins: debug ? [createLogger()] : [], // set logger only for development
});
