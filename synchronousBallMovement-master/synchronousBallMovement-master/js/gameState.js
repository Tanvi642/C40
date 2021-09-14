class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            player=new Player()
            player.getCount()
            form=new Form()
            form.display();
        } 
        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);
        car1.addImage(car1i);
        car2.addImage(car2i);
        car3.addImage(car3i);
        car4.addImage(car4i);
        cars=[car1,car2,car3,car4];
    }
    play(){
        form.hide();
        Player.getallplayersinfo();
        player.getcaratend;
        if(allplayers!==undefined){
            background(rgb(198,135,103));
            image(tracki,0,-windowHeight*4,windowWidth,windowHeight*5)
           // var position=130;
           var index=0;
           var x=195;
           var y=0
            for(var plr in allplayers){
                index=index+1;
                x=x+200
                y=displayHeight-allplayers[plr].distance;
                cars[index-1].position.x=x;
                cars[index-1].position.y=y;
                //position+=20;
               if(index===player.index){
                  cars[index-1].shapeColor="red";
                  camera.position.x=displayWidth/2
                  camera.position.y=cars[index-1].position.y
                  stroke(10);
                  fill("red");
                  ellipse(x,y,60,60);
                   
               }
                //text(allplayers[plr].name+":"+allplayers[plr].distance,120,position);
            }
        }
    if(keyIsDown(UP_ARROW)&& player.index!== null){
        player.distance+=50;
        player.update();

    }
    
    if(player.distance>4200){
        gameState=2;
        player.rank+=1
        Player.updatecaratend(player.rank);
    }
   
    drawSprites();
        
        
    }
   end(){
       console.log("gameEnded");
       console.log(player.rank);
   }


}
