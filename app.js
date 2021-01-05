const h = Vue.h;

const app = Vue.createApp({
    data() {
        return {
            title: 'data title'
        }
    },
    render() {
        return h('div',{class : 'card center'},
            [
                h('h1',{},'h1 text '+this.title),
                h('button',
                    {class: 'btn', onclick: this.changeTitle},
                    'Изменить')
            ]);
    },
    methods: {
        changeTitle() {
            this.title = 'changeTitle';
        }
    },
    beforeCreate() {
        console.log('Первое событие после Init');
    }
});

app.mount('#app');
//
// `
//     <div class="card center">
//         <h1>Это из свойства template {{title}}</h1>
//         <button class="btn"  @click="title='новый title'" >Изменить</button>
//     </div>
//     `)