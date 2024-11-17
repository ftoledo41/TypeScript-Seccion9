// (() => {
//   class Avenger {


//     constructor(public name:string, public realName: string) {
//       console.log("Constructor Avenger llamado.!!!")
//     }

//     // con protected puedo accceder de la clase que la hereda
//     protected getFullName() {
//       return `${this.name} ${this.realName}`
//     }
//   }

//   class Xmen extends Avenger{
//     constructor(
//       name: string,
//       realName: string,
//       public isMutant:boolean
//     ) {
//       super(name, realName)
//       console.log("Contructor Xmen llamado.!!!")
//     }

//     get fullName() {
//       return `${this.name} - ${this.realName}`
//     }

//     set fullName(name: string) {
//       if(name.length < 3 ) throw new Error ("El nombre debe tener mas de tres letras.!!!")
//       this.name = name;
//     }

//     getFullNameDesdeXmen() {
//       console.log(super.getFullName())
//     }
//   }


//   const wolverine = new Xmen("Wolverine", "Logan", true);
//   console.log(wolverine.fullName);
//   wolverine.fullName = "Francisco";
//   console.log(wolverine.fullName);

//   // console.log({ wolverine });

//   // const nuevoAvenger = new Avenger("Hola", "Mundo");

// })()