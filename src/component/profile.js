// images
import myimage from "../assets/myimage.png"
import azureAI from "../assets/azureAI.png"
import azureData from "../assets/azureData.png"
import azure from "../assets/azure.png"

// css
import "../css/profile.scss"

const Profile = () => {

    return (
        <div class="profile">
            <h2>About me</h2>
            <div class="profileflex">
                    <div class="text">
                        <ul id="name">name: 内田北斗</ul>   
                        <ul id="age">age: 21</ul>
                        <ul id="major">major: Artificial Inteligence</ul>
                    </div>
                <figure  class="myimage">
                    <img src={myimage} alt="myimage"/>
                </figure>

            </div>
            <h3>Achivement</h3>
            <div class="achivement">
                <img src={azureAI} />
                <img src={azureData} />
                <img src={azure} />
            </div>
        </div>
    )
}

export default Profile