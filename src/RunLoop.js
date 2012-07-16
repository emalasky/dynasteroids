// RunLoop class constructor.
// Public members are prefixed with this.
// Private members are local to this constructor.
function RunLoop()
{
    // Public members

    this.start = function()
    {
        renderFrame();
    }

    // Private members

    var game = new Game();
    var graphicsContext = document.getElementById("canvas").getContext("2d");
    var previousTime = -1;
        
    function renderFrame()
    {
        // Compute dt, the seconds elapsed since the last frame.
        var currentTime = (new Date()).getTime() / 1000.0;
        var dt = 0;    
        if (previousTime > 0) {
            dt = currentTime - previousTime;
        }
        previousTime = currentTime;
    
        game.update(graphicsContext, dt);
        
        window.webkitRequestAnimationFrame(renderFrame);
    }
}