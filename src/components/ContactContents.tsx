// components/ContactContent.js
import React from "react";

export default function ContactContent() {
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
                <form id="myform" name="contact-form">
                  <dl className="dl-table">
                    <dt className="subject mandatory">件名</dt>
                    <dd>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        placeholder="件名をご入力ください"
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
                      />
                      <span id="email_error" className="error_m"></span>
                    </dd>
                    <dt className="tel any">電話番号</dt>
                    <dd>
                      <input 
                        type="tel" 
                        name="tel" id="tel" 
                        placeholder="(例)0000-000-0000"
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
                      />
                      <span id="body_error" className="error_m"></span>
                    </dd>
                  </dl>
                  <p className="dummy"></p>
                  <div className="btn">
                    <a href="#" id="btn_submit">送信</a>
                  </div>
                </form>

                <div className="g-recaptcha"></div>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }  