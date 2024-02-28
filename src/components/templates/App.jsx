import { Outlet } from "react-router-dom"
import MainHeader from "../organims/MainHeader"

const App = () =>{
    return(
        <div>
            <MainHeader/>
            <Outlet/>
        </div>
    )
}

export default App