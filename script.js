
var evento = 
 [  
    {
    nome: "Colt",
    data: "Data: 23-10-2020",
    horario: "Horário: 11:10",
    valor: "Entrada: R$20",
    local: "Endereço: Rua João dos Reis",
    telefone: "Telefone: 3663-7889",
    categoria: "Categoria: Balada",
    },

    {
      nome: "Camaleon",
      data: "Data: 23-11-2020",
      horario: "Horário: 12:10",
      valor: "Entrada: R$50",
      local: "Endereço: Rua João do Mar",
      telefone: "Telefone: 3663-7889",
      categoria: "Categoria: Balada",
    }
    ,
    {
      nome: "Balada2",
      data: "Data: 23-11-2020",
      horario: "Horário: 12:10",
      valor: "Entrada: R$50",
      local: "Endereço: Rua João do Mar",
      telefone: "Telefone: 3663-7889",
      categoria: "Categoria: Balada",
    }
    ,
    {
      nome: "Balada3",
      data: "Data: 23-11-2020",
      horario: "Horário: 12:10",
      valor: "Entrada: R$50",
      local: "Endereço: Rua João do Mar",
      telefone: "Telefone: 3663-7889",
      categoria: "Categoria: Balada",
    }
   ,
    {
      nome: "Balada4",
      data: "Data: 23-11-2020",
      horario: "Horário: 12:10",
      valor: "Entrada: R$50",
      local: "Endereço: Rua João do Mar",
      telefone: "Telefone: 3663-7889",
      categoria: "Categoria: Balada",
    }
  ,
    {
      nome: "Balada5",
      data: "Data: 23-11-2020",
      horario: "Horário: 12:10",
      valor: "Entrada: R$50",
      local: "Endereço: Rua João do Mar",
      telefone: "Telefone: 3663-7889",
      categoria: "Categoria: Balada",
    }
      ,
    {
      nome: "Balada6",
      data: "Data: 23-11-2020",
      horario: "Horário: 12:10",
      valor: "Entrada: R$50",
      local: "Endereço: Rua João do Mar",
      telefone: "Telefone: 3663-7889",
      categoria: "Categoria: Balada",
    }
      ,
    {
      nome: "Balada7",
      data: "Data: 23-11-2020",
      horario: "Horário: 12:10",
      valor: "Entrada: R$50",
      local: "Endereço: Rua João do Mar",
      telefone: "Telefone: 3663-7889",
      categoria: "Categoria: Balada",
    }
      ,
    {
      nome: "Balada8",
      data: "Data: 23-11-2020",
      horario: "Horário: 12:10",
      valor: "Entrada: R$50",
      local: "Endereço: Rua João do Mar",
      telefone: "Telefone: 3663-7889",
      categoria: "Categoria: Balada",
    }

  
]

var categoria = "baladas";

$("#like").click(function(){
      //pega o numero da imagem
      var x = document.querySelector(".evento").getAttribute("src");
      i = x.replace(/([^\d])+/gim, '');
 
      var favorito = document.getElementById("favorito");
      var li = document.createElement("li");
      favorito.appendChild(li);
      li.innerHTML = evento[i].nome;
      
      var n = Math.floor(Math.random() * 9);

      var e = document.querySelector(".evento");
      
      
      e.setAttribute("src", "img/principal/" + categoria + "/"  + n + ".jpg");

});

$("#deslike").click(function(){

  var n = Math.floor(Math.random() * 9);

  var e = document.querySelector(".evento");
  var categoria = "baladas";
  
  e.setAttribute("src", "img/principal/" + categoria + "/"  + n + ".jpg");

});


$("#principal").click(function(){
  
  var x = document.querySelector(".evento").getAttribute("src");

  //pega o numero da imagem
  a = x.replace(/([^\d])+/gim, '');

  document.getElementById("nome").innerHTML= evento[a].nome;
  document.getElementById("data").innerHTML= evento[a].data;
  document.getElementById("horario").innerHTML= evento[a].horario;
  document.getElementById("valor").innerHTML= evento[a].local;
  document.getElementById("local").innerHTML= evento[a].valor;
  document.getElementById("fone").innerHTML= evento[a].fone;
  document.getElementById("categoria").innerHTML= evento[a].categoria;
})    

