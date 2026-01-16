import headerCSS from './header.module.css'
import { NavLink } from 'react-router-dom'
export function Header(){

    return(
        <div className={headerCSS.headerContainer}>

                    <h1><span>./</span>code<span>/</span>blog</h1>
                <div className={headerCSS.selections}>
                    <NavLink to="/All"className={({ isActive }) => isActive ? headerCSS.active : ''}>
                         All Articles
                    </NavLink>
                    <NavLink to="/Latest"className={({ isActive }) => isActive ? headerCSS.active : ''}>
                         Latest Articles
                    </NavLink>
                    <NavLink to="/About"className={({ isActive }) => isActive ? headerCSS.active : ''}>
                         About
                    </NavLink>
                        </div>
        </div>
    )
}