import $ from 'jquery';
import sum from './utils/sum/sum';

console.log('Ready for coding');

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', sum(2, 3));

declare global {
    interface Window {
      changeSquareColor: (squareNumber: number) => void;
      changeSquareText: (squareNumber: number) => void;
      toggleSquareVisibility: (squareNumber: number) => void;
      changeRandomColor: (squareNumber: number) => void;
      startIncreasingNumber: (squareNumber: number) => void;
      changeAllSquaresColor: () => void;
      startTimerOnMouseover: (squareNumber: number) => void;
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    let intervalId: NodeJS.Timeout | null = null;
    let square6Value = 1;
  
    // Implementation of the functions
    window.changeSquareColor = function(squareNumber: number) {
        const square = document.getElementById(`square${squareNumber}`);
        if (square) {
          // Change color to yellow when button is pressed
          square.style.backgroundColor = 'yellow';
      
          // Change color to red when hovering over the square
          square.addEventListener('mouseover', function() {
            square.style.backgroundColor = 'red';
          });
      
          // Reset to the default color when not hovering
          square.addEventListener('mouseout', function() {
            square.style.backgroundColor = '#18d5e1';
          });
        }
      }
    
    window.changeSquareText = function(squareNumber: number) {
      const square = document.getElementById(`square${squareNumber}`);
      if (square) {
        square.innerText = 'SUCCESS';
      }
    }
  
    window.toggleSquareVisibility = function(squareNumber: number) {
        const square = document.getElementById(`square${squareNumber}`);
        if (square) {
          const currentOpacity = parseFloat(window.getComputedStyle(square).opacity);
          const newOpacity = currentOpacity === 0 ? 1 : 0;
          square.style.opacity = newOpacity.toString();
        }
      }


window.changeRandomColor = function(squareNumber: number) {
    const colors = ['red', 'green', 'blue', 'white', 'yellow'];
    const square = document.getElementById(`square${squareNumber}`);
  
    if (square) {
      // Generate a random color index
      const randomColorIndex = Math.floor(Math.random() * colors.length);
  
      // Set the color based on the random index
      if (randomColorIndex === 0) {
        square.style.backgroundColor = '#1fc2ae';
      } else {
        square.style.backgroundColor = colors[randomColorIndex];
      }
      
    }
  }

//---------------------------------------------------HERE - THE - EXTRA-----------------------------------------------------------------------------

let intervalId5: NodeJS.Timeout | null = null;

window.startTimerOnMouseover = function(squareNumber: number) {
  const square = document.getElementById(`square${squareNumber}`);
  let timerCount = 0;

  if (square) {
    square.addEventListener('mouseenter', function () {
      // Clear any existing interval
      clearInterval(intervalId5 as NodeJS.Timeout);

      // Start the interval to update the timer every second
      intervalId5 = setInterval(() => {
        if (timerCount <= 10) {
          square.innerText = timerCount.toString();
          timerCount++;
        } else {
          // Reset the timer when it reaches 10
          timerCount = 0;
        }
      }, 1000);
    });

    square.addEventListener('mouseleave', function () {
      // Clear the interval and reset the timer when the mouse leaves the square
      clearInterval(intervalId5 as NodeJS.Timeout);
      timerCount = 0;
      square.innerText = '';
    });
  }
}


//-----------------------------------------------------------------------------------------------------------------------------------------------

      window.startIncreasingNumber = function(squareNumber: number) {
        const square = document.getElementById(`square${squareNumber}`);
        if (square && !intervalId) {
          // Display 1 immediately
          square.innerText = '1';
      
          // Start the interval to increment the number every 3 seconds
          intervalId = setInterval(() => {
            if (square6Value < 10) {
              square6Value++;
              square.innerText = square6Value.toString();
            } else {
              // Stop when it reaches 10
              clearInterval(intervalId as NodeJS.Timeout);
              intervalId = null; // Reset the interval ID
            }
          }, 3000);
        }
      }
      
      let isColorToggled = false;

      window.changeAllSquaresColor = function() {
        const newColor = isColorToggled ? '#18D5E1' : '#18d5e1'; // Change this to your second color
        const bodyColor = isColorToggled ? '#FFFFFF' : '#000000'; // Change this to your second background color
    
        for (let i = 1; i <= 6; i++) {
          const square = document.getElementById(`square${i}`);
          if (square) {
            square.style.backgroundColor = newColor;
          }
        }
      
        document.body.style.backgroundColor = bodyColor;
      
        // Toggle the state for the next click
        isColorToggled = !isColorToggled;
      }


        const inputElement = document.getElementById('textInput') as HTMLInputElement;
        const outputElement = document.getElementById('outputText') as HTMLDivElement;
      
        inputElement.addEventListener('input', function () {
          const inputValue = inputElement.value;
          outputElement.innerText = `${inputValue}`;
        });
      
      

    });