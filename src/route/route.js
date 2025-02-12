import { Route, BrowserRouter, Routes} from "react-router-dom";

// page file
import Home from "../pages/home";
import ProjectDetail from "../component/project_detail"


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