const CustomError = require("../extensions/custom-error");

module.exports = function transform(/* arr */) {
 const action =['--discard-next','--discard-prev','--double-next','--double-prev'];
  let arrNew=[];
  if(!Array.isArray(arr)){throw "Error";}
  else{
      for(i=0;i<arr.length;i++){arrNew[i]=arr[i];}; 
      for(index=0;index<arrNew.length;index++){
          for (i=0;i<action.length;i++){
              if (arrNew[index]==action[i]){
                  switch (action[i]){
                  case '--discard-next':
                      if(index==arrNew.length-1){arrNew.splice(index, 1);} 
                      else{arrNew.splice(index, 2);};
                      break;
                  case '--discard-prev':
                      if(index==0){arrNew.splice(index, 1);}
                      else{arrNew.splice(index-1, 2);}; 
                      break;
                  case '--double-next':
                      if(index==arrNew.length-1){arrNew.splice(index, 1);} 
                      else{arrNew[index]=arrNew[index+1]};
                      break;
                  case '--double-prev':
                      if(index==0){arrNew.splice(index, 1);}
                      else{arrNew[index]=arrNew[index-1];}; 
                      break;
                  }

              }
          }
      }
      return(arrNew);
  };
};
