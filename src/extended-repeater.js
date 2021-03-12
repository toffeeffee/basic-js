module.exports = function repeater(str, options) {
  let newStr ='';
  let additionStr = '';
  let additionRepeatTimes;
  let additionSeparator;
  let addition;
  let repeatTimes;
  let separator;
  
  if (options.addition !== undefined ){addition = options.addition;}
    else {addition = '';}
  if (options.additionRepeatTimes !== undefined ){additionRepeatTimes = options.additionRepeatTimes;}
    else {additionRepeatTimes = 0;}
  if (options.additionSeparator !== undefined ){additionSeparator = options.additionSeparator;}
    else {additionSeparator = '|';}  
  if (options.repeatTimes !== undefined ){repeatTimes = options.repeatTimes;}
    else {repeatTimes = 1;}  
  if (options.separator !== undefined ){separator = options.separator;}
    else {separator = '+';}     
  if (str !== undefined ){str = String(str);}
    else {str = '';}  
    
  additionStr=addition;
  for (i=additionRepeatTimes-1;i>0;i--){additionStr=additionStr+additionSeparator+addition;}
  newStr=str+additionStr;
  for(i=repeatTimes-1;i>0;i--){
      newStr = newStr+separator+str+additionStr;
  }
  return(newStr);
};
