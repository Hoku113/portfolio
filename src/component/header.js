// react library
import { useState, useEffect } from "react"

// css
import "../css/header.css"

const Header = ({ refs }) => {
    // 現在いるセクションを管理する
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6
        }

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                // 別のセクションに移ったときにactiveIDを更新させる
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }
    
        // 監視対象を管理するオブジェクトを作成
        const observer = new IntersectionObserver(observerCallback, observerOptions)
    
        // 各セクションを監視
        const sections = Object.values(refs).map((ref) => ref.current)
        sections.forEach((section) => {
            // 存在するセクションを監視対象に登録
            if (section) observer.observe(section)
        })

        return () => {
            // セクションの監視を削除
            sections.forEach((section) => {
                if (section) observer.unobserve(section)
            })
        }
    }, [refs])

    const  scrollSection = (targetRef) => {
        if (targetRef && targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }

    return(
        <div 
            className="header"
            style={{
                backgroundColor: activeSection ? "libhtblue" :  "#c0c0c0"
            }}
        >
            <nav className="header-nav">
                <div className="nav-wrapper">
                    <img src="" alt="icon"/>
                    <ul>
                        <li 
                            className={activeSection === "top" ? "active" : ""}
                            onClick={() => scrollSection(refs.topRef)}
                        >
                            トップ
                        </li>
                        <li 
                            className={activeSection === "profile" ? "active" : ""}
                            onClick={() => scrollSection(refs.profileRef)}
                        >
                            自己紹介
                        </li>
                        <li 
                            className={activeSection === "project" ? "active" : ""}
                            onClick={() => scrollSection(refs.projectRef)}
                        >
                            プロジェクト
                        </li>
                        <li 
                            className={activeSection === "skill" ? "active" : ""}
                            onClick={() => scrollSection(refs.skillRef)}
                        >
                            スキル
                        </li>
                        <li 
                            className={activeSection === "contact" ? "active" : ""}
                            onClick={() => scrollSection(refs.contactRef)}
                        >
                            連絡先
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header