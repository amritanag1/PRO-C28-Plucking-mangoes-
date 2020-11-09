class Stretch{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.stretch=Constraint.create(options)
		World.add(world,this.stretch);
	}

	attach(body){
		this.stretch.bodyA=body;
	}

    attach(body){
		this.stretch.bodyA=body;
	}

	fly()
	{
		this.stretch.bodyA=null;
	}

	display()
	{
		if(this.stretch.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

            strokeWeight(2);	
            fill("yellow");
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}