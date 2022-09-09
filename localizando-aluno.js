const alunos = ['Aryane', 'Henrique', 'Cecilia', 'Hugo']
const notas = [10, 8, 9, 7]

let alunosEnotas = [alunos, notas]

 const exibeNomeNota = (nomeDoAluno) => {
    if (alunosEnotas[0].includes(nomeDoAluno)){
        let indice = alunosEnotas[0].indexOf (nomeDoAluno)
        return alunosEnotas[0][indice] + ', sua media é ' + alunosEnotas[1][indice]
    } else {
        return `Aluno não cadastrado`
    }
 }

 console.log(exibeNomeNota("jubileu"))