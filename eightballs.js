//2.1-这是一个神奇数字8小练习，定义用户名称和用户的问题，通过产生一个随机数判定产生怎样的语句回答。

//定义用户名称
const userName = '';
userName ? console.log(`Hello, ${userName} !`) : console.log(`Hello!`);

//定义用户问题
const userQuestion = 'Will I become rich?';
console.log(`The user asked: ${userQuestion}`);

//定义随机数
const randomNumber = Math.floor(Math.random() * 8);

//通过随机数控制变量eightBall的取值
let eightBall='';

switch (randomNumber) {
  case 0 :
    eightBall = 'It is certain';
    break;
  case 1 :
    eightBall = 'It is decidedly so';
    break;
  case 2 :
    eightBall = 'Reply hazy try again';
    break;
  case 3 :
    eightBall = 'Cannot predict now';
    break;
  case 4 :
    eightBall ='Do not count on it';
    break;
  case 5 :
    eightBall = 'My sources say no';
    break;
  case 6 :
    eightBall = 'Outlook not so good';
    break;
  case 7 :
    eightBall = 'Signs point to yes';
    break;
                    }


console.log(eightBall);