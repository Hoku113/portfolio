import { Route, BrowserRouter, Routes} from "react-router-dom";

// page file
import Home from "../pages/home";
import Preventer from "../pages/preventer";
import Egate from "../pages/egate";
import Sugarcane from "../pages/sugarcane";

const PageLink = () => {
    return (
        <div>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/preventer'} element={<Preventer/>}/>
                <Route path={'/egate'} element={<Egate/>}/>
                <Route path={'/sugarcane'} element={<Sugarcane/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default PageLink;