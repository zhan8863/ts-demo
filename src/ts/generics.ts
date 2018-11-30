// 泛型
// ** 自定义泛型结构一般只见于复杂的应用 **

/**
 * 
 * TypeScript 为 JavaScriopt 带来了强类型特性，这就意味着限制了类型的自由度。
 * 同一段程序，为了适应不同的类型，就可能需要写不同的处理函数——而且这些处理函数中所有逻辑完全相同，唯一不同的就是类型——这严重违反抽象和复用代码的原则。
 */

// function a<T>(arg: T): T {
//   return arg;
// }

// 下面是一段 JS 代码
// const b = {
//   string: (arg) => {
//     return 'hello' + arg
//   },
//   number: (arg) => {
//     return 1/arg
//   }
// }

// 这是一个中间件

// const c = val => {
//   // 这是一些其它处理内容
//   return val
// }

// const d = c(b.string('a'))
// const e = c(b.number(10))

/**
 *          SO   什么才是泛型？
 * 泛型就是指定一个表示类型的变量，用它来代替某个实际的类型用于编程，而后通过实际调用时传入或推导的类型来对其进行替换，以达到一段使用泛型程序可以实际适应不同类型的目的。
 * 在调用泛型时，可以使用声明式，也可以直接由编译器自动推导
 */


 // 泛型变量 及 使用

//  const a = <T>(arg: T): T => {
//   console.log(arg.length)
//   return  arg
//  }
// 多个
//  const a = <T, K>(arg: T, arg2: K): T => {
//   return  arg
//  }
//  a(1)


// 泛型类
// 如：实现一个过滤器，过滤器包含 add 方法，add 时过滤掉不符合条件的数据，最终得到所有符合条件的数据

// class Filter {
//   filter = null
//   data = []
//   constructor(filter) {
//     this.filter = filter
//   }
//   add(val) {
//     if (this.filter(val)) {
//       this.data.push(val)
//     }
//   }
//   all() {
//     return this.data
//   }
// }

// const filter = new Filter(v => v > 0)
// filter.add(101)
// filter.add(0)


// 泛型约束
// 由于使用了泛型，导致一个函数或类能够容纳的类型扩展到了无限大，可能会失控，所以会使用到泛型约束
// 一个简单的泛型约束
// <T extends XX>(arg: T): T
// 在这里，extends 并不代表继承，更不代表实现，只是用于约束
// 也就是说   extends 左边的类型变量[T] 实现了右边的类型[XX]，或者是右边类型的子孙类

// const fun = <T>(val: T): T=> {
//   console.log(val.length) // 正是由于 T 可以为任意类型，所以并不能保证 T 就能含有 length 属性
//   return val
// }


// 如： 实现一个动物类，并且能跑起来

// interface BaseAnimal {
//   run(): void
// }
// class Dog implements BaseAnimal {
//   run(): void {
//     // run.......
//   }
// }
// class Cat implements BaseAnimal {
//   run(): void {
//     // run.......
//   }
// }
// let run = (animal) => {
//   // 一个溜动物的工厂函数，用于去溜哪个动物，并带回这个动物
//   animal.run()
//   return animal
// }
// const dog = run(new Dog()) // 在这里，无法得知该动物是什么
// const cat = run(new Cat())

// 1 、使用基类 或 强制类型指定
// 2 、 使用泛型
// 3 、 使用泛型约束







/*********           下面这段代码来自于 HIPOS         ***********/
/**
 * 获取顾客miid里的地址列表
 */
export const getAddressList = async (userId: string): Promise<UserAddress[]> => {
  let useraddress = await $$.ajax('/address/list', {
    method: 'GET',
    data: {
      userId,
    },
  })
  return useraddress
}

/**
 * 顾客地址数据描述
 */
export interface UserAddress {
  /**
   * 姓名
   */
  consignee: string
  /**
   * 手机
   */
  tel: string
  /**
   * 省份
   */
  province: Simple
  /**
   * 城市
   */
  city: Simple
}
const dd = getAddressList('aa')
/*********           HIPOS  代码结束       ***********/
export default {}