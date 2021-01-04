const App = {
    data() {
        return {
            placeholderString : "Введите заметку",
            title : 'Список заметок'
        }
    }
}
Vue.createApp(App).mount("#app");