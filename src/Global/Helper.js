export function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
      console.log("Damm this error is persistent")
        return false;
    }
    return true;
  }
  
 export  function setJson(str){
  
    if(isJson(str)){
      console.log("user is set")
  let user_id = JSON.parse(str);
  return user_id;
    }
  
    else{
      console.log("user is not set")
      return null;
    }
  }