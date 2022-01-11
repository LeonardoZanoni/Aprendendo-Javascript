const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    fones: ["55591234598", "55219457556"],
    dependentes: [
        {
            nome: "Sara",
            parentesco: "Filha",
            dataNasc: "20/03/2011" },

        {
            nome: "Samia Maria",
            parentesco: "Filha",
            dataNasc: "04/01/2014",
        }
    ],
    saldo:100,
    depositar: function(valor){
        this.saldo += valor
    }
}
console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)