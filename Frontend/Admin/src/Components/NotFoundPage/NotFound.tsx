import { Link } from "react-router-dom"

export function NotFound(){

    return(<div>
            <h1>Not Found Page ❌</h1>
            <Link to={"/"}>
            <button>Go back to Login page.</button>
            </Link>
    </div>)
}