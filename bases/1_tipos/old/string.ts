// funcion anonima autoinvocada para que no choque nuestro codigo en caso de que existen variables con el mismo nombre, esto se encarga de encapsular el codigo
(() => {

  const batman:string = "Batman";
  const linternaVerde:string = "Linterna Verde";
  const volcanNegro: string = `Heroe: Volcan Negro`;

  const abc = 123
  
  console.log({ batman })
  console.log(batman[10]?.toUpperCase() || "No esta batman");

})();
