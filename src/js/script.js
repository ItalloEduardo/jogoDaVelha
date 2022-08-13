var casas = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
var rodada = 0;
var vez = "X";
var vencedor = "";

function start(){
  casas = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  rodada = 0;
  
  if(rodada === 0){
    console.log("X JOGA PRIMEIRO!");
  }
  tabuleiro();
  
  while(!fimDeJogo()){
    jogada();
  }
}

function fimDeJogo(){
  if((casas[0] == casas[1] && casas[1] == casas[2] && casas[0] != " ") ||
    (casas[3] == casas[4] && casas[4] == casas[5] && casas[3] != " ") ||
    (casas[6] == casas[7] && casas[7] == casas[8] && casas[6] != " ") ||
    (casas[0] == casas[3] && casas[3] == casas[6] && casas[0] != " ") ||
    (casas[1] == casas[4] && casas[4] == casas[7] && casas[1] != " ") ||
    (casas[2] == casas[5] && casas[8] == casas[8] && casas[2] != " ") ||
    (casas[0] == casas[4] && casas[4] == casas[8] && casas[0] != " ") ||
    (casas[2] == casas[4] && casas[4] == casas[6] && casas[2] != " ")){
    
    turno();
    vencedor = vez;
    console.log("Parabéns, \"" + vez + "\" venceu o jogo! F5 para jogar novamente!");
    
    return true;

  } else if(casas.every((e) => e != " ")){
      console.log("Empate! F5 para jogar novamente!");
      
      return true;

  } else{
      return false;
  }
};

function jogada(){
  var casa = prompt("Digite uma casa de 1 a 9.");
  
  if(casa < 1 || casa > 9){
  console.error("Insira uma casa válida!");
    return;
  };

  for(i = 1; i <= casas.length; i++){
    if(casa == i){
      if(casas[i - 1] != " "){
        console.error("Esta casa já está ocupada!");
        return;
      } else{
        casas[i - 1] = vez;
      };                
    }; 
  };
  
  console.log("VEZ DE: ", vez);
  tabuleiro();
  turno();
  
  rodada++;
};

function tabuleiro(){
  console.log(" ", casas[0], "|", casas[1], "|", casas[2]);
  console.log("----" + "|" + "---" + "|" +"----");
  console.log(" ", casas[3], "|", casas[4], "|", casas[5]);
  console.log("----" + "|" + "---" + "|" +"----");
  console.log(" ", casas[6], "|", casas[7], "|", casas[8]); 
}

function turno(){
  if(vez == "X"){
    vez = "O";
  } else{
    vez = "X";
  }
}