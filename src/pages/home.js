// react library
import {useRef} from "react"

// component
import Header from "../component/header"
import Top from "../component/top"
import Profile from "../component/profile"
import Projects from "../component/projects"
import ContuctMe from "../component/contuct_me"
import SkillSets from "../component/skill_sets"

// css
import "../css/home.css"


// 画面の一番上に戻す
const OnReturnTop = (topRef) => {
    topRef.current.scrollIntoView({
        behavior: "smooth"
    })
}

// ホーム画面
const Home = () => {
    const topRef     = useRef(null)  
    const profileRef = useRef(null)
    const projectRef = useRef(null)
    const skillRef   = useRef(null)
    const contactRef = useRef(null)

    return (
        <div>
            <Header refs={{topRef, profileRef, projectRef, skillRef, contactRef}}/>
            <div className="main">
                <section id="top" ref={topRef}>
                    <Top />
                </section>

                <section id="profile" ref={profileRef}>
                    <Profile />
                </section>

                <section id="project" ref={projectRef}>
                    <Projects />
                </section>
                
                <section id="skill" ref={skillRef}>
                    <SkillSets />
                </section>

                <section id="contact" ref={contactRef}>
                    <ContuctMe />
                </section>
                {/* test */}

                <button type="submit" onClick={() => OnReturnTop(topRef)}/>
            </div>
        </div>
    )
}

export default Home