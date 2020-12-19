class Player
{
    constructor()
    {
this.name=null
this.position=null
this.distance=0
    }
    readCount()
    {
        var playerCount=database.ref('playerCount')
        playerCount.on("value",function(data)
        {
           count=data.val() 
        })
    }
writeCount(pc)
{
    database.ref('/').update({
        'playerCount':pc

    })
}
namePlayer()
{
    var f="player"+this.position
    database.ref(f).set({
        'name':this.name,
        'distance':this.distance

    })
}
}