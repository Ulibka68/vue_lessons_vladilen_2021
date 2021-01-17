export default {
  install(app, options) {
    let current = "ru";

    console.log(app);
    console.log(options);

    app.config.globalProperties.$alert = (text) => {
      window.alert(text);
    };

    app.config.globalProperties.$i18n = (key) => {
      return key.split(".").reduce((words, k) => {
        return words[k] || "-- UNKNOWN";
      }, options[current]);
    };

    const changeLanguage = (name) => {
      current = name;
    };
    app.provide("changeI18N", changeLanguage);
  },
};
