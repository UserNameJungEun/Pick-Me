import './Header.css';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <section className="Header w1400">
            <article className="Nav">
                <ul className="Nav-Ul">
                   <Link to='/introduce'> <li>Introduce</li></Link>
                   <Link to='/Search'> <li>Search</li></Link>
                   <Link to='/Contents'> <li>Contents</li></Link>
                </ul>

                <Link to='/Main'><div className="Nav_Logo"></div></Link>
                
                <ul className="Nav-Ul">
                <Link to='/Gallery'>   <li>Gallery</li></Link>
                <Link to='/Shop'>  <li>Shop</li></Link>
                <Link to='/Board'>  <li>Q&A</li></Link>
                </ul>


            </article>
        </section>
    );
}

export default Header;
