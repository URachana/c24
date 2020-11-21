class createLog {

    constructor(x,y,height,angle) {

        var options={
            restitution:0.8,
            friction: 1,
            density:1
        }

        this.body=Bodies.rectangle(x,y,20,height,options);
        
        this.width=20;
        this.height=height;
        World.add(myWorld,this.body);
        Matter.Body.setAngle(this.body,angle);
    }

    display() {

        var pos = this.body.position;
        var angle= this.body.angle;

        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}