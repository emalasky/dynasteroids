function Sprite()
{
    // Public members.
    
    this.update = function(g, dt)
    {
        // Update physics.
        position.x += velocity.x * dt;
        position.y += velocity.y * dt;
    
        // Render.
        g.fillStyle = 'rgb(0,127,0)';
        g.fillRect(position.x, position.y, size, size);
        g.fill();
    }
    
    // Private members.
    var position = {x: 0, y: 0};
    var velocity = {x: 10, y: 10};
    var size = 50;
};