import { MagnifyIcon } from '../Icons/Magnify';
import loadCSS from './Loading.module.css'

export function Loading(){

    return(
    <div className={loadCSS.LoadingContainer}>
        <div className={loadCSS.MagnifyContainer}> 
          <MagnifyIcon size={90}></MagnifyIcon>
        </div>  
      </div>
    )
}