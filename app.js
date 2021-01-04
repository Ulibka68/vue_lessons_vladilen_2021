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

        addNewNote() {
            if (this.inputValue) {
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },
        toUpperCase(item) {
            return item.toUpperCase();
        },
        removeNote(ind, event) {
            this.notes.splice(ind,1);
        },
    },
    computed: {
        dblCntComputed() {
            return this.notes.length * 2;
        }
    },
    watch: {
    //    можно следить за изменениями переменных
    //    создаем метод название которого совпадает с названием переменной
        inputValue(value) {
            console.log('inputValue changed', value);
        //    валидация
            if (value.length > 10) {
                this.inputValue = value.slice(0,9);
            }
        }
    }
}
Vue.createApp(App).mount("#app");

