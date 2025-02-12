// プロジェクト詳細ページ
import { useParams } from "react-router-dom";
import project_details from "../data/project_detail_list.json"

const ProjectDetail = () => {
    const {id} = useParams();

const Gallery = (images) => {

    
}

    return (
    <div className="project-detail">
        {project_details.map((project_detail) => (
            <div className="project-item">
                <div className="title">
                    <h3>{project_detail.Title}</h3>
                </div>

                <div className="detail">
                    <p>{project_detail.Detail}</p>
                </div>

                <div className="skill">
                    <p>{project_detail.Tools}</p>
                </div>

                <div className="image list">
                    
                </div>
            </div>
        ))}
    </div>
    )
}

export default ProjectDetail