class Plinko{
    constructor(){
        options={
            isStatic:true
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("grey");
   ellipse(0,0,10,10);
    pop();

    }
}