function preload() {
  
  //backgrounds
  bg1 = loadImage("backgrounds/background1.png")
  bg2 = loadImage("backgrounds/background2.png")
  bg3 = loadImage("backgrounds/background3.png")

  //songs
  believer = loadSound("songs/believer.mp3")
  despacito = loadSound("songs/despacito.mp3")
  girlslikeyou = loadSound("songs/girls like you.mp3")
  uptown = loadSound("songs/uptown funk.mp3")
  onmyway = loadSound("songs/on my way.mp3")


  //icons
  play = loadImage("icons/play.png")
  songs = loadImage("icons/songs.png")
  back = loadImage("icons/background.png")
}
function setup() {
  createCanvas(300,400);

   gameState = "start"
   song = 1
   bg = 1
   score = 0

   object1 = createSprite(150,240)
   object1.addImage(play)
   object1.scale = 0.2

   object2 = createSprite(150,300)
   object2.addImage(songs)
   object2.scale = 0.2

   object3 = createSprite(150,360)
   object3.addImage(back)
   object3.scale = 0.2
   
   icon1 = createSprite(150,350)
   icon1.addImage(bg1)
   icon1.visible = false

   icon2 = createSprite(150,250)
   icon2.addImage(bg2)
   icon2.visible = false

   icon3 = createSprite(150,150)
   icon3.addImage(bg3)
   icon3.visible = false

   blackblock = createSprite(38,0,80,100)
   blackblock.shapeColor = "black"

  path = Math.round(random(1,3))

}

function draw() {
  background(bg2)

  switchback()
  selectsong()
  gameplay()

  if(mousePressedOver(object1)&&gameState === "start"){
  gameState = "play"
  object1.visible = false
  object2.visible = false
  object3.visible = false
  blackblock. y = 0
  }

  if(mousePressedOver(object2)&&gameState === "start"){
    gameState = "songs"
    object1.visible = false
    object2.visible = false
    object3.visible = false
    }

    if(mousePressedOver(object3)&&gameState === "start"){
      gameState = "back"
      object1.visible = false
      object2.visible = false
      object3.visible = false
      }

    if(gameState === "back"){
      icon1.visible = true
      icon2.visible = true
      icon3.visible = true
    }

    else{
      icon1.visible = false
      icon2.visible = false
      icon3.visible = false
    }

    if(gameState === "start"){
      textSize(35)
      fill("white")
      textFont('Georgia')
      text("Piano Tiles",60,50)
    }
  
    if(gameState === "back"){
      textSize(30)
    fill("white")
    textFont('Georgia')
    text("Select a background",20,40)
    text("(1)",180,150)
    text("(2)",180,250)
    text("(3)",180,350)

    }

    if(gameState === "songs"){
    textSize(30)
    fill("white")
    textFont('Georgia')
    text("Select a song",70,40)

   textSize(25)
   text("Believer(1)",10,100)
   text("Despacito(2)",160,100)
   textSize(20)
   text("Girls like you(3)",10,200)
   text("On my way(4)",170,200)
   textSize(25)
   text("Uptown Funk(5)",50,300)

    }
    if(gameState === "died"){
    textSize(30)
    fill("white")
    textFont('Georgia')
    text("You lost",80,130)
    text("Press Space",60,170)
    }

    if(gameState === "play"){
    textSize(30)
    fill("white")
    textFont('Georgia')
    text(score,145,30)
    }

    if(mousePressedOver(blackblock)&&gameState === "play"){
      path = Math.round(random(1,3))
      score = score + 1
      blackblock.y = 0
      if(path === 1){
        blackblock.x = 50
        blackblock.velocityY = 12
        }
    
        if(path === 2){
          blackblock.x = 150
          blackblock.velocityY = 12
          }
    
          if(path === 3){
            blackblock.x = 250
            blackblock.velocityY = 12
            }

            if(song === 1&&score === 1){
            believer.play()
            }

            if(song === 2&&score === 1){
              despacito.play()
              }

              if(song === 3&&score === 1){
                girlslikeyou.play()
                }

                if(song === 4&&score === 1){
                  onmyway.play()
                  }
                  if(song === 5&&score === 1){
                    uptown.play()
                    }
            
    }

    if(gameState === "died"&&keyDown("space")){
      gameState = "start"
      object1.visible = true
      object2.visible = true
      object3.visible = true
      score = 0
    }

    if(blackblock. y >= 350&&gameState === "play"){
      gameState = "died"
      believer.stop()
      despacito.stop()
      girlslikeyou.stop()
      onmyway.stop()
      uptown.stop()
     }

     if(gameState === "play"){
       blackblock.visible = true
     }
     else{
       blackblock.visible = false
     }

  drawSprites()
}

function switchback(){

 if(keyDown("1")&&gameState === "back"){
  bg = 1
  gameState = "start"
  object1.visible = true
  object2.visible = true
  object3.visible = true
}

if(keyDown("2")&&gameState === "back"){
  bg = 2
  gameState = "start"
  object1.visible = true
  object2.visible = true
  object3.visible = true
}

if(keyDown("3")&&gameState === "back"){
  bg = 3
  gameState = "start"
  object1.visible = true
  object2.visible = true
  object3.visible = true
}

if(bg === 3){
  background(bg1)
}

if(bg === 2){
  background(bg2)
}

if(bg === 1){
  background(bg3)
}
}

function selectsong(){

  if(keyDown("1")&&gameState === "songs"){
    song = 1
    gameState = "start"
    object1.visible = true
    object2.visible = true
    object3.visible = true
  }

  if(keyDown("2")&&gameState === "songs"){
    song = 2
    gameState = "start"
    object1.visible = true
    object2.visible = true
    object3.visible = true
  }

  if(keyDown("3")&&gameState === "songs"){
    song = 3
    gameState = "start"
    object1.visible = true
    object2.visible = true
    object3.visible = true
  }

  if(keyDown("4")&&gameState === "songs"){
    song = 4
    gameState = "start"
    object1.visible = true
    object2.visible = true
    object3.visible = true
  }

  if(keyDown("5")&&gameState === "songs"){
    song = 5
    gameState = "start"
    object1.visible = true
    object2.visible = true
    object3.visible = true
  }

}
function gameplay() {
  
  if(gameState === "play"&&blackblock.velocityY === 0){
    path = Math.round(random(1,3))
    blackblock.velocityY = 12
  }

}