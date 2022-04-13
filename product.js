function formvalidation() {
    var functions = [checkSplrName(), checkSplrStts(), checkpID(), checkpDesc(), checkPrice()];
    var count = 0;

     for(var i = 0; i < functions.length && count < 3; ++i)
       {    if(functions[i] != "")
            {
                document.querySelector("#errors").innerHTML += "<span class='er'><p>ERROR " + (count++ + 1) +": " +
                            "<span class = 'yellow'> <br> " +functions[i] + "</span> </p> </span>";         
            }
       }
       
       if(count == 0)
       {
           alert("Form filled up successfully!");
        return true;
       }
         
       else
         return false;
}

function checkpID(){
    var input = document.querySelector("#pId").value.trim();

    if(parseInt(input) != input)
    {  
        return ("In Product ID please enter digits only")
    }

    else if(input.length != 8)
      {
       return ("In Product ID please enter 8 digits");
      }
    return "";  
}

function checkpDesc(){
    var input = document.querySelector("#pDesc").value.trim();

    if(input.charAt(0) < "A" || input.charAt(0) > "Z")
    {
        return ("In Product Description first Letter Should be a Capital letter")
    }
    
    if(!(/^[a-zA-Z" "]+$/.test(input)))
    {
       return ("In Product Description only Alphabet Allowed");
    }

    if(input.length < 20)
      return ("Product Description must contain at least 20 characters");

    return "";  
}

function checkPrice(){
    var input = document.querySelector("#pPrice").value.trim();

    if(parseFloat(input) != input)
    {   
        return  ("In Price please enter digits only")
    }
    if(/[.]/.test(input))
        return ("In Price decimal number is not allowed");
    if(input > 1000)
        return ("Price should be less then 1000");
    return "";    
}
function checkSplrName(){
    var input = document.querySelector("#psplr").value.trim();

    if(!(/^[a-zA-Z]/.test(input)))
    {
        return ("Username must start with an alphabet");
    }
       
     if(input.length < 6)
     {    
          return ("Username must contain at least 6 characters");
    }
      
    return "";   
}

function checkSplrStts(){
    var checkNum = document.signup.status.length;

    for(var i = 0; i < checkNum; ++i)
      if(document.signup.status[i].checked == true)
         return "";
    return  ("Check atleast one status");     
}

function showErrors(msg){
   document.querySelector("#errors").innerHTML = msg;
   return false;
}

function clearErrors() {
    document.querySelector("#errors").innerHTML = "";
}