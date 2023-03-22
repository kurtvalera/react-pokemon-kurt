import classNames from "classnames";

const Catalog = ({ data, pcData }) => {
   
    return (
        <>
        {
            data?.map((pokemonData) => {
                const pokemonType = pokemonData.types?.map((pokemonType)=>{
                    return pokemonType.type.name;
                })
                

                
                return (
                    
                    <button className="w-[30%] h-[250px] rounded-[10px] m-[10px] flex"
                        key={pokemonData.id}  
                        onClick={()=>pcData(pokemonData)}
                    >
                        <div className={
                            classNames(
                                "w-full", "h-full", "flex", "flex-col", "mx-auto",
                                (pokemonType[0] == 'grass') && 'bg-[#78C850]',
                                (pokemonType[0] == 'bug') && 'bg-[#A8B820]',
                                (pokemonType[0] == 'fire') && 'bg-[#F08030]',
                                (pokemonType[0] == 'water') && 'bg-[#6890F0]',
                                (pokemonType[0] == 'normal') && 'bg-[#A8A878]',
                                (pokemonType[0] == 'poison') && 'bg-[#A040A0]',
                                (pokemonType[0] == 'electric') && 'bg-[#F8D030]',
                                (pokemonType[0] == 'ice') && 'bg-[#98D8D8]',
                                (pokemonType[0] == 'fighting') && 'bg-[#C03028]',
                                (pokemonType[0] == 'ground') && 'bg-[#E0C068]',
                                (pokemonType[0] == 'flying') && 'bg-[#A890F0]',
                                (pokemonType[0] == 'psychic') && 'bg-[#F85888]',
                                (pokemonType[0] == 'rock') && 'bg-[#B8A038]',
                                (pokemonType[0] == 'ghost') && 'bg-[#705898]',
                                (pokemonType[0] == 'dark') && 'bg-[#705848]',
                                (pokemonType[0] == 'dragon') && 'bg-[#B8B8D0]',
                                (pokemonType[0] == 'steel') && 'bg-[#B8B8D0]',
                                (pokemonType[0] == 'fairy') && 'bg-[#F0B6BC]',
                                
                            )
                        }>  
                            <div className="flex flex-col my-auto">
                                <img className="w-[50%] h-[150px] mx-auto" src={pokemonData.sprites.other.dream_world.front_default} />
                                <div className="capitalize text-white mx-auto mt-[20px]">
                                    {pokemonData.name}
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </button>
                    
                    
                )
            })
        }
        </>
       
        
        
    )
}

export default Catalog;