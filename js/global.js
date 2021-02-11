const form = document.querySelector('form');
form.addEventListener('submit', function(event){
  
  const num1 =  parseFloat(form.num1.value);
  const num2 =  parseFloat(form.num2.value);
  const myResult=document.querySelector('#result');
  const mathSelect=document.querySelector('#mathSelect').selectedIndex;
  let result;
  myResult.style.color="blue";
  if(mathSelect=== 1){
    result = num1 + num2;
    myResult.innerHTML="Sum is " + result ;
  } 
  else if(mathSelect===2){
    result = num1 - num2;
    myResult.innerHTML="Difference is " + result ;
  }
  else if(mathSelect===3){
    result = num1 * num2;
    myResult.innerHTML="Product is " + result ;
  }
  else if(mathSelect===4){
    result = num1 / num2;;
    myResult.innerHTML="Quotient is " + result ;
  }
  else{
    myResult.style.color="red";
    myResult.innerHTML="Please select a valid math option" ;
  }

  event.preventDefault();

});