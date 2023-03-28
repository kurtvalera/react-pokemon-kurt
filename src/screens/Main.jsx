import { useEffect } from "react";
import { useState } from "react";

import {pokeApiUrl as pokeApiUrl} from '../components/constants/constants';
import { instance } from "../components/api/api";

import Catalog from "../components/Catalog";
import PokeCard from "../components/PokeCard";

const Main = () => {
  const [pokedex, setPokedex] = useState([]);
  const [url, setUrl] = useState(pokeApiUrl);
  const [pokemon, showPokemon] = useState();

  const getData = async () => {

    const response = await instance();
    getPokeData(response.data.results);
    setUrl(response.data.next);
  };

  const getPokeData = async (response) => {
    response.map(async (pokemon) => {
      const res = await instance(pokemon.url);

      setPokedex((pokedex) => {
        pokedex = [...pokedex, res.data];
        return pokedex;
      });
    });
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
    <>
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
    </>
  );
};

export default Main;
