import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from 'react-router-dom';

export const PublicRoute = ( { children } ) => {

    console.log("ruta publica")
   const resultado =  useContext( AuthContext ); 

   console.log(resultado.authState.logged)


    return( !resultado.authState.logged )
        ? children
        : <Navigate to="/"  />
}
