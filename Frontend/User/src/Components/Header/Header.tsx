import headerCSS from './header.module.css'
export function Header(){

    function getRequest(request:string){
        console.log(request)
    }

    return(
        <div className={headerCSS.headerContainer}>

                    <h1><span>./</span>code<span>/</span>blog</h1>
                   
                        <div className={headerCSS.selections}>
                            <a onClick={()=>getRequest('All')}>All Articles</a>
                            <a onClick={()=>getRequest('Latest')}>Latest Articles</a>
                            <a onClick={()=>getRequest('About')}>About</a>
                        </div>
        </div>
    )
}