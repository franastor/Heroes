import { useForm } from '../../hooks/useForm';
import { useNavigate, useLocation } from "react-router-dom";
import { HeroCard } from '../components';
import queryString from 'query-string'
import { getHeroyesByName } from '../helpers';

export const SearchPage = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search) // con esto desesctructuro la q y sino viene es un string vacio
    const { searchText, onInputChange } = useForm({

        searchText: q

    });

   



    const heroes = getHeroyesByName(q);
    const showSearch = (q.length === 0);

    const showError = (q.length > 0) && heroes.length ===0;

    const onSearchSubmit = (event) => {
        event.preventDefault(); // para evitar que haga un full refresh



     //   if (searchText.trim().length <= 1) return;

        navigate(`?q=${searchText}`)




    }
    return (
        <>
            <h1> Buscador</h1>
            <hr></hr>
            <div className="row">
                <div className="col-5">
                    <h4>  Buscando... </h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Busca tu Heroe"
                            name="searchText"
                            autoComplete="off"
                            className="form-control"
                            value={searchText}
                            onChange={onInputChange}
                        >
                        </input>


                        <button className="btn btn-outline-primary mt-2">
                            Buscar
                        </button>

                    </form>
                </div>
                <div className="col-7">
                    <h4> Resultado </h4>
                    <hr />
                    {/* {
                        ( q ==='')
                        ?<div className="alert alert-primary"> Buscando al Heroe </div>
                        : ( heroes.length ===0 )   
                        
                        && <div className="alert alert-danger"> Heroe No encontrado con <b> {q}</b>  </div>
                        
                    } */}
                    
                    {/* <div className="alert alert-primary" style = {{display: q !== '' ? 'none' : ''}}> Buscando al Heroe </div> */}
                    <div className="alert alert-primary animate__animated animate__fadeInLeft" style = {{display: showSearch ? '' : 'none'}}> Buscando al Heroe </div>
                    <div className="alert alert-danger animate__animated animate__fadeInLeft" style = {{display:  showError ? '' : 'none'}}> Heroe No encontrado con <b> {q}</b>  </div>
                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>
        </>

    )
}