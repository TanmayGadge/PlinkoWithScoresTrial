class Ground {
  constructor(x, y, w, h, color) {
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.color = int(color);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    rectMode(CENTER);
    if (this.color === 0) {
      fill("white");
    }
    if(this.color === 1){
      fill("yellow");
    }
    rect(pos.x, pos.y, this.w, this.h);
  }
};