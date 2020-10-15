//Create variables here
var dog, dogImg1, happyDog, database, foodS, foodStock;

function preload()
{
	//load images here
  dogImg1 = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
  database = firebase.database;

	createCanvas(500, 500);
  dog = createSprite(width/2, height/2);
  dog.addImage(dogImg1);
  dog.scale(0.25);

  foodStock = database.ref('Food');
  foodStock.on("values", readStock);
}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  //add styles here

}



