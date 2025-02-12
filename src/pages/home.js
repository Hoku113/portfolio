import Header from "../component/header"
import Profile from "../component/profile"
import Projects from "../component/projects"
import ContuctMe from "../component/contuct_me"
import SkillSets from "../component/skill_sets"

// css
import "../css/home.css"

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="main">
                <Profile/>
                <Projects/>
                <SkillSets/>
                <ContuctMe/>
            </div>
        </div>
    )
}

export default Home