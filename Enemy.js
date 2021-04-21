class Enemy{
    constructor(x, y, width, height,radius){
      var options = {
        /*'restitution':0.8,
        'friction':1.0,
        'density':1.0*/
      }
    this.body = Bodies.circle(x, y, width, height,radius,options);
    this.width = width;
    this.height = height;
    this.radius = radius;
    this.image = loadImage("Sprites/Enemy.webp");
    World.add(world,this.body);
   }
   display(){
      var pointA = this.body.position;
      ellipseMode(RADIUS);
      ellipse(pointA.x,pointA.y,this.width,this.height,this.radius);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);   
   }  
}
