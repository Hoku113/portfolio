import { Route, BrowserRouter, Routes, Link, } from "react-router-dom";
import Home from "../pages/home";
import Production from "../component/production";

const PageLink = () => {
    return (
        <div>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/product'} element={<Production/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default PageLink;