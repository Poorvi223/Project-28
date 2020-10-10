class mango{
    constructor(x,y,r){
        var options={
            isStatic : true,
            friction : 1
        }
        this.body = Bodies.circle(this.x,this.y,this.r,options)
        this.x = x
        this.y = y
        this.r = r
        this.image = loadImage("images/mango.png");
        World.add(world,this.body);      
    }

    display(){
      var pos = this.body.postion
      var angle = this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      imageMode(CENTER)
      image(this.image,0,0,this.r,this.r)
      pop()
    }
}