// react library
import React, {useEffect, useCallback, useState} from "react"
import ReactImageGallery from "react-image-gallery"

// component
import projects from "../data/project_list.json"

// css
import 'react-image-gallery/styles/css/image-gallery.css'
import "../css/project_list.css"
import "../css/modal.css"

// プロジェクトの詳細のページ
const ProjectDetail = (props) => {
    // 一致したプロジェクトの説明や画像を表示させる
    return (
        <div className="modal" onClick={(event)=>{event.stopPropagation()}}>
            <div className="view">
                <div className="title_and_detail">
                    <h2>{props.title}</h2>
                    <p>{props.detail}</p>
                </div>

                <div className="tools">
                    <h2>使ったもの</h2>
                    <p>{props.tools}</p>
                </div>
                
                <div className="areac">
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
            </div>
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
    const[visibleCount, setVisibleCount] = useState(3)

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

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    }

    return (
        <div className="projects">
            <h2> Projects </h2>
            <p>
            これまで携わってきたプロジェクトの一覧です<br/>
            画像クリックでプロジェクトの詳細が見れます
            </p>
            <div className="project-list">
                {projects.slice(0, visibleCount).map((project) => (
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
            {visibleCount < projects.length && (
                <button className="show-more" onClick={handleShowMore}>
                    もっと見る
                </button>
            )}
        </div>
    );
}

export default Projects