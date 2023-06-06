import {FaGithub, FaTwitter, FaInstagram, FaFacebook} from "react-icons/fa"
import { Instagram } from "./instagram_gradation"
// css
import "../css/profile.scss"

const ContuctMe = () => {
    return (
        <>     
        <h3>Contuct me</h3>
        <div class="icon">
            {/* <div class="instagram"><FaInstagram fill="url(#instagram)" /></div> */}
            <div class="instagram"><Instagram/></div>
            <div class="twitter"><FaTwitter/></div>
            <div class="github"><FaGithub/></div>
            <div class="facebook"><FaFacebook/></div>
        </div>
        </>
    )
}

export default ContuctMe