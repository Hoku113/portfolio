// json
import skills from "../data/skill_sets.json"

// css
import "../css/skill_sets.css"

const SkillSets = () => {

    console.log(skills.Languages)

    return(
        <div>
            <h2>Skill Sets</h2>
            <p>
                現在のスキルセットです<br/>
                レベル関係なくある程度使ったことがあるものをここに表示しています。
            </p>
            <details>
                <summary>Languages<span className="icon"></span></summary>
                {skills.Languages.map((language) => (
                    <div className="content">
                        <img src={language} alt="language"/>
                    </div>
                ))}
            </details>

            <details>
                <summary>Frameworks<span className="icon"></span></summary>
                {skills.Frameworks.map((framework) => (
                    <div className="content">
                        <img src={framework} alt="framework"/>
                    </div>
                ))}    
            </details>

            <details>
                <summary>Tools<span className="icon"></span></summary>
                {skills.Tools.map((tool) => (
                    <div className="content">
                        <img src={tool} alt="tool"/>
                    </div>
                ))}
            </details>

            <details>
                <summary>Achivements<span className="icon"></span></summary>
                {skills.Achivements.map((achivement) => (
                    <div className="content">
                        <img src={achivement} alt="achivement"/>
                    </div>
                ))}
            </details>
        </div>
    )

}

export default SkillSets