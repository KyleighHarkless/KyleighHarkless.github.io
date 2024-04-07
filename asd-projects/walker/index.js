/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects


  // one-time setup
  var KEY = {
    RIGHT: 39,
    LEFT: 37,
    UP: 38,
    DOWN: 40
  };
  
  var walker = {
    pX: 0,
    pY: 0,
    speedX: 0,
    speedY: 0
  };

  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollisions();
    redrawGameItem();

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.RIGHT) {
      return walker.speedX = 5;
    }
    else if (event.which === KEY.LEFT) {
     return walker.speedX = -5;
    }
    else if (event.which === KEY.UP) {
      return walker.speedY = -5;
    }
    else if (event.which === KEY.DOWN) {
       return walker.speedY = 5;
    }
  }

  function handleKeyUp(event) {
    if(event.which !== KEY.RIGHT) {
        return walker.speedX = 0, walker.speedY = 0
    } 
    if (event.which !== KEY.LEFT) {
        return walker.speedX = 0, walker.speedY = 0
    }
    if (event.which !== KEY.UP) {
      return walker.speedX = 0, walker.speedY = 0
    }
    if (event.which !== KEY.DOWN) {
      return walker.speedX = 0, walker.speedY = 0
    }

    }
  

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem() {
    walker.pX += walker.speedX
    walker.pY += walker.speedY
  };

  function redrawGameItem() {
    $("#walker").css("left", walker.pX)
    $("#walker").css("top", walker.pY)
  };
  
  function wallCollisions() {
    if (walker.pX === 395) {
      return walker.pX -= walker.speedX
    }
    else if (walker.pX === 0) {
      return walker.pX -= walker.speedX
    }
    else if (walker.pY === 0) {
      return walker.pY -= walker.speedY
    }
    else if (walker.pY === 395) {
      return walker.pY -= walker.speedY
    }
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
    