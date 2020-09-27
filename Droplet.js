class Droplet {
    constructor(x,y,radius){
        var options = {
            restitution : 0.04
        }
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
    }
    display(){
      var position = this.body.position
        ellipseMode(CENTER)
        ellipse(0,0,this.radius)
    }
}