import PersonalProduct from "./personal_product"
import CompanyProject from "./company_project"

// scss
import "../css/production_anim.scss"

const Production = () => {

    window.addEventListener("scroll", function () {
        const elements = document.getElementsByClassName("anim")
        const innerHeight = window.innerHeight

        Array.prototype.forEach.call(elements, (element) => {
            const elementTop = element.getBoundingClientRect().top;
            const class_name = element.classList[0]

            console.log(class_name)

            if(elementTop - innerHeight <= 0){
                switch (class_name){
                    case "preventer":
                    case "sugarcane":
                        element.classList.add("left-animated");
                        break;
                    case "egate":
                        element.classList.add("right-animated")
                        break;
                    default:
                        break;
                }              
            }
        })
        
        console.log(elements)
    })

    return (
        <div id="production">
            <h1>My Production</h1>
            <PersonalProduct/>
            <CompanyProject/>
            
        </div>
    )
}

export default Production