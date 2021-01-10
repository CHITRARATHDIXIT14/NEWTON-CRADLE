class chain {

    constructor(bodyA,pointB){

    var options={

      bodyA:bodyA,
      pointB:pointB,
      stiffness:0.04,
      length:10
    }
    this.pointB=pointB
    this.body=Constraint.create(options)
    World.add(world,this.body)
    }


    display(){
        var pointA = this.body.bodyA.position
        var posB = this.pointB;
        strokeWeight(4)
        line(pointA.x,pointA.y, pointB.x, pointB.y);





    }
}
