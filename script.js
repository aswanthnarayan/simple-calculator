let screen = document.querySelector("#screen");
let display = document.querySelectorAll(".number");
let clear = document.querySelector("#clear");
let equals = document.querySelector("#equels");
let operator= document.querySelectorAll(".operator")

  let currentInput = "";
  let currentOperator = "";
  let firstInput = "";


display.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const value = btn.value;
     screen.value+=value
        if(value.match(/[0-9]/)){
            currentInput+=value;
        }
        else if (value === "+" || value === "-" || value === "*" || value === "/") {
          currentOperator=value;
          firstInput=parseFloat(currentInput);
          currentInput="";
        }

    })
})


function calculate(){
    if (currentOperator && firstInput !== "") {
        const secondInput = parseFloat(currentInput);
        let result = 0;
        switch (currentOperator) {
          case "+":
            result = firstInput + secondInput;
            break;
          case "-":
            result = firstInput - secondInput;
            break;
          case "*":
            result = firstInput * secondInput;
            break;
          case "/":
            result = firstInput / secondInput;
            break;
        }

        screen.value = result;
        firstInput = result;
        currentInput = result.toString();
        currentOperator = "";

      }
}


equals.addEventListener("click",()=>{
    calculate();
})


clear.addEventListener("click",()=>{
    screen.value='';
    currentInput = "";
    currentOperator = "";
    firstInput = "";
})
