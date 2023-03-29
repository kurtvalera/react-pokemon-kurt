import classNames from "classnames";
import { getClassFromPokeType } from '../components/utils/utils'
const Catalog = ({ data, pcData }) => {
  return (
    <>
      {data?.map((pokemonData) => {
        const pokemonType = pokemonData.types?.map((pokemonType) => {
          return pokemonType.type.name;
        });

        return (
          <button
            className="w-[30%] h-[250px] rounded-[10px] m-[10px] flex"
            key={pokemonData.id}
            onClick={() => pcData(pokemonData)}
          >
            <div
              className={classNames(
                "w-full",
                "h-full",
                "flex",
                "flex-col",
                "mx-auto",
                getClassFromPokeType(pokemonType[0])
              )}
            >
              <div className="flex flex-col my-auto">
                <img
                  className="w-[50%] h-[150px] mx-auto"
                  src={pokemonData.sprites.other.dream_world.front_default}
                />
                <div className="capitalize text-white mx-auto mt-[20px]">
                  {pokemonData.name}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </>
  );
};

export default Catalog;
