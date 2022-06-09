  


  function calcularIdade(anos){

return `Daqui a ${anos} anos, ${this.nome} terá 
${this.idade + anos} anos de idade.`;

  }

  const pessoa1 = {
      nome:"Maria",
      idade:30,
  }

  const pessoa2 = {
       nome:"Carla",
       idade:26,
  }

  const animal = {

    nome:"Fafafinhos",
    idade: 2 ,
    raca:"Pug",
  };

  console.log(calcularIdade.call(animal, 8))
  console.log(calcularIdade.call(pessoa1, 8))
  console.log(calcularIdade.call(pessoa2, 8))