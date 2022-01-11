const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    fones: ["55591234598", "55219457556"]
}

                      //pra cada indice da nossa array que estamos chamando de fone               
cliente.fones.forEach(fone => console.log(fone))

