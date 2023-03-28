const PokeCard = ({ pokemon }) => {
  return (
    <>
      {!pokemon ? (
        ""
      ) : (
        <div className="container flex flex-col" key={pokemon.id}>
          <div className="mx-auto">
            <img src={pokemon.sprites.other.home.front_default} />
          </div>
          <div className="capitalize text-center font-extrabold text-[40px]">
            {pokemon.name}
          </div>
          <div className="capitalize text-center font-bold text-[24px]">
            # {pokemon.order}
          </div>
          <div className="capitalize flex flex-row text-center mx-auto tracking-wide leading-loose">
            Moves:
            {pokemon.abilities?.map((pokemonMoves) => {
              return (
                <div className="text-center">
                  {pokemonMoves.ability.name + ", "}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default PokeCard;
