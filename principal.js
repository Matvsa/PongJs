let biblio = false;

/// Tamanho da bola

let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 30
let rBolinha = dBolinha / 2 ;


/// Velocidade da bola

let xVelocidade = 7;
let yVelocidade = 7;



/// Raquete jogador

let xRaquete = 5;
let yRaquete = 150;
let cRaquete = 10;
let aRaquete = 90;

/// Raquete oponente

let xRaqueteb = 585 ;
let yRaqueteb = 150 ;
let movb;


/// Placar
let pontos = 0;
let pontosop = 0;


////sons
let ponto;
let raquetada;
let trilha;

///############################################

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
  
}
function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  bola()
  movimentacaob()
  raquete()
  movimentacaor()
  colisao(xRaquete, yRaquete)
  colisao(xRaqueteb, yRaqueteb)
  raqueteb()
  movibot()
  placar()
  contador()
}

//################################################
///Bola
function bola(){
  /// Desenho da bola
  circle(xBolinha, yBolinha, rBolinha)
  
}

function movimentacaob(){
  xBolinha += xVelocidade
  yBolinha += yVelocidade
  
  if (xBolinha + rBolinha > width + 10 ||
    xBolinha + rBolinha < 13)
    xVelocidade *= -1
  if (yBolinha + rBolinha > height + 10 ||
     yBolinha + rBolinha < 0)
    yVelocidade *= -1
  
    
}


///Raquete(Jogador 1)
function raquete(){
  rect(xRaquete, yRaquete, cRaquete, aRaquete)
}


function movimentacaor(){
  if (keyIsDown(UP_ARROW))
    yRaquete -= 7
  if (keyIsDown(DOWN_ARROW))
    yRaquete += 7
}


  function  colisao(x, y){
  biblio = collideRectCircle(x, y, cRaquete, aRaquete, xBolinha, yBolinha, dBolinha);
  if (biblio){
    xVelocidade *= -1
    ///raquetada.play()

  }
}

/// Raquete oponente
function raqueteb(){
  rect(xRaqueteb, yRaqueteb, cRaquete, aRaquete)

}



function movibot(){
  movb = yBolinha - yRaqueteb - cRaquete /2 - 30
  
  yRaqueteb += movb
}


//#######################################

function placar(){
  stroke(250)
  textAlign(CENTER)
  fill(218, 165, 32)
  rect(150, 10, 40, 20)
  rect(450, 10, 40 , 20)
  fill(255)
  text(pontos, 470, 25)
  text(pontosop, 170, 25)
}
function contador(){
  if (xBolinha > 596){
    pontos += 1
    ponto.play()
  }
  if (xBolinha < 0){
    pontosop += 1
    ponto.play()
  }
}



