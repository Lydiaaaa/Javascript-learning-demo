//3.1-石头剪刀布游戏，这个游戏的实现步骤有4项，分别是获得用户选项，获得电脑选项，对比两者选项，设定结果和输出。

//第一步：定义一个函数，获得用户的选项，userInput是参数
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log(`Please type the correct text!`);
    }    
  };
  
  //第二步：定义一个函数，获电脑的选项，使用0-2这3个随机数随机分配
  const getComputerChoice = () => {
    let number = Math.floor(Math.random()*2);
    switch(number) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  };
  
  //第三步：定义一个函数，用来判断平局情况、用户出炸弹/剪刀/石头/布情况
  const determinWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
      return 'The game is tie!';
    }
    
    if(userChoice === 'bomb') {
      return 'You are win!';
    }
    
    if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'You are lost!';
      } else {
        return 'You are win!';
      }
    }
    
    if(userChoice === 'paper') {
      if(computerChoice === 'rock') {
        return 'You are win!';
      } else {
        return 'You are lost!';
      }
    }
    
    if(userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'You are lost!';
      } else {
        return 'You are win!';
      }
    } 
  };
  
  //第四步：定义一个函数部署游戏，输出结果语句
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    
    console.log(determinWinner(userChoice, computerChoice));
  };
  
  playGame();