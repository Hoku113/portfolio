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
                <h3>Preventer</h3>
                <figure class="preventer-img">
                <img src={preventer} alt="preventer"/>
                </figure>
                <p>
                    泥酔者が駅のホームから線路に落下することを防止するためのシステム<br/>
                    Intelが提供しているOpenVINOを利用して人間の骨格を表示し、<br/>
                    その人が酔っているのか、酔っていないのかを分析することができます。
                </p>
            </div>

            <div class="E-gate">
                <h3>E-gate</h3>
                <figure class="egate-img">
                <img src={egate} alt="egate"/>
                </figure>
                <p>
                    顔認証を利用した出席管理、入退出管理をするためのシステム<br/>
                    WEBアプリケーションとして公開をすることで、普段使っているスマートフォンやタブレット、<br/>
                    ノートpcですぐに実行することができます<br/>
                </p>

            </div>

        </div>

    )
}

export default PersonalProduct