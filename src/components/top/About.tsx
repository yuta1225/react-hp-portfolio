import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="pt-[100px]">
            <div className="max-w-[1200px] w-4/5 mx-auto">
                <h2 className="text-center text-[40px] max-md:text-[22px]">ABOUT</h2>
                <div className="flex max-md:flex-col">
                    <div className="text-center mt-[30px] mr-[60px] mb-[18px] ml-0 max-md:m-[15px]">
                        <Image
                            src="/images/profile.jpeg"
                            alt="Example Image"
                            width={150}
                            height={150}
                            className="rounded-full"
                            style={{background:'linear-gradient(to right bottom, #c71585, #ffc0cb)'}}
                        />
                        <div>
                            <ruby>
                                半田 優太
                                <rt>はんだ ゆうた</rt>
                            </ruby>
                        </div>
                    </div>
                    <p className="leading-8">
                        東京にてフロントエンドエンジニアをしております。
                        <br />
                        2021年8月：株式会社南国ソフトにフロントエンドエンジニア（インターン）として参画。主に画面周りの実装を担当。使用技術スタックはAngularJS(TypeScript)
                        <br />
                        2023年5月：個人事業主として開業。
                        主にSNS運用のコンサルティング・HP制作・個人メディアの運営(SEO)などを行う。
                        クライアントの売上を70倍などにした経験あり。
                        <br />
                        2023年8月：株式会社南国ソフトを退社。
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
