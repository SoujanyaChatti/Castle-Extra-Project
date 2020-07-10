class circle{
    constructor(x1,y1,x2,y2,x3,y3){
        var options={
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
        }
        this.body=Matter.Bodies.polygon(485,132,600,0,715,132,options);
        
        World.add(world,this.body);
    }
    display(){
       
        
        fill("pink");
        triangle(485,132,600,0,715,132);
        
    }
  

    }