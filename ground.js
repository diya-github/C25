class Ground 
{
  constructor(x, y, w, h, a) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.angle = a;
    World.add(world, this.body);
  }
  
display() {

  var pos = this.body.position;
  Matter.Body.rotate(this.body,this.angle)
  push();
  translate(pos.x,pos.y);
  rotate(this.angle);
  fill("yellow");
  rect(0,0,this.w,this.h);
  pop();
  
  this.angle+=0.1;
}
 
}
