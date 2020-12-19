class Form 
{
    constructor()
    {
        this.heading=createElement('h2') 
        this. input=createInput("enter the name")
        this.button=createButton("play")
        this.greating=createElement('h2')
    }
    display()
    {
        console.log("display")
     
     this. heading.html("car racing game")
      this.heading.position(displayWidth-1000,displayHeight-850)
      
     
     this. input.position(displayWidth-1000,displayHeight-500)
     
     this. button.position(displayWidth-1000,displayHeight-400)
      this.button.mousePressed(()=>{
          player.name=this.input.value()
          count=count+1
          player.position=count
          player.writeCount(count)
          player.namePlayer()
          this.input.hide()
         this. button.hide()
         
          this.greating.html("hello "+player.name)
         this. greating.position(displayWidth-1000,displayHeight-200)
      })
    }
}