// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

const dadosProgramador = {
    nome: 'Carlos',
    idade: 32,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O usuário ${dadosProgramador.nome} tem ${dadosProgramador.idade} anos e usa a tecnologia ${
    dadosProgramador.tecnologias[0].nome} com especialidade em ${dadosProgramador.tecnologias[0].especialidade}`)
