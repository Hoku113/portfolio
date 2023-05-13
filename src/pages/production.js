import PersonalProduct from "../component/personal_product"
import CompanyProject from "../component/company_project"

const Production = () => {
    return (
        <div id="production">
            <h1>My Production</h1>

            <PersonalProduct/>
            <CompanyProject/>
            
        </div>
    )
}

export default Production