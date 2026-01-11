import { MdOutlineNavigateBefore } from "react-icons/md";
import sideCSS from './side.module.css'
import { RiResetLeftLine } from "react-icons/ri";
import { FaRandom } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export function Sidebar(){

            const tags=["JavaScript","HTML","CSS","TypeScript","React","AI","MongoDB","Mindset","Node.js","Vite","Express","Git",
                "Visual Studio Code","Tools"
    ]


    return(
        <div className={sideCSS.sideBarContainer}>

             
                <h1>Search</h1>
                <div className={sideCSS.searchBarContainer}>
                    <input type='text' className={sideCSS.searchInput}></input>
                    <MdOutlineNavigateBefore size={30}></MdOutlineNavigateBefore>
                </div>
                <h1>All tags</h1>

            
                <div className={sideCSS.tagsContainer}>
                    {tags.map((tag)=>(
                        <NavLink key={tag} className={({isActive})=>isActive? sideCSS.active: ''} to={`/${tag}`}>{tag}</NavLink>
                    ))}
                </div>


                <div className={sideCSS.clearFilter}>
                    <div>Clear filter</div>
                    <RiResetLeftLine size={20}></RiResetLeftLine>
                </div>


                <div className={`${sideCSS.bar} ${sideCSS.randomArticle}`}>
                    <div> 
                        <div>Random article</div>
                        <FaRandom></FaRandom>
                    </div>
                </div>


                <div className={sideCSS.bar}>
                    <div> 
                        <a href='https://github.com/IzzAbdullah223/Blog-API'><FaGithub size={30} color='#c8bb97'></FaGithub></a>
                        <a href='https://www.linkedin.com/in/izz-eldin-abdallah-1782172a6/'><FaLinkedin size={30} color='#c8bb97'></FaLinkedin></a>
                    </div>
                </div>
        </div>
        
    )
}