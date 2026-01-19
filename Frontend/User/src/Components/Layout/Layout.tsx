import {Outlet} from 'react-router-dom'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'
import  appCSS from './layout.module.css'

export function Layout(){
    
    
    return(
        <div className={appCSS.pageContainer}>
            <div className={appCSS.leftSide}>
                <Header/>
                <Outlet/>
            </div>
            <div className={appCSS.rightSide}>
                <Sidebar/>
            </div>
        </div>
    )
}