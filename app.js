Vue.createApp({
    data : () => ({
        title : 'Заголовок 3',
        myHtml: '<h1>Vue 3 APP</h1>',
        person: {
            firstName : 'Гайрат',
            lastName : 'Власов',
            age : 26
        },
        items : [8,22,68,5,999]
    }),
    computed : {
        evenItems() {
            return this.items.filter( i => i % 2 === 0);
        }
    }
}).mount("#app");