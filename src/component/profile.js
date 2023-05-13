import ContuctMe from "./contuctme"

// images
import myimage from "../assets/myimage.png"
import azureAI from "../assets/azureAI.png"
import azureData from "../assets/azureData.png"
import azure from "../assets/azure.png"

// css
import "../css/profile.css"

const Profile = () => {

    return (
        <div class="profile">
            <h2>About me</h2>
            <img src={myimage} alt="myimage" class="myimage"/>
            <ul id="name">name: 内田北斗</ul>   
            <ul id="age">age: 21</ul>
            <ul id="major">major: Artificial Inteligence</ul>
            
            <h3>Achivement</h3>
            <div class="achivement">
                <img src={azureAI} />
                <img src={azureData} />
                <img src={azure} />
            </div>

            <ContuctMe/>
        </div>
    )
}

export default Profile