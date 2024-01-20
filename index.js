let nick = "Harry"
let nivel = ""
function saldoVitorias(vitorias, derrotas){
    return vitorias - derrotas;
}
let resultado = saldoVitorias(50, 20)
if (resultado <= 10) {
    nivel = "Ferro";
  } else if (resultado >= 11 && resultado <= 20) {
    nivel = "Bronze";
  } else if (resultado >= 21 && resultado <= 50) {
    nivel = "Prata";
  } else if (resultado >= 51 && resultado <= 80) {
    nivel = "Ouro";
  } else if (resultado >= 81 && resultado <= 90) {
    nivel = "Diamante";
  } else if (resultado >= 91 && resultado <= 100) {
    nivel = "Lendário";
  } else if (resultado >= 101) {
    nivel = "Imortal";
  }
  console.log("O herói " + nick + " tem de saldo " + resultado + " vitórias, e está no nível " + nivel)