// interface IA {
//   name: string
// }

// const a = (arg: any) => {
//   console.log(arg.name)
// }
// const b = (arg: IA) => {
//   console.log(arg.name)
// }

// const c  = {
//   name: 'z',
//   age: 1
// }
//  额外的属性检查
// b({name: 'z'})
// b({name: 'z', age: 1})
// b({name: 'z', age: 1} as IA)  // 使用断言绕开检查
// b(c)



// interface IA {
//   name: string
//   [propName: string]: any
// }
// b({a: 'a', name: 'b'})

//  可选属性
// interface IB {
//   name?: string
// }
// const d = (arg: IB) => {
//   // ...
// }
// d()
// d({})


// const e = (arg?: IB) => {
//   // ....
// }
// e()
// const f: IB = {}

// 只读属性

// interface IC {
//   readonly name: string
//   age: number
// }

// const g: IC = {name: 'z', age: 1}
// g.name = 'x'

// 只读数组

// const h: ReadonlyArray<number> = [1,2,3]
// h[0] = 4
// h.push(5)
// const i = h
// let j: number[] = [6,6,6]
// j = h
// j = h as number[]


// 接口定义函数
// interface ID {
//   (name: string, age: number): string
// }

// const k: ID = (a, b) => { // 自行推断
//   return 'hello'
// }
// k('1', '2')


// 索引类型

// interface IE {
//   [index: number]: string // 声明索引值为数值、索引返回值为 字符串
// }
// const l: IE = ['a', '3', 3]
// l[0]


// 类
// class CA {
//   name: string
//   constructor(newName: string) {
//     this.name = newName
//   }
//   say() {
//     return 'Hello'+ this.name
//   }
// }
// new CA('z')

// interface IF {
//   name: string // 描述属性
//   say(name: string): string // 描述方法
// }
// class A implements IF {
//   name: 'z'
//   say(name: string) {
//     return 'Hi'+ name
//   }
//   constructor (arg: string){
//     this.say(arg)
//   }
// }


//  接口继承
// interface IH {
//   name: string
// }
// interface II extends IH{
//   age: number
// }
// const p: II = {name: 'a'}
// interface IJ extends IH, II {
//   other: boolean
// }
// const q: IJ = {name: 'a'}

//接口实现  

// interface IK {
//   name: string
//   // say(name: string) : void
// }
// class CA implements IK {
//   // name: 'a'
// }
// new CA()



// 修饰符

// class CB {
//   public name: string
//   private age: number
//   protected address: string
//   readonly phone: string
//   get n(): string {
//     return this.name
//   }
//   set n(nn: string) {
//     if (nn === 'a') {
//       //
//     } else {
//       this.name = nn
//     }
//   }
//   info () {
//     console.log(this.name, this.age, this.address)
//   }
// }
// const r = new CB()
// r.n = 'a'














export default {}