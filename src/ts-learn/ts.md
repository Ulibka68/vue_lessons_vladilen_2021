
TypeScript  поддерживает  динамический  импорт  только  в  режиме модуля esnext. 


https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions


https://dev.to/3vilarthas/vuex-typescript-m4j

type Namespaced<T, N extends string> = {
[P in keyof T & string as `${N}/${P}`]: T[P]
}

type NamespacedMutations = Namespaced<ArticleModuleMutations, "atricle">


Небольшой дискусс по поводу типизации Vuex не принес ответа на животрепещущий вопрос о типизации Vuex.

Работающий подход для Vuex 4 с понятными типами описан в этой статье:
https://dev.to/3vilarthas/vuex-typescript-m4j
здесь приведен gist с большим примером:
https://gist.github.com/soerenmartius/5f69fc92c29cd8c3989ca57e6ce3ac27
Единственный минус - большое количество дополнительного кода

Здесь задан вопрос про типизацию Vuex 4 с пятью разнообразными походами к типизации
https://stackoverflow.com/questions/64080549/using-vuex-4-modules-in-vue-3-with-typescript-and-how-to-fix-cyclical-dependenc

Вот тут реализован подход на основе декораторов - но нет уверенности что он работает с Vuex 4
https://championswimmer.in/vuex-module-decorators/

Хотелось бы узнать какой подход к типизации Vuex 4 применяте Вы ?

========================
Решил изучить Vue 3 + Vuex 4
Нессмотря на то что везде написано что Vue 3 переписано на typescript меня сильно удивило то, что Vuex 4 написан на чистом js соответственно типизация из коробки отсутствует.

Работающий подход для Vuex 4 с понятными типами описан в этой статье:
https://dev.to/3vilarthas/vuex-typescript-m4j

Вот тут реализован подход на основе декораторов - но нет уверенности что он работает с Vuex 4
https://championswimmer.in/vuex-module-decorators/

Пробовал самостоятельно что то придумать для типизации конструкции вида: store.commit('addCount',{parm : 10}) но не сильно преуспел.

Мне почему то кажется что уже все придумано в других библиотеках - посоветуйте пожалуйста - куда посмотреть ?

P.S. Стоит ли использовать декораторы в настоящее время ?