class Particle{
    constructor(){
        options = {
            isStatic:false
        }
        this.body=Bodies.circle(x,y,this.radius,options);
        this.radius = 10;
        World.add(world,this.body);
    }
    display(){
    
        var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);   
         ellipseMode(RADIUS);
         stroke("blue");
          ellipse(0,0,10,10);
          pop();
      };
}


  