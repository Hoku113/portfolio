import { Link } from "react-router-dom";
import projects from "../data/project.json"

// css file
import "../css/project_list.css"

// TODO: 画像挿入時、プロジェクトの部分をクリックすると遷移することを確認する

// プロジェクトのリストを表示する
const ProjectList = () => {
    return (
        <div>
            <h1> My Projects </h1>
            <div className="project-list">
                {projects.map((project) => (
                    <div key={project.id} className="project-item">
                        <div className="image-container">
                                <Link to={`/projects/${project.id}`}> 
                                    <img src={project.image} alt={project.title}/>
                                </Link>
                                <div className="overlay">
                                    <h3>{project.title}</h3>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectList