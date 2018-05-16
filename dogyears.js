//1.2-这是一个用人的年龄换算狗狗年龄的小程序。它们遵循这样的规则：人的前两年相当于10.5倍的狗狗年龄.
//比如人世界里面2岁相当于狗狗21岁；后面每年相当于4倍的狗狗年龄。

// age of me，为什么用const，因为这个变量只在声明时定义，后面不会再赋值
const myAge = 27;

//The first two human years of a dog's life count as 10.5 dog years each.
//为什么用let，因为下面要对这个变量另外赋值
let earlyYears = 2;
//earlyYears = earlyYears*10.5;
earlyYears *= 10.5;

//Each human year following counts as 4 dog years.
//第三个变量，用let因为后面要改变这个变量
let laterYears = myAge - 2;
//laterYears = laterYears*4;
laterYears *= 4;

//我的年龄27岁在狗狗的世界里相当于121岁了
let myAgeInDogYears = earlyYears + laterYears;
//使用built-in method，将名称全部换算成小写字母
const myName = 'Lydia Lee'.toLowerCase();

console.log(`My name is ${myName} . I am ${myAgeInDogYears} years old in dog years.`);

