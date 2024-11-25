// プロジェクト詳細ページ
import { useParams } from "react-router-dom";
import projects from "../data/project.json"

const ProjectDetail = () => {
    const {id} = useParams();
    const project = projects.find((proj) => proj.id === parseInt(id));

    if (!project){
        return (
            <>
                <h1> 404 Not Found</h1>
                <p> This project is not abailable</p>
            </>
        )
    }

    // TODO: 大まかなセクション、それに対する内容の記載
    // TODO: ページデザインの立案

    return (
        <div>
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.title}/>
            <p>{project.details}</p>
        </div>
    )
}

export default ProjectDetail