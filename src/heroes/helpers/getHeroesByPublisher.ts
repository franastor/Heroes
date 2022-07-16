import { heroes }  from '../data/heroes.js'

export const getHeroyesByPublisher = ( publisher ) => {


    console.log (" el el el",publisher);
    const validPublishers = ['DC Comics','Marvel Comics'];
    if ( !validPublishers.includes( publisher.publiser ) ) {
        throw new Error(`${ publisher } is not a valid publisher`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher.publiser );

         
}