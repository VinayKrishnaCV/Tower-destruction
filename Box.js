class Box{
  constructor(x, y, width, height) {
    var options = {
      'isStatic':false,
      'restitution':0.1,
      'friction':1.0,
      'density':1.0
    }
    this.visiblity=255
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.colour=color(random(1,255),random(1,255),random(1,255))
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<3){
      push();
      translate(this.body.position.x, this.body.position.y);
      fill(this.colour);
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    }else{
      push();
      this.colour.setAlpha(this.visiblity)
      noStroke()
      fill(this.colour)
      //tint(255,this.visiblity)
      rectMode(CENTER)
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      World.remove(world,this.body)
      this.visiblity-=10
      pop();
    }
  }
  score(){
    if(this.visiblity<255&&this.visiblity>-150){
      score++
    }
  }
}

