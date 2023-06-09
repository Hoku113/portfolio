import {Link} from "react-router-dom"

// image 
import sugarcane from "../assets/sugarcane.png"

// css
import "../css/company_project.scss"

const CompanyProject = () => {   
    return (
        <>
            <div class="sugarcane anim">
                <div class="sugarcane-flex">
                    <h3><Link to="sugarcane">サトウキビプロジェクト</Link></h3>
                        <p>
                            NPO法人石西礁湖サンゴ礁基金より提供のプロジェクト<br/>
                            石垣島で問題となっているサンゴ礁の減少には、赤土流出の問題がある。<br/>
                            サトウキビ畑に農薬を散布するときにも、過度な農薬の散布によって赤土が削られ、<br/>海に流されてしまう。<br/>
                            この問題を解決するために農薬を雑草にピンポイントにめがけて噴射するものを作った
                        </p>
                        <figure class="sugarcane-img">
                            <img src={sugarcane} alt="sugarcane"/>
                        </figure>
                </div>
            </div>
        </>
    )
}

export default CompanyProject;