import {Outlet} from 'react-router-dom'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'
import  appCSS from './layout.module.css'
import { useRef,useState } from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export function Layout(){

    const [displayer,setDisplayer] = useState(true)

    const displayRef = useRef<HTMLDivElement>(null)

    const leftSideRef = useRef<HTMLDivElement>(null)

    const rightSideRef = useRef<HTMLDivElement>(null)

    function display(){
        
        if(displayRef.current && leftSideRef.current && rightSideRef.current ){

            leftSideRef.current.style.display = displayer? 'none' : 'flex'
            rightSideRef.current.style.display = displayer? 'flex' : 'none'

            setDisplayer(leftSideRef.current.style.display =='none'? false: true)

            displayRef.current.classList.toggle(appCSS.Down)
        }
         
    }
    
 

    return(
        <div className={appCSS.pageContainer}>
            <div className={appCSS.leftSide} ref={leftSideRef} >
                <Header/>
                <Outlet/>
            </div>
            <div className={appCSS.rightSide} ref={rightSideRef}>
                <Sidebar/>
            </div>
            <div className={`${appCSS.displaySideBar}`} ref={displayRef} onClick={()=>display()}>
                <MdKeyboardDoubleArrowUp size={40} color='red' />
            </div>
        </div>
    )
}