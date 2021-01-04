const App = {
    data() {
        return {
            placeholderString : "Введите заметку",
            title : 'Список заметок',
            inputValue: ''
        }
    },
    methods: { // набор методов в HTML
        inputChangeHandle(event){
            this.inputValue = event.target.value;
        }

    }
}
Vue.createApp(App).mount("#app");

