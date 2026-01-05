import { Header } from "./Components/Header/Header"
import { Post } from "./Components/Posts/Post"
import { Sidebar } from "./Components/Sidebar/Sidebar"
import appCSS from '../App.module.css'
 

function App() {
  return(
        <div className={appCSS.pageContainer}>

            <div className={appCSS.leftSide}>
            <Header></Header>
             <Post></Post>
            </div>
            <div className={appCSS.rightSide}>
            <Sidebar></Sidebar>
            </div>
        </div>
  )
}

export default App
