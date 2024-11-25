import ContuctMe from "./contuctme"

// data
import achive from "../data/achivement.json"
import profile from "../data/profile.json"

// css
import "../css/profile.scss"

// calc birthday
const CalcBirthDay = (birthday) =>{

    console.log(birthday.param.year)

    const today = new Date();

    let thisYearsBirthday = new Date(today.getFullYear(), birthday.param.month - 1, birthday.param.date)

    // 年例を計算
    let age = today.getFullYear() - birthday.param.year

    // 今年の誕生日来たかどうか
    if (today < thisYearsBirthday){
        age--;
    }

    return (
        <ul>age: {age}</ul>
    )
}

const Profile = () => {

    return (
        <div className="profile">
            <h2>About me</h2>
            <div className="profileflex">
                    <div className="text">
                        <ul id="name">name: {profile.name}</ul>
                        <CalcBirthDay param={profile.birthday}></CalcBirthDay>
                        <ul id="major">
                            {profile.skills.map((skill) => skill + " ")}
                        </ul>

                        <ContuctMe/>
                    </div>
                <figure  className="myimage">
                    <img src={profile.myImage} alt="myimage"/>
                </figure>

            </div>
            <div className="achivement">
                <h3>Achivement</h3>
                    {achive.map((achive) => 
                        <div className="img-list">
                            <img src={achive.img} alt={achive.title}/>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Profile