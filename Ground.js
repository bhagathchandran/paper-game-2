class Ground {  
    constructor( x, y, width, height){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(600,590,10,800,options);
        this.width = 800;
        this.height = 15;
	    World.add(world, this.body);
   }
   display(){
       var pos = this.body.position;
       rectMode(CENTER);
       fill("yellow");
       rect(pos.x,pos.y,this.width,this.heigth);
   }
}
