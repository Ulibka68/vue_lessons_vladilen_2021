
TypeScript  поддерживает  динамический  импорт  только  в  режиме модуля esnext. 


https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions


https://dev.to/3vilarthas/vuex-typescript-m4j

type Namespaced<T, N extends string> = {
[P in keyof T & string as `${N}/${P}`]: T[P]
}

type NamespacedMutations = Namespaced<ArticleModuleMutations, "atricle">