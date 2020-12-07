class Drops{
    constructor(x, y){
        var options = {
            isStatic:false
        }
        this.x = x;
        this.y = y;
        this.r = 5;
        this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

    }

    update(){
        if(this.body.position.y > height){
        Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
        
    }
    display()
    {
    fill("blue");
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.r, this.r);
    }
}