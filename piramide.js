//todo o projeto do gerador da pirâmide-padrão e invertida

//declaração de variáveis
const character = '#';
const count = 10;
let rows = []
let inverted = false;

//função que gera uma linha da pirâmide
function padRow(rowNumber, rowCount){
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  //retorna uma linha da pirâmide com o character centralizado
}


for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

//adiciona todas linhas a string com quebra de linha no final
for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);