export const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon?limit=25&offset=0"

export const pokeType = (pokemonType) => {
    if (pokemonType == 'fire'){
      return 'bg-[#F08030]'
    }else if (pokemonType == 'grass') {
      return 'bg-[#78C850]'
    }else if (pokemonType == 'bug'){
      return 'bg-[#A8B820]'
    }else if (pokemonType =='water'){
      return 'bg-[#6890F0]'
    }else if (pokemonType =='normal'){
      return 'bg-[#A8A878]'
    }else if (pokemonType =='poison'){
      return 'bg-[#A040A0]'
    }else if (pokemonType =='ghost'){
      return 'bg-[#705898]'
    }else if (pokemonType =='rock'){
      return 'bg-[#B8A038]'
    }else if (pokemonType =='psychic'){
      return 'bg-[#F85888]'
    }else if (pokemonType =='flying'){
      return 'bg-[#A890F0]'
    }else if (pokemonType =='ground'){
      return 'bg-[#E0C068]'
    }else if (pokemonType =='fighting'){
      return 'bg-[#C03028]'
    }else if (pokemonType =='ice'){
      return 'bg-[#98D8D8]'
    }else if (pokemonType =='electric'){
      return 'bg-[#F8D030]'
    }else if (pokemonType =='dark'){
      return 'bg-[#705848]'
    }else if (pokemonType =='dragon'){
      return 'bg-[#B8B8D0]'
    }else if (pokemonType =='steel'){
      return 'bg-[#B8B8D0]'
    }else if (pokemonType =='fairy'){
      return 'bg-[#F0B6BC]'
    }
    
   
    
  }