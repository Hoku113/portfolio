// images
import preventer from "../assets/preventer.png"
import egate from "../assets/egate.png"

// css
import "../css/personal_product.scss"

// personal or team product
const PersonalProduct = () => {
    return (
        <div>
            <div class="preventer">
                <div class="preventer-flex">
                    <h3>Preventer</h3>
                    <p>
                        泥酔者が駅のホームから線路に落下することを防止するためのシステム<br/>
                        Intelが提供しているOpenVINOを利用して人間の骨格を表示し、<br/>
                        その人が酔っているのか、酔っていないのかを分析することができます。
                    </p>
                    <figure class="preventer-img">
                    <img src={preventer} alt="preventer"/>
                    </figure>
                </div>
            </div>

            <div class="E-gate">
                <div class="egate-flex">
                    <figure class="egate-img">
                        <img src={egate} alt="egate"/>
                    </figure>
                    <h3>E-gate</h3>
                    <p>
                        顔認証を利用した出席管理、入退出管理をするためのシステム<br/>
                        WEBアプリケーションとして公開をすることで、普段使っているスマートフォンやタブレット、<br/>
                        ノートpcですぐに実行することができます<br/>
                    </p>
                </div>
            </div>

        </div>

    )
}

export default PersonalProduct