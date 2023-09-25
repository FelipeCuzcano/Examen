alert("Bienvenido a la pagina de javascript");
var nom = promtp("Ingrese su nombre y Apellido");
var res1 = prompt("¿Cuándo se realizará la inauguración de las Olimpiadas??\nA: Lunes 02 de octubre\nB: Viernes 29 de setiembre\nC: Jueves 28 de setiembre");
if(res1=="B"){
    res1 = 25;
  }else{
      res1 = 0;
  }
var res2 = prompt("¿De qué color es la prompoción de 2do de secundaria?\nA: Celeste o Turquesa\nB: Rojo\nC: Morado");
if(res2=="A"){
    res2 = 25;
  }else{
      res2 = 0;
  }
  var res3 = prompt("¿Nuevo deporte incluido este año?\nA: Futsal femenino\nB: Balonmano\nC: Marcha atlética");
if(res3=="C"){
    res3 = 25;
  }else{
      res3 = 0;
  }

document.write(nom + "Lo has hecho bien");
document.write(nom + "Vuelve a intentarlo");
document.write(nom + " “Puedes hacerlo mejor"); 


