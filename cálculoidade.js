function CalculadoraIdade (AnoNascimento){
    const anoatual = 2023;
    return anoatual - AnoNascimento;
}
const nome = prompt (' Bem vindo! Digite seu nome: ');
const ano_nascimento = prompt (' Agora, digite seu ano de nascimento: ');
alert('Olá, o seu nome é ' + nome + ' e você tem ' + CalculadoraIdade (ano_nascimento) + ' anos.');