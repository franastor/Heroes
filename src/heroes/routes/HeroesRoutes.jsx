import {  Navigate , Route, Routes} from 'react-router-dom'
import { Navbar } from "../../interfaz/componets"
import { HeroPage ,Marvel , SearchPage, DC } from '../pages/'



export const HeroesRoutes = () => {

    return (
        <>
            <Navbar></Navbar>
            <div className='container'> 
            <Routes>
                <Route path="marvel" element={<Marvel/>} />
                <Route path="dc" element={<DC/>} />

                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} />

                 {/** Search  , Hero by id */}

                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
            </div>
        </>
    )
}