//Sistema de entrada para festa

const nome = "Júlio César dos Santos";
const idade = 36;

const ehVIP = true;
let mensagem = "";
if (ehVIP) {
  mensagem = `<p style="color:gold;font-size:40px;text-align:center;"> Você esta na lista VIP. Entrada liberada com  tapete vermelho</p>`;
} else if (idade >= 18 && idade < 60) {
  mensagem = `<p style="color:green;font-size:40px;text-align:center;">${nome}, Entrada permitida. Aproveite a festa.</p>`;
} else if (idade > 60) {
  `<p style="color:blue;font-size:30px;text-align:center;">${nome}entrada permitida para maiores de 60 naos.</p>`;
} else {
  mensagem = `<p style="color: red;font-size:40px;">${nome}, você é menor de idade e não pode entrar na festa.</p>`;
}
document.writeln(mensagem);
