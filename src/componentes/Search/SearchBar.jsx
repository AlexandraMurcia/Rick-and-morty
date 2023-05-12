import style from './SearchBar.module.css';
import imageLogo from '../../image/logoNav.png';
import { useState } from 'react';

export default function SearchBar(props) {
   let [ id, setId ] = useState('');

   const handleEnter = (event) => {
      if (event.key === 'Enter') {
         props.onSearch(id);
      }
   }

   const handleChange = (evento) => {
      setId(evento.target.value)
   }

   function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
   return (
      <div>
         <div className={style.containerInput}>
         <input 
            type='search' 
            placeholder="Search..." 
            className={style.input}
            onKeyUp={handleEnter}
            onChange={handleChange}
            value = {id}
         />
         <button 
            onClick={()=> props.onSearch(id)}
            className={style.btnBuscar}
         >
         </button>
         <button
         onClick={()=> props.onSearch(random(1,826))}
         className={style.btnRandom}>
         </button>
         </div>
      </div>
   );
}
