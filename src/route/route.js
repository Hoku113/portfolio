import { Route, BrowserRouter, Routes} from "react-router-dom";

// page file
import Home from "../pages/home";

const PageLink = () => {
    return (
        <div>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default PageLink;