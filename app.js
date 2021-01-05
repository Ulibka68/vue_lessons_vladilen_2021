Vue.createApp({
    data() {
        return {
            title: 'data title'
        }
    },
    template: `
    <div class="card center">
        <h1>Это из свойства template {{title}}</h1>
        <button class="btn"  @click="title='новый title'" >Изменить</button>
    </div>
    `
}).mount('#app');