import { useMemo } from 'react';
import { getHeroyesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';
export const HeroList = (props) => {
    //  const heroes = getHeroyesByPublisher( publiser  )



    const { publiser } = props;

    
    const heroes = useMemo(()=> getHeroyesByPublisher({ publiser }),[ publiser ])


    return (
        <>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {

                    heroes.map(hero => (
                        <HeroCard key={hero.id}
                            {...hero}
                        />
                    ))
                }
            </div>
        </>
    )
}