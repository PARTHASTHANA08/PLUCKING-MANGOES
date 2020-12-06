class ROCK{
    constructor(x,y,width,height){
        var options ={
        restitution:1,
        density:1    
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("SPRITES/stone.png");
        this.width = width;
        this.height  = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}