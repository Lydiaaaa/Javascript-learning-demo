//4.1-这是一个训练项目随机获取并匹配训练时间的小练习

//第一步：使用随机数随机获得参与的活动并返回
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    
    if(random === 0) {
      return 'Marathon';
    } else if(random === 1) {
      return 'Triathlon';
    } else if(random === 2) {
      return 'Pentathlon';
    }
  };
  
  const event = getRandEvent();
  const event2 = getRandEvent();
  
  ////第二步：根据活动获得训练的天数并返回
  const getTrainingDays = event => {
    let days;
    switch(event) {
      case 'Marathon':
      days = 50;
      break;
      case 'Triathlon':
      days = 100;
      break;
      case 'Pentathlon':
      days = 200;
      break;
    }
    return days;
                };
  
  const time = getTrainingDays(event);
  const time2 = getTrainingDays(event2);
  
  const name = 'Lydia';
  const name2 = 'Paco';
  
  ////第三步：输出这个人进行什么训练，训练多少天
  console.log(`${name} ’s event is ${event}`);
  console.log(`${name}’s training time is ${time}.`);
  
  console.log(`${name2} ’s event is ${event2}`);
  console.log(`${name2}’s training time is ${time2}.`);