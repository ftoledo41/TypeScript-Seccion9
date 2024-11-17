// (() => {
//   type Avengers = {
//     nick: string;
//     ironman: string;
//     vision: string;
//     activo: boolean;
//     poder: number;
//   };

//   const avengers = {
//     nick: "Samuel L. Jackson",
//     ironman: "Robert Downey Jr",
//     vision: "Paul Bettany",
//     activo: true,
//     poder: 1500,
//   };

//   const { poder, vision } = avengers;
//   console.log(poder.toFixed(2), vision.toUpperCase());

//   const printAvenger = (avengers: Avengers) => {
//     console.log(avengers.vision);
//   };

//   printAvenger(avengers);

//   const printAvenger2 = ({ ironman }: Avengers) => {
//     console.log(ironman);
//   };

//   printAvenger2(avengers);

//   const printAvenger3 = ({ ironman, ...resto }: Avengers) => {
//     console.log(resto);
//   };

//   printAvenger3(avengers);
// })();
