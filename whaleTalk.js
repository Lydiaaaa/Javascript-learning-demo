//6.1-这是一个将正常语句转换为海豚语的小应用，原理就是通过查找正常语句中的元音，将其提取出来成为一个序列

//第一步准备工作：建立序列1-正常语句，序列2-元音字母，序列3-储存元音字母
const input = 'turpentine and turtles';
const vowels = ['a','e','i','o','u'];
let resultArray =[];

//第二步：建立主循环，将input序列的每个字母循环；
//第三步：建立内循环，将vowels序列的每个字母对应再循环；
//第四步：对比，在内循环中，使用if语句对比两个循环，当字母相同时，就记录在resultArray序列里面
//第五步：double元音e和u，将double过的结果记录在resultArray中
for(let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  for(let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
    if(input[inputIndex] === vowels[vowelsIndex]) {
      resultArray.push(input[inputIndex]);
    };
  };
  
  if(input[inputIndex] === 'e' || input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]);
  };
};

//第六步：输出resultArray，并将其合成一句话，大写字母
console.log(resultArray);
console.log(resultArray.join('').toUpperCase());
