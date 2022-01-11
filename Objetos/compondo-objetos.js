const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    fones: ["55591234598", "55219457556"],
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"Filha",
    dataNasc:"20/03/2011",

}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva",

console.log(cliente)