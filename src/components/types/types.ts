export type Pokedex = {
    name: string,
    id:number,
    url: string,
    sprites: Sprites,
    order: number,
    img_url: string,
    types: PokemonType[]
  }
export type Pokemon = {
    name: string,
    id:number,
    url: string,
    sprites: Sprites,
    order: number,
    img_url: string,
    types: PokemonType[]
  }
    export type Sprites = {
        other: Other
    }
    export type Other = {
        dream_world: DreamWorld
    }
    export type DreamWorld = {
        front_default: string
    }
  export type PokemonType = {
    slot: number,
    type: Type;
  }

  export type Type = {
    name: string,
    url: string,

  }