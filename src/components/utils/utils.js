export const getClassFromPokeType = (pokemonType) => {

    switch (pokemonType) {
      case 'fire':
        return 'bg-[#F08030]';
      case 'grass':
        return 'bg-[#78C850]';
      case 'bug':
        return 'bg-[#A8B820]';
      case 'water':
        return 'bg-[#6890F0]';
      case 'normal':
        return 'bg-[#A8A878]';
      case 'poison':
        return 'bg-[#A040A0]';
      case 'ghost':
        return 'bg-[#705898]';
      case 'rock':
        return 'bg-[#B8A038]';
      case 'psychic':
        return 'bg-[#F85888]';
      case 'flying':
        return 'bg-[#A890F0]';
      case 'ground':
        return 'bg-[#E0C068]';
      case 'fighting':
        return 'bg-[#C03028]';
      case 'ice':
        return 'bg-[#98D8D8]';
      case 'electric':
        return 'bg-[#F8D030]';
      case 'dark':
        return 'bg-[#705848]';
      case 'dragon':
        return 'bg-[#B8B8D0]';
      case 'steel':
        return 'bg-[#B8B8D0]';
      case 'fairy':
        return 'bg-[#F0B6BC]';
      default:
        return ''; 
    }
      
      
     
      
    }