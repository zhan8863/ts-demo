//交叉类型
// interface IA {
//   name : string;
//   age : number;
// }
// interface IB {
//   age : number;
//   height : number;
// }
// let func = <T, U>(first: T, second: U) : T & U => {
//   return Object.assign(first, second)
// }
// const o = func<IA,IB>({name:'cxh',age:12},{age:123,height:180})

// 下面是来自官方文档的例子
// function extend<T, U>(first: T, second: U): T & U {
//   let result = <T & U>{};
//   for (let id in first) {
//       (<any>result)[id] = (<any>first)[id];
//   }
//   for (let id in second) {
//       if (!result.hasOwnProperty(id)) {
//           (<any>result)[id] = (<any>second)[id];
//       }
//   }
//   return result;
// }

// class Person {
//   constructor(public name: string) { }
// }
// interface Loggable {
//   log(): void;
// }
// class ConsoleLogger implements Loggable {
//   log() {
//       // ...
//   }
// }
// var jim = extend(new Person("Jim"), new ConsoleLogger());
// var n = jim.name;
// jim.log();


//联合类型
// const a = (arg1: string, arg2: any) => { // 在代码中可能要使用string 或 number 的 arg2 ，如果传入 any，编辑器将检测不到错误，可使用联合类型
//   if(typeof arg2 === 'string') {
//     return arg1 + arg2 + 1
//   }
//   if(typeof arg2 === 'number') {
//     return arg1 + arg2
//   }
//   return ''
// }
// a('a', true)

// 另一个联合类型的示例
// interface IA {
//   name: string
//   age: number
// }
// interface IB {
//   name: string
//   address: string
// }
// const f = (): IA | IB => {
// }
// 联合类型只能是两个或多个中共同存在的东西
// f.name
// f.age

//除可以使用类型外，还可使用固定的值
// const fun = (arg: 'a' | 'b' | 10) => {}


// 索引类型查询操作符 keyof X
// type O = {
//   name: string
//   age: number
// }
// const obj: O = {
//   name: 'a',
//   age: 10
// }
// const f = (key: any) => { //直接使用 any
//   return obj[key]
// }
// const g = f('name') // 不做任何较验，会得到 any 的返回类型
// const h = f('a') // 传入一个obj中不存在的属性时

// const f = (key: keyof O) => { // 使用 keyof 关键字，限定 key 的范围
//   return obj[key]
// }
// const g = f('name') 
// const h = f('a') //错误

// const f = <T extends keyof O>(key: T): O[T]  => { //强大的检查
//   return obj[key]
// }
// const g = f('name') //得到正确类型

// 再做一个小变换
// const f = <T extends keyof O>(key: T): O[T][]  => { //代表返回指定的数组
//   return [obj[key]]
// }
// const g = f('name') //得到正确类型







export default {}