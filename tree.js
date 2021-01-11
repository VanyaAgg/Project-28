class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
    this.width = width;
    this.height = height;
		this.image=loadImage("images/tree.png")
		
    this.body = Bodies.rectangle(x,y,450,600,{isStatic:true})
		World.add(world, this.body);
		

	}
	display()
	{
			var treePos=this.body.position;
			push()
			translate(treePos.x,treePos.y);
			fill(255);
			imageMode(CENTER);
			image(this.image, 0,-this.height/2,this.width, this.height);
			pop()
			
	}

}