export function realizarCalculo(numero1, numero2, operacao, setResultado) {

const n1 = Number(numero1);
const n2 = Number(numero2);

switch (operacao) {

case '+':
setResultado((n1 + n2) / 2);
break;

case '-':
if (n1 > n2) {
setResultado('A primeira nota é maior');
} else {
setResultado('A segunda nota é maior');
}
break;

case '*':
if (((n1 + n2) / 2) >= 6) {
setResultado('Aluno aprovado');
} else {
setResultado('Aluno reprovado');
}
break;

case '/':
if (n1 < n2) {
setResultado('A primeira nota é menor');
} else {
setResultado('A segunda nota é menor');
}
break;

default:
setResultado('Opção inválida');
}
}