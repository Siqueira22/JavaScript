const alunos = [
    {
    Nome: 'joão',
    nota: 5,
    turma: '1b',
    },
{
    nome: 'Sofia',
    nota:9,
    turma: '1b',
},
{
    nome:'Paulo',
    nota:6,
    turma:'2c',
},
{
    nome:'Gabriel',
    nota:5,
    turma:'2c',
},

];

function alunosAprovados (arr, media){
    let aprovados =[];
for (let i = 0; i < arr.length; i++){

const {nota, nome } = arr[i];

 if (nota >= media){
     aprovados.push(nome);
 }
}
return aprovados;
}
console.log(alunosAprovados (alunos, 6))