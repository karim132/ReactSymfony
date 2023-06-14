import { NavLink } from "react-router-dom";


export default function Navigation(){
    return(
        <header id="header-nav">
            <nav>
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/competences">Compétences</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>


    )
}


