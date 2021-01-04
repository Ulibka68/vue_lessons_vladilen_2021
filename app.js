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
        },
        addNewNote() {
            this.notes.push(this.inputValue);
            this.inputValue='';
        },
        inputKeyPress(event) {
            if (event.key === 'Enter') {
                this.addNewNote();
            }
        }

    }
}
Vue.createApp(App).mount("#app");

