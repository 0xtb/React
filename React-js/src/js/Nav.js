import '../css/Nav.css';
import { Link } from 'react-router-dom';


function Nav(){
    return (
      <div className="con-nav">
        <ul className="ul-nav">
          <li><Link className="a" to='/'>Home</Link></li>
          <li><Link className="a" to='/service'>Service</Link></li>
          <li><Link className="a" to='/about'>About me</Link></li>
          <li><Link className="a" to="/login">Login</Link></li>
        </ul>
      </div>
  );
}

export default Nav;
