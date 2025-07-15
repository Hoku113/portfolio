import React, { useState } from 'react';

// css
import "../css/contuct_me.css"

// 問い合わせの内容を自分のgmailに送信する 
const  SubmitDetail = (formData) => {

    console.log(formData)

    // 入力内容の情報を取得
    const user = formData.get("name");
    const email = formData.get("email");
    const detail = formData.get("detail");

    // 不正な入力値があるか確認
    if (user === "" || email === "" || detail === "") {
        alert("不正な入力値があります");
        return;
    }
    
    // GMailを送信するAPIをたたいてメールを送信する
    try {
        const response = fetch('TARGET_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: user,
                email: email,
                detail: detail
            }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}

const ContuctMe = () => {

    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(false);
    }

    return (
        <div className="contactMe">
            <h2>Contuct Me</h2>
            <div className="contuct">
                <p>
                    ご覧いただきありがとうございます！<br/>
                    このサイトやプロジェクトに関する質問やなどはこちらのフォームからお願いします
                </p>

                <form className={`content ${isVisible ? '' : 'hidden'}`} action={SubmitDetail}>
                    <div className="text">
                        <label>
                            <span>名前: </span>
                            <input name="name" maxLength="20"/>
                        </label>
                        <label>
                            <span>メールアドレス: </span>
                            <input name="email"/>
                        </label>
                    </div>
                    <div className="text-box">
                        <label>Detail:<textarea name="detail"/></label>
                    </div>
                    <button type="submit" onClick={handleClick}>Send</button>
                </form>
                {!isVisible && (
                    <div className="fade-in">
                        <img src="/send_message.png" alt="checkmark"/>
                        <p className="message">
                            送信が完了しました。<br/>
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ContuctMe