// можем описать любые свойства vue приложения ы
export default {
  data() {
    return { alert: false };
  },
  methods: {
    toggleAlert() {
      this.alert = !this.alert;
    },
  },
};
