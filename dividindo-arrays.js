const nomes = ['Joao', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marijorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia'
, 'Vivian', 'Isabela', 'Cabuloso', 'Zika', 'Fred', 'Boca de 09', 'Ze pequeno']

console.log(nomes.length)
//                        onde começa   onde finaliza
const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)