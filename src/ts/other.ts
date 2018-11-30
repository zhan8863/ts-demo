// import x = require('x')
// CommonJS和AMD的环境里都有一个exports变量，这个变量包含了一个模块的所有导出内容。
// CommonJS和AMD的exports都可以被赋值为一个对象, 这种情况下其作用就类似于 es6 语法里的默认导出
// 即 export default语法了。虽然作用相似，但是 export default 语法并不能兼容CommonJS和AMD的exports




// 命名空间 namespace


namespace NA {
  export interface IA {
    name: string
  }
  export interface IB {
    say(name: string): string
  }
  const x = 'x' // 内部使用的无需加 export 
}


const o: NA.IA = { // 注意，NA 的使用可以放在当前项目的任意地方去，编辑器自动完成这份检查的工作
  name: 'a'
}

//随着项目的增大或命名空间的增多，可以选择拆分文件
// 注意： 这些 namespace 可以分散到任意文件
namespace NA {
  export interface IC {
    age: number
  }
  export interface IA {
    // name: boolean // 重复声明可以，但不能再修改其类型或定义
  }
}
const c: NA.IC = {age: 10}

// 同样，接口也可以像 NA 这样，重复声明

interface IA {
  name: string
}
interface IA {
  age: number
}