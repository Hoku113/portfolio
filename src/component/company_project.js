
// image 
import sugarcane from "../assets/sugarcane.png"
import ovaas from "../assets/ovaas.png"

const CompanyProject = () => {
    return (
        <>
            <div id="sugarcane">
                <h2>サトウキビプロジェクト</h2>
                <img src={sugarcane}/>
                <p>sample text</p>
            </div>

            <div id="ovaas">
                <h2>OVAAS</h2>
                <img src={ovaas}/>
                <p>sample text</p>
            </div>
        </>
    )
}

export default CompanyProject;