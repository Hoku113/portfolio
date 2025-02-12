import { FormEventHandler } from "react"

// css
import "../css/contuct_me.css"

/** 問い合わせの内容を自分のgmailに送信する */ 
const SubmitDetail = (formData) => {

    // 入力内容の情報を取得
    const user = formData.get("name");
    const email = formData.get("email");
    const detail = formData.get("detail");

    // 入力項目がすべて埋まっていない
    if (!(user && email && detail)) {

        // Sendボタンの下にエラー文字を表示
        throw new Error("入力されていない項目があります");
    }

    // GMailを送信するAPIをたたいてメールを送信する
}

const ContuctMe = () => {
    return (
        <div>     
            <h2>Contuct Me</h2>
            <div className="contuct">
                <p>
                    ご覧いただきありがとうございます！<br/>
                    このサイトやプロジェクトに関する質問やなどはこちらのフォームからお願いします
                </p>
                <form className="input" action={SubmitDetail}>
                    <div className="text">
                        <label>Name:<input name="name" maxLength="20"/></label>
                        <label>Email:<input name="email"/></label>
                    </div>
                    <div className="text-box">
                        <label>Detail:<textarea name="detail"/></label>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContuctMe