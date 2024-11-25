import {FaGithub, FaLinkedin} from "react-icons/fa"
import { Instagram } from "./instagram_gradation"
// css
import "../css/profile.scss"

const ContuctMe = () => {
    return (
        <>     
        <h3>Contuct me</h3>
        <div className="icon">
            <div className="instagram"><a href="`{my instagram account}"><Instagram/></a></div>
            <div className="github"><a href="https://github.com/Hoku113"><FaGithub/></a></div>
            <div className="linkedIn"><a href="https://www.linkedin.com/in/hokuto-uchida-9216102b9/"><FaLinkedin/></a></div>
        </div>
        </>
    )
}

export default ContuctMe