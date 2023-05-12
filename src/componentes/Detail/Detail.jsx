import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";
import style from './Detail.module.css';

const Detail = () => {
    const [character, setCharacter] = useState({})
    // console.log('soy el character detail', character);
    const { id } = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <>
        <h1>Detail</h1>
        {
            character ? (
                <div className={style.contenedor}>
                    <div className={style.imagen}>
                    <img className={style.imagenn} src={character.image} alt={character.name} />
                    </div>
                    <div className={style.datos}>
                    <h2>Name: {character.name}</h2>
                    <h2>Status: {character.status}</h2>
                    <h2>Species: {character.species}</h2>
                    <h2>Gender: {character.gender}</h2>
                    <h2>Origin: {character.origin?.name}</h2>
                    </div>
                </div>
            )
             :  (
                ""
             )
        }
        </>
    )
}

export default Detail;