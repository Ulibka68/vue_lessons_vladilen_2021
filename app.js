Vue.createApp({
    data : () => ({
        title : 'Заголовок 3',
        myHtml: '<h1>Vue 3 APP</h1>',
        person: {
            firstName : 'Гайрат',
            lastName : 'Власов',
            age : 26
        },
        items : [1,2,8,22,68]
    })
}).mount("#app");