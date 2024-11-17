import powers from "../data/powres";

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) { }
  
  get power():string {
    return powers.find(power => power.id === this.powerId)?.desc || 'NOT FOUND';
  }
}

export class Hero2 {}
export class Hero3 {}
export class Hero4 { }

export const PI = 3.1415;
export const miNombre = "Francisco";
