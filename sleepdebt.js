//3.2-睡觉时间统计

//定义一个函数，获得一周每一天的睡眠时间，day作为参数
const getSleepHours = day => {
    switch(day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 6;
        break;
      case 'wednesday':
        return 5;
        break;
      case 'thursday':
        return 6;
        break;
      case 'friday':
        return 8;
        break;
      case 'saterday':
        return 6;
        break;
      case 'sunday':
        return 7;
        break;
    }
  }
  
  //定义一个函数，获得一周实际睡眠的总时间
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saterday') + getSleepHours('sunday');
  };
  
  //定义一个函数，获得一周理想睡眠的总时间
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours*7;
  };
  
  //定义一个函数，对比一周睡眠实际实现和理想时间，得出结果
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    if(actualSleepHours === idealSleepHours) {
      console.log('Wow you have the perfect amount of sleep');
    } else if(actualSleepHours > idealSleepHours) {
      console.log(`You sleep too much, ${actualSleepHours - idealSleepHours} hours more!`);
    } else if(actualSleepHours < idealSleepHours) {
      console.log(`You need ${idealSleepHours - actualSleepHours} hours more sleep!`);
    }
  };
    
  calculateSleepDebt();




//其实有更加简单的写法，不需要getSleepHours这个函数，直接在获取实际睡眠函数中将数字相加
const getActualSleepHours = () => {
      return 8+6+5+6+8+6+7;
};

//在获取一周理想睡眠时间里将单日时间作为参数
const getIdealSleepHours = idealHours => {
      return idealHours*7;
};

//在最后的计算函数中，两个变量的定义这样写
const actualSleepHours = getActualSleepHours(8);
const idealSleepHours = getIdealSleepHours();