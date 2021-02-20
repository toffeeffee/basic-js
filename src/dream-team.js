const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = new Array;
  let name = '';
  let finallyName = '';
  let char;
  let fl = false;

  for(i=0;i<members.length;i++){
    if(typeof(members[i])!='string'){}
      else{
          name = members[i].toString();
          name = name.trim();
          dreamTeam[i]=name[0].toUpperCase();
          fl=true;
        };
    };

  if(fl==true){
    dreamTeam.sort();
    name=dreamTeam.toString();
    for(i=0;i<name.length;i++){
      char=name.charCodeAt(i);
      if (char>=65 && char<=90){
          finallyName = finallyName + name[i]; 
        }
    };
    return(finallyName);
  }
  else{return(false);}
};
