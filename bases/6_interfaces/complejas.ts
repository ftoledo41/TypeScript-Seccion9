// (() => {
//   interface Client {
//     name: string;
//     age?: number;
//     address: Address;
//     getFullAddress(id: string): string;
//   }

//   interface Address {
//     id: number;
//     zip: string;
//     city: string;
//   }

//   const client: Client = {
//     name: "Fernando",
//     age: 25,
//     address: {
//       id: 13,
//       zip: "ZY2 SUD",
//       city: "Ottawa",
//     },
//     getFullAddress(id: string) {
//       return this.address.city;
//     },
//   };

//   const client2: Client = {
//     name: "Francisco",
//     age: 44,
//     address: {
//       id: 14,
//       zip: "ZY2 CHI",
//       city: "San Felipe",
//     },

//     getFullAddress(id: string) {
//       return this.address.city;
//     },
//   };

//   const client3: Client = {
//     name: "Gisella",
//     age: 45,
//     address: {
//       id: 15,
//       zip: "HOLL AA",
//       city: "San Felipe",
//     },
//     getFullAddress(id: string) {
//       return this.address.city;
//     },
//   };

//   console.log(client);
//   console.log(client2);
//   console.log(client3);
// })();
