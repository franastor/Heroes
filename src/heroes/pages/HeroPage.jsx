import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroyesById } from "../helpers";
const CharactersByHero = ({ alter_ego, characters }) => {
    if (alter_ego === characters) return (<></>)
    return <p> {characters} </p>
}
export const HeroPage = () => {

    const { id } = useParams();

    const hero = useMemo(() => getHeroyesById(id) , [id]);

    const navigate = useNavigate();
    
    const onNavigateBack = () => {
        console.log("entro")
       // const path = `/`;
        return navigate(-1)
    }

    //if(!hero) return <> 404 - Not Found</>

    if (!hero) {

        return <Navigate to="/" />
    }
    const heroImageUrl = `/assets/heroes/${id}.jpg`;
    return (
        <div className="row mt-5">
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img
                    src={heroImageUrl}
                    alt={hero.superhero}
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8">
                <h3> {hero.superhero}</h3>
                <ul className=" list-group list-group-flush">
                    <li className="list-group-item">
                        <b> Alter ego: </b> {hero.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b> Publisher: </b> {hero.publisher}
                    </li>
                    <li className="list-group-item">
                        <b> First appearance: </b> {hero.first_appearance}
                    </li>

                </ul>
                <h5 className="mt-3">Characters </h5>
                <p>
                    {hero.characters}
                </p>
                <button
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}
                >
                    Volver
                </button>
            </div>

        </div>

    )
}