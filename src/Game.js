function Game()
{
    // Public members.

    this.update = function(/*CanvasRenderingContext2D*/ g, /*double*/ dt)
    {
        // Clear the background to black.
        g.fillStyle = 'rgb(0,0,0)';
        g.fillRect(0, 0, canvas.width, canvas.height);

        // In the future, perhaps we'll having something like:
        // DinoManager.update(g, dt);
        // AsteroidManager.update(g, dt);
        
        sprite.update(g, dt);
    }
    
    // Private members.
    
    // In the future, perhaps we'll having something like:
    // var dinoManager = new DinoManager();
    // var asteroidManager = new AsteroidManager();
    
    var sprite = new Sprite();
}