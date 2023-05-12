import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav} from '../../redux/actions';
import { useEffect, useState } from 'react';

function Card(props) {
   const {id, name, gender, species, image, status, origin, onClose, addFav, removeFav, myFavorites  } = props

   const [ isFav, setIsFav ] = useState(false)

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite =() => {
      // isFav ? removeFav(id) : addFav(props);
      // setIsFav(!isFav)
      if(isFav) {
         setIsFav(false)
         removeFav(id)
      }
      else {
         setIsFav(true)
         addFav(props)
      }
   }

   return (
      <div className={style.body}>
            <div className={style.container}>

         <div className={style.card}>

            <div className={style.image}>
            {
            isFav ? (
               <button className={style.btncorazon} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={style.btncorazon} onClick={handleFavorite}>🤍</button>
            )
         }
                        <button 
                  className={style.btn}
                  onClick={()=> onClose(id)}
               >
                     X
               </button>
               <img  
                  src={image} 
                  alt={name} 
               />
            </div>

<div className={style.content}>
<Link to = {`/detail/${id}`}>
                  <h2>{name}</h2>
               </Link>
               <div className={style.caracteristicas}>
               <li>{species}</li>
               <li>{gender}</li>
               <li>{status}</li>
               <li>{origin.name}</li>
               </div>

</div>



         </div>
      </div>
      </div>
      
   );
}

const mapStateToProps =(state) => {
   return {
      myFavorites : state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav : (character) => dispatch(addFav(character)),
      removeFav: (id)=> dispatch(removeFav(id))
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
   )(Card)