class Box {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility=255;
      World.add(world, this.body);
    }
    display(){
     
      if(this.body.speed<2){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255,153,204);
        rect(pos.x, pos.y, this.width, this.height);
        }
        else{
                                                                           
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility-5;
          tint(255,this.visibility);
         
          pop();
        }
    }
    score(){
      if(this.visibility<0 && this.visibility>-1005){
        
         score++;
     }
    
     }
    
    
  };

  class Box1 {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=255;
    }
    display(){
      
      if(this.body.speed<2){
        var pos =this.body.position;
      rectMode(CENTER);
      fill(0,204,255);
      rect(pos.x, pos.y, this.width, this.height);
        }
        else{
                                                                           
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility-5;
          tint(255,this.visibility);
         
          pop();
        }
    }
    score(){
      if(this.visibility<0 && this.visibility>-1005){
        
         score++;
     }
    
     }
  };
