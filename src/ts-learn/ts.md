# What is the difference between keyof inside and outside of indexer?
[Ссылка](https://stackoverflow.com/questions/53329474/what-is-the-difference-between-keyof-inside-and-outside-of-indexer#:~:text=In%20general%2C%20there%20is%20no,types%20over%20tuples%20and%20arrays.)

### Mapped types on tuples and arrays
[Ссылка](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html)

```javascript
type MapToPromise<T> = { [K in keyof T]: Promise<T[K]> };
type Coordinate = [number, string];

type PromiseCoordinate = MapToPromise<Coordinate>; // [Promise<number>, Promise<string>]

const a7: PromiseCoordinate = [
  new Promise<number>(() => {
    console.log("a");
  }),
  new Promise<string>(() => {
    console.log("a");
  })
];
```

>MapToPromise takes a type T, and when that type is a tuple like Coordinate, only the numeric properties are converted.  
> 
>> In **[number, string]**, there are two numerically named properties: 0 and 1. 
> 
>When given a tuple like that, MapToPromise will create a new tuple where the 0 and 1 properties are Promises of the original type. So the resulting type PromiseCoordinate ends up with the type **`[Promise<number>, Promise<string>]`**.

# ==================





TypeScript  поддерживает  динамический  импорт  только  в  режиме модуля esnext. 


https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions


https://dev.to/3vilarthas/vuex-typescript-m4j

```
type Namespaced<T, N extends string> = {
[P in keyof T & string as `${N}/${P}`]: T[P]
}
```

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

# Markdown
<dl>
  <dt>Список определений</dt>
  <dd>Это то, что люди иногда используют.</dd>

  <dt>Markdown внутри HTML</dt>
  <dd>Работает *не очень** хорошо. Используйте HTML-<em>теги</em>.</dd>
</dl>

Это очень *<span style="color:red"> длинная строка</span>*, но она будет правильно процитирована даже при размещении на нескольких строках. Продолжаем писать, чтобы эта строка не вмещалась на одной строке в любом окне. Кстати, в цитаты можно также размечать с помощью 