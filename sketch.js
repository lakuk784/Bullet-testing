var bullet,wall,thickness,speed,weight,deformation;

function setup() {
  createCanvas(800,400);

  speed=random(50,90)
  weight=random(400,1500)
  thickness=random(22,83)
  bullet=createSprite(50, 200, 50, 10);
  bullet.velocityX=speed;
  bullet.shapeColor="white"
  wall=createSprite(750,200,thickness,height/2)
}

function draw() {
  background("black"); 
  if (Istouchingcode(bullet,wall)) {
    bullet.velocityX=0
    var deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    
    if (deformation>10){
      wall.shapeColor=color(255,0,0)
    }
    if (deformation<10){
      wall.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}