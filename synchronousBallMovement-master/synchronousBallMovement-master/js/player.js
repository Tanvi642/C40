class Player {
    constructor() {
   this.name=null;
   this.index=null;
   this.distance=0;
   this.rank=0;
    }
getCount(){
   database.ref("playerCount").on("value",data=>{
      playerCount=data.val()
  })
}
updateCount(count){
    database.ref("/").update({
        playerCount:count 
    })
}
update(){
    var index="players/player"+this.index
    database.ref(index).set({
        name:this.name,
        distance:this.distance

    })
}
static getallplayersinfo(){
database.ref("players").on("value",data=>{
    allplayers=data.val()
})
}
getcaratend(){
    database.ref("caratend").on("value",data=>{
        this.rank=data.val()
    })
}
static updatecaratend(rank){
database.ref("/").update({
    caratend:rank
})    
}
}

