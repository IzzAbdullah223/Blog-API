import { Header } from "./Components/Header/Header"
//import { Post } from "./Components/Posts/Post"
import { Sidebar } from "./Components/Sidebar/Sidebar"
import appCSS from '../App.module.css'
import { SmallArticle } from "./Components/Article/SmallArticle"

 

function Article() {

 
  return(
        <div className={appCSS.pageContainer}>
            <div className={appCSS.leftSide}>
            <Header></Header>
             <SmallArticle></SmallArticle>
            </div>
            <div className={appCSS.rightSide}>
            <Sidebar></Sidebar>
            </div>
        </div>
  )
}

export default Article
