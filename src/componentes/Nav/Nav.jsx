import SearchBar from "../Search/SearchBar";
import style from "./Nav.module.css"
import { Link } from "react-router-dom";
import imageLogo from '../../image/logoNav.png';

const Nav = (props) => {
  const { onSearch, setAccess } = props;

  const handleLogOut = () => {
    setAccess(false);
  };
  return (
    <div className={style.container}>
      <div className={style.imglogo}>
      </div>
      <div className={style.componentes}>
      <Link to="/about" >
        <button className={style.btn}>About</button>
      </Link>

      <Link to="/home" >
        <button className={style.btn}>Home</button>
      </Link>

      <Link to="/favorites" >
        <button className={style.btn}>Favorites</button>
      </Link>
      </div>


      <div className={style.search}>
      <SearchBar onSearch={onSearch} />
      <button onClick={handleLogOut} className={style.btnsalir}></button>

      </div>
      
    </div>
  );
};

export default Nav;
