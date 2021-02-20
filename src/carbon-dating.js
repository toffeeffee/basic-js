const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const ln2 = 0.693;
  let age, N0;

  N0=parseInt(sampleActivity);
  if (typeof(N0)!=Number){return(false)}
  else{
      age = (Math.log(MODERN_ACTIVITY/N0)*HALF_LIFE_PERIOD)/ln2;
      age = parseInt(age);
      return(age)}

};
