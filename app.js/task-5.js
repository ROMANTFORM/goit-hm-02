const checkForSpam = function(message) {
   let string = message.toLowerCase();
   return string.includes('spam') || string.includes('sale');
   // let string = /(^|\b|\[)(sale|spam)(\b|\]|$)/i;
   // return string.test(message);
  };
  
 
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true