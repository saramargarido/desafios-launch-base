const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(", ")}`)
}

function checaSeUsuarioUsaCSS (usuario) {
    for (let tecnologia of usuario.tecnologias) {
        encontreiCSS = tecnologia == 'CSS'
    } 

    if (encontreiCSS) {
        return `O usuário ${usuario.nome} trabalha com CSS`
    }
    return `O usuário ${usuario.nome} não trabalha com CSS`
}

for (let usuario of usuarios) {
   console.log(checaSeUsuarioUsaCSS(usuario))
}