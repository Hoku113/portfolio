// images
import preventer from "../assets/preventer.png"
import egate from "../assets/egate.png"

// personal or team product
const PersonalProduct = () => {
    return (
        <div>
            <div id="preventer">
                <h3>Preventer</h3>
                <img src={preventer}/>
                <p>sample text</p>
            </div>

            <div id="E-gate">
                <h3>E-gate</h3>
                <img src={egate}/>
                <p>sample text</p>

            </div>

        </div>

    )
}

export default PersonalProduct