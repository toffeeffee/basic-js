const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cat = "^^";
  let count = 0;

  for(i=0; i<backyard.length; i++) {
        backyard[i].forEach(searchCat);
        function searchCat(item, index){               
            if (item == cat){count++;}
        }
    }
  return(count);  
};
