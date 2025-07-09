// Importa o pacote para ler o que o usuário digita no terminal
const readline = require('readline');

// Cria uma forma de conversar com o usuário pelo terminal
const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta o nome do herói
teclado.question("Digite o nome do herói: ", function(nome) {
  
  // Pergunta a quantidade de experiência
  teclado.question("Digite a quantidade de experiência (XP) do herói: ", function(valorXP) {
    
    // Transforma o texto digitado em número
    let xp = parseInt(valorXP);
    
    // Cria uma variável para guardar o nível
    let nivel = "";

    // Agora usamos as condições para verificar o nível
    if (xp < 1000) {
      nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
      nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
      nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
      nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
      nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
      nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
      nivel = "Imortal";
    } else if (xp >= 10001) {
      nivel = "Radiante";
    } else {
      nivel = "Desconhecido";
    }

    // Mostra a mensagem final com o nome e o nível
    console.log("\nO Herói de nome **" + nome + "** está no nível de **" + nivel + "**.");

    // Fecha o programa
    teclado.close();
  });
});
