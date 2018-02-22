window.onload = function() {

  let output, limit, zero, decimal;
  let screen = document.querySelector('.screen');
  let digit = document.querySelectorAll('.number');
  let operators = document.querySelectorAll(".operator");


  //Add event listeners to all number keys
  for(let i = 0; i < digit.length; i++) {
    digit[i].addEventListener("click", function() {
      number = this.value;
      output = screen.innerHTML+=number;
      limit = output.length;
      //Limit number of digits to 12
      if (limit > 12) {
        alert("Sorry, your input is too long.");
      }
    });
  }

  //Clear screen if AC is pressed
  document.querySelector('.ac').addEventListener("click", function() {
    screen.innerHTML="";
  });

  //Zero key event listener
  document.querySelector('button[value="0"]').addEventListener("click", function() {
    zero = this.value;
    if (screen.innerHTML === "") {
      output = screen.innerHTML = zero;
    }
    else {
      output = screen.innerHTML += zero;
    }
  });

  //Decimal key event listener
  document.querySelector('.decimal').addEventListener("click", function() {
    decimal = this.value;
    if(screen.innerHTML === "") {
      output = screen.innerHTML = "0.";
    }
    else if(screen.innerHTML === output) {
      screen.innerHTML += ".";
    }
    else if (screen.innerHTML.charAt(screen.innerHTML.length - 1) != ".") {
      screen.innerHTML += "0.";
    }
  });


  //Operator key event listeners
  for (let i = 0; i < operators.length; i++)
  {
    operators[i].addEventListener("click", function() {
      operator = this.value;
      if (screen.innerHTML === "") {
        screen.innerHTML == "";
      }
      else if (output) {
        screen.innerHTML = output.concat(operator);
      }
    });
  }

  //Equals key event listener
  document.querySelector(".equals").addEventListener("click", function () {
    if (screen.innerHTML === output) {
      //Round result three decimal places
      screen.innerHTML = Math.round(eval(output) * 1000) / 1000;
    }
  });



}
