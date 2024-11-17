(() => {
  // para manegar singleton
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis el único");
      }
      return Apocalipsis.instance;
    }

    changeName(newName:string): void {
      this.name = newName;
    }
  }

  const apocalipsis = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  apocalipsis.changeName("Xavier");

  console.log(apocalipsis, apocalipsis2, apocalipsis3);

  // const apocalipsis = new Apocalipsis("Soy Apocalipsis el único...!!!");
  // const apocalipsis2 = new Apocalipsis("Soy Apocalipsis el único...!!!");
  // const apocalipsis3 = new Apocalipsis("Soy Apocalipsis el único...!!!");

  // console.log(apocalipsis);
  // console.log(apocalipsis2);
  // console.log(apocalipsis2);
})();
