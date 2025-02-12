// data
import profile from "../data/profile.json"

// css
import "../css/profile.css"

const Profile = () => {
    return (
        <div className="profile">
            <h2>About me</h2>

            <div className="profile-flex">
                {/* 自分の写真 */}
                <figure  className="my-image">
                        <img src={profile.myImage} alt="myimage"/>
                </figure>

                {/* 名前、略歴 */}
                <div className="my-detail">
                    <p className="option-name">{profile.name}</p>
                    <p className="option-history">{profile.myHistory}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile