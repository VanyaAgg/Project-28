
  
class ground {
    
    constructor (x,y,width,height){
        
        
        this.width = width;
        this.height =height;
        this.x = x;
        this.y = y;

        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true})

        World.add (world,this.body);
    }
    display(){
        var groundPos = this.body.position;
        push()
        translate(groundPos.x,groundPos.y);
        rectMode (CENTER)
        fill(128,128,128);
        rect(0,0,this.width,this.height);
        pop()
    }
}