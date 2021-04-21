class Barrier{
    constructor(x, y, width, height){
        var options = {
            'isStatic': true , 
            'restitution':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world,this.body);
    }
    display(){
        var pointA = this.body.position;
        stroke(48,22,8);
        strokeWeight(4);
        rectMode(CENTER);
        rect(pointA.x,pointA.y,this.width,this.height);
        //imageMode(CENTER);
       // image(this.image, 0, 0, this.width, this.height);  
    }

}
