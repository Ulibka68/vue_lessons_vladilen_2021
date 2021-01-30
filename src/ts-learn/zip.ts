declare global {
  interface Array<T> {
    zip<U>(list: U[]): [T, U][];
  }
}

// Объявляем функцию tuple, которую также используем для построения
// типа кортежа
// tuple получает переменное число параметров ts.
// Поскольку T описывает оставшийся параметр, TypeScript выводит для него тип кортежа. ❹
// tuple возвращает значение того же типа кортежа, который был выведен
// для ts. ❺ Функция возвращает тот же аргумент, который был ей передан. Вся магия в типах.
//   Воспользуйтесь этой техникой, когда в коде присутствует много кортежных типов.
export function tuple<T extends unknown[]>(...ts: T): T {
  return ts;
}

console.log("-----  tuple -----------");
const a = tuple(1, true, "asd"); // [number, boolean] ❶
console.log(a);
// const b: typeof a = [2, "a"]; // TS2322: Type 'string' is not assignable to type 'boolean'.
// const b1: typeof a = [2, false, "asd"]; // TS2741: Property '2' is missing in type '[number, false]' but required in type '[number, boolean, string]'.

// Сообщаем TypeScript о .zip
interface Array<T> {
  zip<U>(list: U[]): [T, U][];
}
// Реализуем .zip
Array.prototype.zip = function<T, U>(this: T[], list: U[]): [T, U][] {
  return this.map((v, k) => tuple(v, list[k]));
};
