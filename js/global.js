const form = document.querySelector('form');
form.addEventListener('submit', function(event){
  
  const num1 =  parseFloat(form.num1.value);
  const num2 =  parseFloat(form.num2.value);
  const myResult=document.querySelector('#result');
  const mathSelect=document.querySelector('#mathSelect').selectedIndex;
  let result;
  if(mathSelect=== 1){
    result = num1 + num2;
    myResult.innerHTML="Sum is " + result ;
  } 
  else if(mathSelect===2){
    result = num1 - num2;
    myResult.innerHTML="Sum is " + result ;
  }
  else if(mathSelect===3){
    result = num1 * num2;
    myResult.innerHTML="Sum is " + result ;
  }
  else if(mathSelect===4){
    result = num1 / num2;;
    myResult.innerHTML="Sum is " + result ;
  }
  else{
    myResult.innerHTML="Please select a valid math option" ;
  }

  event.preventDefault();

});