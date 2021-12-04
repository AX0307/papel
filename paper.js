class paper {
    constructor (x,y,radio){
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0,
            density:1.2,
        }
        this.x = x;
        this.y = y;
        this.radio = radio;
        this.image = loadImage ("paper.png");
        this.body = Bodies.circle(this.x, this.y,(this.radio-20)/2,options);
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode (CENTER);
        image(this.image,0,0,this.radio,this.radio);
        pop();
    }
}