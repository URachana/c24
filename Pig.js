class createPig {

    constructor(x,y){

        var options={
            restitution:0.8,
            friction :0.3,
            density: 1
        }

        this.width=40;
        this.height=40;
        this.body=Bodies.rectangle(x,y,40,40,options);
        World.add(myWorld,this.body)
        
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(angle);
        stroke("green");
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
    }

}