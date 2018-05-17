//5.1-array的小练习

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//去掉数组最后一个语句，加上to和programe
secretMessage.pop();
secretMessage.push('to','program');

//将数组中的easily换成right
console.log(secretMessage.indexOf('easily'));
secretMessage[7] = 'right';
console.log(secretMessage[7]);

//去掉数组中第一个元素，换成programming
secretMessage.shift();
secretMessage.unshift('programming');
console.log(secretMessage[0]);

//去掉数组中get, right, the, first, time这几个词，换成know
secretMessage.splice(6,5,'know');
console.log(secretMessage);

//将数组连成一句话
console.log(secretMessage.join(' '));


