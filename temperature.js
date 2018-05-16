// 1.1-简单的入门学习和变量认识，使用ES6最新标准，超级小白的温度换算

// 设置变量kelvin表示初始温度
const kelvin = 293;
// 设置变量摄氏度
const celsius = kelvin - 273;
// 设置变量华氏温度
let fahrenheit = celsius * (9 / 5) + 32;
// 将华氏温度变成整数
fahrenheit = Math.floor(fahrenheit);
// 设置牛顿温度
let newton = celsius * (33/100);
// 将牛顿温度转成整数
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
// log里面相当于（‘The temperature is’ + fahrenheit + 'degrees Fahrenheit.'）
console.log(`The temperature is ${newton} degrees Newton.`)