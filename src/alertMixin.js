// можем описать любые свойства vue приложения
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
