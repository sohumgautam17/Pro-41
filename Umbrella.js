class Umbrella{
constructor(x, y, r){
    var options = {
        isStatic : true 
    }
    this.image=loadImage("walking_1.png")
    this.x = x;
    this.y = y;
    this.r = r;
    
    this.body=Bodies.circle(this.x, this.y, this.r, options)
    World.add(world, this.body);
}
display(){

push();
//translate();
imageMode(CENTER);
image(this.image, this.x,this.y, this.r);
pop();

}
}