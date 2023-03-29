import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import {Pokedex} from '../components/types/types';
import {Pokemon} from '../components/types/types'

import Catalog from "../components/Catalog";
import PokeCard from "../components/PokeCard";

const Main = () => {


  const [pokedex, setPokedex] = useState<Pokedex[]>([]); 
  
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=25&offset=0"
  );
  const [pokemon, showPokemon] = useState<Pokemon>();

  const getData = async () => {
    const response = await axios.get(url);
    getPokeData(response.data.results);
    setUrl(response.data.next);
  };

  const getPokeData = async (response?: []) => {
    const x: Pokedex[] = response;
    x.map(async (pokedex) => {
      const res = await axios.get(pokedex.url);
      setPokedex((pokemon)=> {
        pokemon = [...pokemon, res.data];
        return pokemon;
      })
      
    })
  };

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
   
      <div className="container flex flex-row w-full m-0 p-0">
        <div
          className="flex flex-row flex-wrap max-h-[100vh] max-w-[50vw] overflow-y-scroll"
          onScroll={handleScroll}
        >
          <Catalog data={pokedex} pcData={(pokemon) => showPokemon(pokemon)} />
        </div>
        <div className="max-w-[100vw] w-full max-h-[100vh]">
          <PokeCard pokemon={pokemon} />
        </div>
      </div>
  
  );
};

export default Main;
