import { MdOutlineNavigateBefore } from "react-icons/md";
import sideCSS from './side.module.css'
import { RiResetLeftLine } from "react-icons/ri";
import { FaRandom } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink,useNavigate} from "react-router-dom";
import { useEffect, useState} from "react";


interface tagsData{
    id:number
    name:string
}
export function Sidebar(){

    const navigate = useNavigate()

    const [search,setSearch] = useState("")
    const[data,setData]= useState<tagsData [] |null>(null)

   
    async function getTags(){
        const response = await fetch(`${import.meta.env.VITE_API_URL}/Posts/Tags`,{
            method:"GET",
            headers:{'content-type':'application/json'}
        })
        const json = await response.json() as tagsData[]
        setData(json)
    }


    function handleSearchInput(e:React.ChangeEvent<HTMLInputElement>){
        setSearch(e.target.value)
    }


    function handleKeyDown(e:React.KeyboardEvent){
       if(e.key=="Enter")
        postsSearch()

    }

    async function postsSearch(){
        navigate(`/Search/${search.trim()}`)
    }
 


    useEffect(()=>{
        getTags()
    },[])

  


    return(
        <div className={sideCSS.sideBarContainer}>

             
                <h1>Search</h1>
                <div className={sideCSS.searchBarContainer}>
                    <input type='text' className={sideCSS.searchInput} value={search} onKeyDown={handleKeyDown} onChange={handleSearchInput}></input>
                    <MdOutlineNavigateBefore size={30}></MdOutlineNavigateBefore>
                </div>
                <h1>All tags</h1>

            
                <div className={sideCSS.tagsContainer}>
                    {data?.map((tag)=>(
                        <NavLink key={tag.id} className={({isActive})=>isActive? sideCSS.active: ''} to={`/${tag.name}`}>{tag.name}</NavLink>
                    ))}
                </div>


                <NavLink to={'/All'}  className={sideCSS.clearFilter}>
                    <div>Clear filter</div>
                    <RiResetLeftLine size={20}></RiResetLeftLine>
                </NavLink>


                <div className={`${sideCSS.bar} ${sideCSS.randomArticle}`}  >
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