import axios from 'axios'
import { Pokemon } from './../interfaces/pokemon';


export const getPokemon = async (pokemonId:number):Promise<Pokemon> => {
  // console.log("Hola Mundo");

  // if (true) throw new Error("Auxilio.!!!");

  const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

  return data;

}