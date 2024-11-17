import { genericFunctionArrow } from "../generics/generics"
import { Hero, Villain } from "../interfaces";
const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel:130
}

// console.log(genericFunctionArrow<Hero>(deadpool).dangerLevel)

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);