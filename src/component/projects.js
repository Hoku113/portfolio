import React, {useEffect, useCallback, useState} from "react"
import ReactImageGallery from "react-image-gallery"

import projects from "../data/project_list.json"
import project_detail from "../data/project_detail_list.json"

// css file
import 'react-image-gallery/styles/css/image-gallery.css'
import "../css/project_list.css"
import "../css/modal.css"



// jsonファイルの読み込み
const Detail = (props) => {

    const[projectDetail, setProjectDetail] = useState("")

    project_detail.forEach(project_det => {

        // クリックされたプロジェクト何かを判定する
        if (project_det.Title == props.title){
            console.log(project_det.Detail)
            setProjectDetail(project_det.Detail)
        }

    });

    return(
        <div>
            <p>{projectDetail}</p>
        </div>
    )

}

// プロジェクトの詳細のページ
const ProjectDetail = (props) => {

    console.log(projects)

    // 一致したプロジェクトの説明や画像を表示させる
    return (
        <div id="modal" className="modal" onClick={(event)=>{event.stopPropagation()}}>
            <div>
                <h2>{props.title}</h2>
                <p>{props.detail}</p>
            </div>

            <div>
                <h2>使ったもの</h2>
                <p>{props.tools}</p>
            </div>
            <ReactImageGallery
                items={props.images}
                showPlayButton={false}
                showFullscreenButton={false}
                showThumbnails={true}
                showNav={true}
                showBullets={true}
                thumbnailPosition="top"
                additionalClass="custom-gallery"
            />
        </div>
    )
}

// プロジェクトのリストを表示する
const Projects = () => {

    const[isDetailOpen, setIsDetailOpen] = useState(false)
    const[projectTitle, setProjectTitle] = useState("")
    const[projectDetail, setProjectDetail] = useState("")
    const[tools, setTools] = useState("")
    const[images, setImages] = useState("")

    const CloseModal = useCallback(() => {
        setIsDetailOpen(false)
        document.removeEventListener("click", CloseModal)
    }, []) 

    // addEventListnerを解除する
    useEffect(()=> {
        return () =>{
            document.removeEventListener("click", CloseModal)
        }
    }, [CloseModal])

    // モーダルを開く
    const OpenModal = (title, detail, tools, images, event) => {
        setProjectTitle(title)
        setProjectDetail(detail)
        setTools(tools)
        setImages(images)
        setIsDetailOpen(true)
        
        document.addEventListener("click", CloseModal)
        event.stopPropagation()
    }

    return (
        <div>
            <h2> Projects </h2>
            <p>
            これまで僕が携わってきたプロジェクトの一覧です<br/>
            画像クリックでプロジェクトの詳細が見れます
            </p>
            <div className="project-list">
                    {projects.map((project) => (
                        
                            <div className="image-container" onClick={(event)=>{OpenModal(project.title, project.detail, project.tools, project.images, event)}}>                               
                                <img src={project.title_image} alt={project.title}/>
                                <div className="overlay">
                                    <h3>{project.title}</h3>
                                </div>
                            </div>
                       
                    ))}
            {/* モーダルページが開く状態になっているかを判定する */}
            {isDetailOpen? <ProjectDetail onClick={() => {CloseModal()}} title={projectTitle} detail={projectDetail} images={images} tools={tools}/> : ""}

            </div>
        </div>
    );
}

export default Projects