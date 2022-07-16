import { heroes }  from '../data/heroes.js'

export const getHeroyesByName = ( name = '' ) => {
    name = name.toLowerCase().trim();

    if (name.length === 0 ) return [];

  
    return heroes.filter( heroe => heroe.superhero.toLowerCase().includes(name) );

         
}