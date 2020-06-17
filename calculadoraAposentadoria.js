const contribuicaoHomem = 35;
const contribuicaoMulher = 30;

const quantoFaltaM = contribuicaoMulher - contribuicao
const quantoFaltaH = contribuicaoHomem - contribuicao

const quantosAnosM = 85 - (idade + contribuicao)
const quantosAnosH = 95 - (idade + contribuicao)

if (idade - contribuicao < 14){
    console.log ('Idade ou tempo de contribuição inválido')
} else {


if (sexo == 'F') {
    if (contribuicao >= contribuicaoMulher) {
        if (idade + contribuicao >= 85) {
            console.log (`${nome}, você pode se aposentar!`)
        } else {
            console.log (`${nome}, você já tem tempo de contribuição e poderá se aposentar com ${idade + quantosAnosM} anos`)
        }    
    } else {
        console.log (`${nome}, você ainda não pode se aposentar! Você precisa trabalhar mais ${quantoFaltaM} anos.`)
    }
} else {
    if (sexo == 'M') {
        if (contribuicao >= contribuicaoHomem) {
            if (idade + contribuicao >= 95) {
                console.log (`${nome}, você pode se aposentar!`)
            } else {
                console.log (`${nome}, você já tem tempo de contribuição e poderá se aposentar com ${idade + quantosAnosH} anos`)
            }    
        } else {
            console.log (`${nome}, você ainda não pode se aposentar! Você precisa trabalhar mais ${quantoFaltaM} anos.`)
        }
        }
}

}
