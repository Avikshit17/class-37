class Game
{
    constructor()
    {

    }
    readGameState()
    {
        var gamestate=database.ref('gameState')
        gamestate.on("value",function(data)
        {
          State =data.val() 
        })
    }
    writeGameState()
    {
        database.ref('/').update({
            'gameState':1
    
        })
    }
    startTheGame()
    {
        console.log(State)
        if(State==0)
        {
            console.log("hi")
            form=new Form()
            player=new Player()
            player.readCount()
            form.display()
        }
    }
}