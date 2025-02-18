// components/ContactContent.js
import React, { useState }  from "react";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    tel: "",
    body: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!process.env.NEXT_PUBLIC_API_GATEWAY_URL) {
    throw new Error("環境変数 NEXT_PUBLIC_API_GATEWAY_URL が設定されていません");
  }  
  const API_URL: string = process.env.NEXT_PUBLIC_API_GATEWAY_URL;
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("お問い合わせを送信しました。");
      } else {
        setMessage(`送信に失敗しました: ${data.error}`);
      }
    } catch (error) {
      setMessage("エラーが発生しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
      <section id="contact-form">
        <div className="inner">
          <div className="contact-image">
            <div className="inner">
              <div className="section-title-area">
                <h2 className="section-title">CONTACT</h2>
                <div className="section-intro">
                  ご興味を持っていただきまして、誠にありがとうございます。<br />
                  ご不明点・ご質問がある方など、お気軽にお問い合わせください。
                </div>
              </div>
            </div>
          </div>
          <div className="contact-area">
            <div className="">
              <div className="section-body">
                <form id="myform" name="contact-form" onSubmit={handleSubmit}>
                  <dl className="dl-table">
                    <dt className="subject mandatory">件名</dt>
                    <dd>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        placeholder="件名をご入力ください"
                        onChange={handleChange}
                      />
                      <span id="subject_error" className="error_m"></span>
                    </dd>
                    <dt className="name any">氏名</dt>
                    <dd>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        placeholder="(例)田中 太朗"
                        onChange={handleChange}
                      />
                      <span id="name_error" className="error_m"></span>
                    </dd>
                    <dt className="email mandatory">メールアドレス</dt>
                    <dd>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="(例)example@email.com"
                        onChange={handleChange}
                      />
                      <span id="email_error" className="error_m"></span>
                    </dd>
                    <dt className="tel any">電話番号</dt>
                    <dd>
                      <input 
                        type="tel" 
                        name="tel" id="tel" 
                        placeholder="(例)0000-000-0000"
                        onChange={handleChange}
                      />
                      <span id="tel_error" className="error_m"></span>
                    </dd>
                    <dt className="body mandatory">お問い合わせ内容</dt>
                    <dd>
                      <textarea 
                        name="body" 
                        id="body"
                        placeholder="お問い合わせ内容をご入力ください"
                        cols={30}
                        rows={10}
                        onChange={handleChange}
                      />
                      <span id="body_error" className="error_m"></span>
                    </dd>
                  </dl>
                  <p className="dummy"></p>
                  <div className="btn">
                    <button type="submit" disabled={isSubmitting}>送信</button>
                  </div>
                </form>
                {message && <p>{message}</p>}
                <div className="g-recaptcha"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }  