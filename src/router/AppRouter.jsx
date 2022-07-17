import {  Route, Routes} from 'react-router-dom'
import { Login } from '../auth/pages/Login'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRouter'
export const AppRouter = () => {

    return (
        <> 
   
            <Routes>

                {/* <Route path="login" element={<Login />} /> */}

                <Route path="login/*" element={
                <PublicRoute>
                  {/* <LoginPage /> */}
                  <Routes>
                    <Route path="/*" element={<Login/>} />
                  </Routes>
                </PublicRoute>
              }
            />

                
                <Route path="/*" element={
                    <PrivateRoute >
                        <HeroesRoutes /> 
                    </PrivateRoute>
                } />
                {/* <Route path="/*" element={<HeroesRoutes />} /> */}

                
            </Routes>
        </>
    )
}