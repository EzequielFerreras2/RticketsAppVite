export const phoneNumberChange =(data)=>{
    // var firts = data.slice(0,3);
    // var middel = data.slice(3,6);
    // var last = data.slice(6,10);
    // var phoneNumber =`(${firts})-${middel}-${last}`
    // return phoneNumber.toString();
     //Filter only numbers from the input
  let cleaned = ('' + data).replace(/\D/g, '');
  
  //Check if the input is of correct length
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  };

  return null
  };