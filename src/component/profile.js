import ContuctMe from "./contuctme"

// images
import myimage from "../assets/myimage.png"
import azureAI from "../assets/azureAI.png"
import azureData from "../assets/azureData.png"
import azure from "../assets/azure.png"

// css
import "../css/profile.scss"

// set birthday
const birthday = {
    year: 2002,
    month: 1,
    date: 25
}

// calc birthday
const CalcBirthDay = (birthday) =>{
    const today = new Date();

    let thisYearsBirthday = new Date(today.getFullYear(), birthday.month - 1, birthday.date)

    // 年例を計算
    let age = today.getFullYear() - birthday.year

    // 今年の誕生日来たかどうか
    if (today < thisYearsBirthday){
        age--;
    }

    return age;
}

const Profile = () => {

    return (
        <div class="profile">
            <h2>About me</h2>
            <div class="profileflex">
                    <div class="text">
                        <ul id="name">name: 内田北斗</ul>
                        <CalcBirthDay param="birthday"></CalcBirthDay>
                        <ul id="major">major: Artificial Inteligence</ul>
                        <ContuctMe/>
                    </div>
                <figure  class="myimage">
                    <img src={myimage} alt="myimage"/>
                </figure>

            </div>
            <div class="achivement">
                <h3>Achivement</h3>
                <div class="img-list">
                    <img src={azureAI} />
                    <img src={azureData} />
                    <img src={azure} />
                </div>
            </div>
        </div>
    )
}

export default Profile