/*class Box{
     constructor(x, y, width, height){

          var options = {
               isStatic : true
          }

          this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;

          World.add(world,this.body);
     }
     display(){
          var pos = this.body.position;
          fill("red");
          rect(pos.x,pos.y,this.width,this.height);
     }
}*/
class Box{
     constructor(x, y, width, height) {
          var options = {
              'restitution':0.8,
              'friction':2,
              'density':1.0,
             isStatic:true
          }
          this.body = Bodies.rectangle(x, y, width,height,options);
          this.width = width;
          this.height = height;
      
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          //push();
          //translate(pos.x,pos.y);
          rectMode(CENTER);
          fill("red");
          rect(pos.x,pos.y, this.width, this.height);
          //pop();
        }
}