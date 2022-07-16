import { heroes }  from '../data/heroes.js'

export const getHeroyesById = ( id ) => {


    return heroes.find( heroe => heroe.id === id );

         
}