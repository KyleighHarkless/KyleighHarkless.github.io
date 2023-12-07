var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
    
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle
        var circles = []
       
        // TODO 2 : Create a function that draws a circle 
        var drawCircle = function drawCircle() {
        circle = draw.randomCircleInArea(canvas, true, true, "#999", 2) 
        physikz.addRandomVelocity(circle, canvas)
        view.addChild(circle)
        circles.push(circle)
        }
        
        // TODO 3 / 7 : Call the drawCircle() function 
        for (var count = 1; count < 500; count++) {
        drawCircle ()
        }
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
         for (var count = 0; count < circles.length; count++) { 
            physikz.updatePosition(circles[count]);
            game.checkCirclePosition(circles[count]);

         }
           
        }

            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
           

            // TODO 9 : Iterate over the array 
           
     

            
            game.checkCirclePosition = function(circle) {
            if (circle.x > canvas.width) {
                circle.x = 0;
            }
            if (circle.x < 0) {
                circle.x = canvas.width
            } 
            if (circle.y > canvas.height) {
                circle.y = 0;
            }
            if (circle.y < 0) {
                circle.y = canvas.height
            }
            }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        
        
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            


            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
           // }   //
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
