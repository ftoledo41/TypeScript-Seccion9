(() => {
  type Hero = {
    name: string;
    age?: number;
    // powers: string[];
    powers: number[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: [1, 2],
    // powers: ["Super velocidad", "viajar en el tiempo"],
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 60,
    powers: [1],
    // powers: ["Super velocidad"],
    getName() {
      return this.name;
    },
  };
})();
