const display=document.querySelector(".display");
const buttons=document.querySelectorAll(".button");
let expression = "";

buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        const value =button.innerText;
        // expression+=value;
        // display.innerText=expression;

        
        if(value==="AC"){
            expression="";
            display.innerText="";
            
        }
        else if(value==="C"){
            expression=expression.slice(0,-1);
            display.innerText=expression;
        }
        
        
        else if(value==="="){
            let processedExpression = expression.replace(/×/g, "*").replace(/÷/g, "/");
            let result = eval(processedExpression);

           
            display.innerText=result;
            expression=result.toString();

        }
        else{
          if(value==="÷"){
            expression+="/";
            display.innerText=expression;

          }
          else if(value==="×"){
            expression += "*";
            display.innerText = expression;


          }
          else {
                expression += value;
          }
            display.innerText = expression;
        }  
    })

})
