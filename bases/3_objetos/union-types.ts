(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  // aqui permitimos multiples tipos
  let myCustomVariables: string | number | Hero = "Francisco";

  console.log(myCustomVariables);
  console.log(typeof myCustomVariables);

  myCustomVariables = 20;
  console.log(myCustomVariables);
  console.log(typeof myCustomVariables);

  myCustomVariables = {
    name: "Bruce Wayne",
    age: 45,
    powers: [1],
  };

  console.log(myCustomVariables);
  console.log(typeof myCustomVariables);
})();
