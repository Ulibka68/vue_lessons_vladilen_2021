# Динамический импорт
У нас к сожалению webpack4

Исходный код конфигурации VUE :  
https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config

Вот тут:  
https://webpack.js.org/guides/lazy-loading/  

Есть ссылка на статью:  
https://vuedose.tips/dynamic-imports-in-vue-js-for-better-performance/

# do this
const MyComponent = () => import("~/components/MyComponent.js");

### Code Splitting With Vue.js And Webpack
https://vuejsdevelopers.com/2017/07/03/vue-js-code-splitting-webpack/
````
import(/* webpackChunkName: "async-component" */ './AsyncComponent.js')  
.then((AsyncComponent) => {  
console.log(AsyncComponent.default.template);  
// Output: <div>Async Component</div>  
});
````

### How to get dynamic imports to work in webpack 4
https://stackoverflow.com/questions/50976936/how-to-get-dynamic-imports-to-work-in-webpack-4
````
I was facing the same issue the fix was:

npm install --save-dev @babel/plugin-syntax-dynamic-import
add following line to .babelrc

"plugins": ["@babel/plugin-syntax-dynamic-import"],

Этого не надо для Babel >= v7.5 
````

````
import(
/* webpackChunkName: "myAwesomeLazyModule" */
/* webpackPreload: true */
"./lazy-one"
);

// Pseudo code for products page
page("products", () => {
  /*
   *  We don't want to execute the import, just the prefetch
   *  That's why we wrap it on a function
   */
  () => import(/* webpackPrefetch: true */ "./subscribe-page");
  // ...
});

lazyButton.onclick = () =>
  import("./lazy-one").then(mod => (lazyButton.innerText = mod.default));
````

### Magic Comments
https://webpack.js.org/api/module-methods/#magic-comments

### Chunk Mode
https://tech.olx.com/webpack-from-zero-to-hero-f64924e4d06

/* webpackMode: "lazy" */

“lazy” (default): Generates a lazy-loadable chunk for each import()ed module.  

“lazy-once”: Generates a single lazy-loadable chunk that can satisfy all calls to import(). The chunk will be fetched on the first call to import(), and subsequent calls to import() will use the same network response. Note that this only makes sense in the case of a partially dynamic statement, e.g. import(`./locales/${language}.json`), where there are multiple module paths that could potentially be requested.

“eager”: Generates no extra chunk. All modules are included in the current chunk and no additional network requests are made. A Promise is still returned but is already resolved. In contrast to a static import, the module isn’t executed until the call to import() is made.

“weak”: Tries to load the module if the module function has already been loaded in some other way (i. e. another chunk imported it or a script containing the module was loaded). A Promise is still returned but, only successfully resolves if the chunks are already on the client. If the module is not available, the Promise is rejected. A network request will never be performed. This is useful for universal rendering when required chunks are always manually served in initial requests (embedded within the page), but not in cases where app navigation will trigger an import not initially served.