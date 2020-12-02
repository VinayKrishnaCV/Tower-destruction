class Polygon{
  constructor(x, y, sides, radius) {
    var options = {
      'isStatic':false,
      'restitution':0.1,
      'friction':1.0,
      'density':1.0
    }
    this.body = Bodies.polygon(x, y, sides, radius, options);
    this.sides = sides;
    this.radius = radius;
    World.add(world, this.body);
    this.image=loadImage("sprites/polygon.png.png")
  }
  display(){
    push();
    var pos =this.body.position;
    translate(this.body.position.x, this.body.position.y);
    fill(255);
    angleMode(RADIANS);
    rotate(this.body.angle);
    imageMode(CENTER)
    image(this.image,0, 0, this.radius*2, this.radius*2);
    pop();
  }
}
