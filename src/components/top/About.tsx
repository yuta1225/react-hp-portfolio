import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <section id="about">
            <div className="inner">
                <h2 className="section-title">ABOUT</h2>
                <div className="profile">
                    <div className="prBox">
                        <Image
                            src="/images/profile.jpeg" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                            alt="Example Image" // 画像の代替テキスト
                            width={150} // 必須: 画像の幅
                            height={150} // 必須: 画像の高さ
                        />
                        <div>
                            <ruby>
                                半田 優太
                                <rt>はんだ ゆうた</rt>
                            </ruby>
                        </div>
                    </div>
                    <p className="txBox">
                        東京にてフロントエンドエンジニアをしております。
                        <br />
                        2022年8月：株式会社南国ソフトにフロントエンドエンジニア（インターン生）として参画。主に画面周りの実装を担当。使用技術スタックはAngularJS(TypeScript)
                        <br />
                        2023年5月：個人事業主として開業。
                        主にSNS運用のコンサルティング・HP制作・個人メディアの運営(SEO)などを行う。
                        クライアントの売上を70倍などにした経験あり。
                        <br />
                        2024年8月：株式会社南国ソフトを退社。
                        <br />
                        2024年4月：DataBee株式会社へフロントエンドエンジニア（≒フルスタックエンジニア）として入社。
                        実装(Frontend, Backend, DB)・要件定義・設計・管理業務・インフラ構築・セキュリティ対策など幅広く担当。 
                        技術スタックは『PHP(Zend)・JavaScript(jQuery)・Python・MySQL・AWS』
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;