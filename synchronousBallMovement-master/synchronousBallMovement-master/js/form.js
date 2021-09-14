class Form{
    constructor(){
    this.title=createElement("h1");
    this.input=createInput("name");
    this.button = createButton("play");
    this.greeting= createElement("h3");
    this.reset=createButton("reset");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        this.title.html("Car Racing Game");
        this.title.position(windowWidth/2 - 50 , 0);
        this.input.position(windowWidth/2-40,windowHeight/2-80);
        this.button.position(windowWidth/2+30,windowHeight/2);
        this.reset.position(windowWidth-100,50);
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            database.ref("/").update({
                players:null
                
            })
        })
        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name= this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name);
            this.greeting.position(windowWidth/2-70,windowHeight/4);
            
        })
    }
}
