// class Paper {  
//     constructor(){
//         var options = {
//             'restitution':0,
//             'friction':0,
//             'density':1.2,
//         }
//         this.body = Bodies.circle(250,540,20, options);
//         this.width = 33;
//         
// 	    World.add(world, this.body);
       
        
//    }
//    display(){
//     var pos = this.body.position;
//     var angle = this.body.angle;
//     fill("white")
//     rotate(angle);
//     imageMode(CENTER);
//    ;
//    }
// }

class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("Images/paper.png");
	    World.add(world, this.body);
       
        
   }
   display(){
    fill("white");
    image(this.image,this.body.position.x,this.body.position.y,70,70);
    imageMode(CENTER);
    
   }
}