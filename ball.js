class ball {

    constructor(x,y,radius){

    var options = {

     isStatic:false,
     density:0.5,
   // restitution:1


    }

    this.body=Bodies.circle(x,y,radius,options)
    this.radius=radius
    World.add(world,this.body)


    






    }


    

    display() {

        var pos=this.body.position
        push();
        rectMode(CENTER)
        translate(pos.x,pos.y)
        ellipse(pos.x,pos.y,this.radius)
        pop();












    }




























}