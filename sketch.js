var count=0,State=0
var database
var player,game,form
function setup(){
    createCanvas(displayWidth,displayHeight);
    console.log(displayWidth)
    console.log(displayHeight) 
    database=firebase.database()
  game=new Game ()
  game.readGameState() 
  game.startTheGame()
}

function draw(){
    background("white");
    game.readGameState() 
    if(count==4)
    {
      game.writeGameState()
    }
    
}


