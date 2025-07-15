// json
import skills from "../data/skill_sets.json"

// css
import "../css/skill_sets.css"

const SkillSets = () => {

    return(
        <div className="skills">
            <h2>Skill Sets</h2>
            <p>
                現在のスキルセットです<br/>
                レベル関係なくある程度使ったことがあるものをここに表示しています。
            </p>
            <details className="Programming_Language">
                <summary>Languages<span className="icon"></span></summary>
                <div className="content">
                    {skills.Languages.map((language) => (
                        <img src={language} alt="language"/>
                    ))}
                </div>
            </details>

            <details className="Frameworks">
                <summary>Frameworks<span className="icon"></span></summary>
                <div className="content">
                    {skills.Frameworks.map((framework) => (
                        <img src={framework} alt="framework"/>
                    ))}
                </div>
            </details>

            <details className="Tools">
                <summary>Tools<span className="icon"></span></summary>
                <div className="content">
                    {skills.Tools.map((tool) => (
                        <img src={tool} alt="tool"/>
                    ))}
                </div>
            </details>

            <details className="Achivements">
                <summary>Achivements<span className="icon"></span></summary>
                <div className="content">
                    {skills.Achivements.map((achivement) => (
                        <img src={achivement} alt="achivement"/>
                    ))}
                </div>
            </details>
        </div>
    )

}

export default SkillSets