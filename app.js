const App = {
    data() {
        return {
            placeholderString : "Введите заметку",
            title : 'Список заметок',
            inputValue: '',
            notes: ['Заметка1','Заметка2']
        }
    },
    methods: { // набор методов в HTML
        inputChangeHandle(event){
            this.inputValue = event.target.value;
        }

    }
}
Vue.createApp(App).mount("#app");

