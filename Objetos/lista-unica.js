const clientes = [
    {
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
        }],
    },
    {
        nome: "Juliana",
        cpf: "56785958565",
        dependentes: [{ 
            nome:"Sophia",
            parentesco: "Filha",
            dataNasc: "30/08/2020"
    }],
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes)