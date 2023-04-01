export const phoneNumberChange =(data)=>{
    // var firts = data.slice(0,3);
    // var middel = data.slice(3,6);
    // var last = data.slice(6,10);
    // var phoneNumber =`(${firts})-${middel}-${last}`
    // return phoneNumber.toString();
     //Filter only numbers from the input
  let plain = ('' + data).replace(/\D/g, '');
  
  //Check if the input is of correct length
  let fixed = plain.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (fixed) {
    return '(' + fixed[1] + ')-' + fixed[2] + '-' + fixed[3]
  };

  return "Numero incorrecto"
  };