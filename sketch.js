var Movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "Red";
 

  Movingrect = createSprite(425,220,50,100);
  Movingrect.shapeColor = "Red";
}

function draw() {
  background(255,255,255);  
Movingrect.y = mouseY;
Movingrect.x = mouseX;


if (fixedrect.x-Movingrect.x< Movingrect.width/2+fixedrect.width/2
  && Movingrect.x-fixedrect.x< Movingrect.width/2+fixedrect.width/2
  && Movingrect.y-fixedrect.y< Movingrect.height/2+fixedrect.height/2
  && fixedrect.y-Movingrect.y< Movingrect.height/2+fixedrect.height/2
  ) 
  
{
Movingrect.shapeColor = "Pink";
fixedrect.shapeColor = "Pink";
}

else{
  Movingrect.shapeColor = "Red";
  fixedrect.shapeColor = "Red";
}

drawSprites();
}