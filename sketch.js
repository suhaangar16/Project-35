var dog, happyDog, database, foodS, foodStock,foodObj,fedTime,lastFed,feedDog,addFood;

function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,300,0,0);
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  feed=createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {  
background(46,139,87);

  display();

  fedTime = database.ref('Feed Time');
  fedTime.on("value",function(data){
    lastFed = data.val();
  });

  drawSprites();
  text = "Press UP_ARROW key to feed Drago Milk!"
  textSize("4");
  fill("white");
  stroke("0");

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



