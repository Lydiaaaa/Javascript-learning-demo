//2.2-这是一个跑步比赛的时间、编号信息小练习，需要定义运动员编号随机数，报道时间，运动员年龄等。
//判别条件共有4种情况，登记时间早+18岁以上，登记时间晚+18岁以上，18岁以下，18岁。分别有不同的运动员编号和语句通知。


let raceNumber = Math.floor(Math.random()*1000);

const isRegisteredEarly = false;

const runnerAge = 18;

if(isRegisteredEarly && runnerAge > 18 ) {
  raceNumber +=1000; 
  console.log(`Hi guys! You will race at 9:30am and your race number is ${raceNumber}`);
} else if (!isRegisteredEarly && runnerAge > 18) {
  raceNumber = raceNumber;
  console.log(`Late adults run at 11:00 am and your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
  raceNumber = raceNumber;
  console.log(`You are run at 12:30pm and your race number is ${raceNumber}`);
} else {
  console.log(`Please go to the registration desk!`);
}

