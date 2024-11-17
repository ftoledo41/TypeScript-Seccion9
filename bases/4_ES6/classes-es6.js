(() => {
  class Avengers {
    constructor(name = "No Name", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvenger extends Avengers {
    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avengers("Hulk", 9001);
  const flacon = new FlyingAvenger("Flacon", 50);

  console.log(hulk);
  console.log(flacon);
})();
