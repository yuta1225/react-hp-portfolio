// components/ContactContent.js
import React, { useState }  from "react";
import Badge from "./Badge";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const API_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL;
    if (!API_URL) {
      setMessage("環境変数 NEXT_PUBLIC_API_GATEWAY_URL が設定されていません");
      setIsSubmitting(false);
      return;
    }

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
        setMessage(`送信に失敗しました: ${data.error || "不明なエラー"}`);
      }
    } catch (error) {
      console.log("リクエストエラー:", error)
      setMessage("エラーが発生しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
      <section id="contact-form" className="pb-[100px]">
        <div className="max-w-[1200px] w-4/5 mx-auto">
          <div className="pb-[100px]">
            <div className="max-w-[1200px] w-4/5 mx-auto">
              <div className="text-center">
                <h2 className="text-center text-[40px] max-md:text-[22px]">CONTACT</h2>
                <div className="text-center">
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
                  <dl className="flex flex-wrap">
                    <dt className="w-[30%] max-md:w-1/2 pr-[40px] pt-[26px] flex items-center justify-between">
                      件名<Badge type="mandatory" />
                    </dt>
                    <dd className="w-full ml-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="件名をご入力ください"
                        onChange={handleChange}
                        className="text-base max-md:text-xs rounded-[3px] border-2 border-[#ddd] p-[10px] mt-[20px] w-full bg-[#f7f7f7]"
                      />
                      <span id="subject_error" className="error_m"></span>
                    </dd>
                    <dt className="w-[30%] max-md:w-1/2 pr-[40px] pt-[26px] flex items-center justify-between">
                      氏名<Badge type="any" />
                    </dt>
                    <dd className="w-full ml-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="(例)田中 太朗"
                        onChange={handleChange}
                        className="text-base max-md:text-xs rounded-[3px] border-2 border-[#ddd] p-[10px] mt-[20px] w-full bg-[#f7f7f7]"
                      />
                      <span id="name_error" className="error_m"></span>
                    </dd>
                    <dt className="w-[30%] max-md:w-1/2 pr-[40px] pt-[26px] flex items-center justify-between">
                      メールアドレス<Badge type="mandatory" />
                    </dt>
                    <dd className="w-full ml-0">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="(例)example@email.com"
                        onChange={handleChange}
                        className="text-base max-md:text-xs rounded-[3px] border-2 border-[#ddd] p-[10px] mt-[20px] w-full bg-[#f7f7f7]"
                      />
                      <span id="email_error" className="error_m"></span>
                    </dd>
                    <dt className="w-[30%] max-md:w-1/2 pr-[40px] pt-[26px] flex items-center justify-between">
                      電話番号<Badge type="any" />
                    </dt>
                    <dd className="w-full ml-0">
                      <input
                        type="tel"
                        name="tel"
                        id="tel"
                        placeholder="(例)0000-000-0000"
                        onChange={handleChange}
                        className="text-base max-md:text-xs rounded-[3px] border-2 border-[#ddd] p-[10px] mt-[20px] w-full bg-[#f7f7f7]"
                      />
                      <span id="tel_error" className="error_m"></span>
                    </dd>
                    <dt className="w-[30%] max-md:w-1/2 pr-[40px] pt-[26px] flex items-center justify-between">
                      お問い合わせ内容<Badge type="mandatory" />
                    </dt>
                    <dd className="w-full ml-0">
                      <textarea
                        name="body"
                        id="body"
                        placeholder="お問い合わせ内容をご入力ください"
                        cols={30}
                        rows={10}
                        onChange={handleChange}
                        className="text-base max-md:text-xs rounded-[3px] border-2 border-[#ddd] p-[10px] mt-[20px] w-full resize-none bg-[#f7f7f7]"
                      />
                      <span id="body_error" className="error_m"></span>
                    </dd>
                  </dl>
                  <p className="h-[30px]"></p>
                  <div className="btn">
                    <button type="submit" disabled={isSubmitting} className="text-white text-sm font-bold bg-black px-[25px] py-[16px] border-[3px] border-black transition-all duration-300 cursor-pointer">送信</button>
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
