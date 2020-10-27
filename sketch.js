var movingRect , fixedRect;
var gameObject1 , gameObject2 , gameObject3 , gameObject4;

function setup() {
  createCanvas(1700,800);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(200, 300, 80, 50);
  gameObject1 = createSprite(100, 200, 50, 50);
  gameObject2 = createSprite(200, 200, 50, 50);
  gameObject3 = createSprite(300, 200, 50, 50);
  gameObject4 = createSprite(400, 200, 50, 50);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "blue";
  gameObject1.shapeColor = "blue";
  gameObject2.shapeColor = "blue";
  gameObject3.shapeColor = "blue";
  gameObject4.shapeColor = "blue";
}

function draw() {
  background("black");  

  movingRect.x = World.mouseX ;
  movingRect.y = World.mouseY ;

  if (isTouching(movingRect , gameObject1)) {
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red"; 
  }

  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "blue"; 
  }

  movingRect.depth = fixedRect.depth;
  movingRect.depth = movingRect.depth + 1;

  drawSprites();
}