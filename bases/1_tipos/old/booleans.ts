(() => {

  let isSuperman: boolean = true;
  let isBatman: boolean = false;

  console.log(isSuperman );
  console.log({ isSuperman });

  isSuperman = true && false;
  console.log({ isSuperman });

  isBatman = (isSuperman) ? true : false;
  //isSuperman = (isBatman) ? 'ABC' : "XYZ";
  
})();
