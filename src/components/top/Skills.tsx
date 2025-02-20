import React from "react";
import Image from "next/image";

const Skills = () => {
    return (
        <section id="skills">
            <div className="inner">
                <div className="section-title-area">
                    <h2 className="section-title">SKILLS</h2>
                    <div className="section-intro">
                    クラウド関連を中心に幅広く技術習得に励んでおります。
                    <br />
                    これからも日々研鑽していきます！以下チャートは各スキルごとの得意度をレートで示しています。
                    <div>
                        <canvas id="myChart"></canvas>
                    </div>        
                    </div>
                </div>
            </div>

            {/* Front-end */}
            <div className="inner">
                <div className="section-title-area">
                    <h3 className="section-title section-skill">FRONT-END</h3>
                </div>
           
                
            </div>
            <div className="inner">
                <div className="section-body card-wrapper">

                    {/* HTML */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-html-96.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">HTML5</h3>
                            <div className="rating">
                                <div className="rate rate4"></div>
                            </div>
                            <div className="section-text">
                            高校生の時にプログラムに興味を持ったきっかけの言語です。
                            </div>
                        </div>
                    </div>

                    {/* CSS */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-css-96.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">CSS3</h3>
                            <div className="rating">
                            <div className="rate rate4"></div>
                            </div>
                            <div className="section-text">
                                インターン時代はscss記法を用いた実装。個人開発ではtailwindを用いた開発を行なっています。サイト制作の案件で相当鍛えられました。
                            </div>
                        </div>
                    </div>

                    {/* JavaScript */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-javascript-96.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">JavaScript</h3>
                            <div className="rating">
                                <div className="rate rate4"></div>
                            </div>
                            <div className="section-text">
                                インターン時代から合算すると3年ほど実務で経験しています。現在勤務している会社ではjQuryベースの開発を行なっております。AjaxやAPIの実装も経験済み。
                            </div>
                        </div> 
                    </div>

                    {/* TypeScript */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-typescript-96.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">TypeScript</h3>
                            <div className="rating">
                            <div className="rate rate3"></div>
                            </div>
                            <div className="section-text">
                                インターン時代の開発・個人開発で主に使用していました。一般的な概念は一通り学習済みで、型を利用した堅牢な実装を心がけています。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Back-end */}
            <div className="inner">
                <div className="section-title-area">
                    <h3 className="section-title section-skill">BACK-END</h3>
                </div>
            </div>
            <div className="inner">
                <div className="section-body card-wrapper">

                    {/* PHP */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-php-80.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">PHP</h3>
                            <div className="rating">
                                <div className="rate rate4"></div>
                            </div>
                            <div className="section-text">
                                現在の会社ではPHPによる開発がメインです。基本設計から実装まで一通りこなした経験がございます。
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-python-96.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">Python</h3>
                            <div className="rating">
                                <div className="rate rate3"></div>
                            </div>
                            <div className="section-text">
                                実務でChatGPTを使用したAI関連の開発は全てPythonを使用して行なっていました。
                            </div>
                        </div> 
                    </div>

                    {/* C言語 */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-c-96.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">C</h3>
                            <div className="rating">
                                <div className="rate rate2"></div>
                            </div>
                            <div className="section-text">
                                本格的なプログラミング学習とCS基礎は大学のC言語の講義から始まりました。
                            </div>
                        </div>
                    </div>

                    {/* Java */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-java-coffee-cup-96.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">Java</h3>
                            <div className="rating">
                                <div className="rate rate2"></div>
                            </div>
                            <div className="section-text">
                                オブジェクト指向の実践的な考え方はJavaで学びました。
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* FrameWork */}
            <div className="inner">
                <div className="section-title-area">
                    <h3 className="section-title section-skill">FrameWork</h3>
                </div>
            </div>
            <div className="inner">
                <div className="section-body card-wrapper">

                    {/* NextJS */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-nextjs-96.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">NextJS</h3>
                            <div className="rating">
                                <div className="rate rate3"></div>
                            </div>
                            <div className="section-text">
                                個人開発のフロントエンドはルーティングが便利なNextJSを使用しています。このサイトもNextJS構成で作成。
                            </div>
                        </div>
                    </div>

                    {/* AngularJS */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-angularjs-96.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">Angular</h3>
                            <div className="rating">
                                <div className="rate rate2"></div>
                            </div>
                            <div className="section-text">
                                インターン時代はAngularを利用して開発していました。コンポーネント指向をこの時に知り、あまりの便利さにフレームワークに興味を持ち始めました。
                            </div>
                        </div> 
                    </div>

                    {/* Zend */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-zend-96.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">Zend Framework</h3>
                            <div className="rating">
                                <div className="rate rate4"></div>
                            </div>
                            <div className="section-text">
                                実務で使用しているMVCフレームワークです。MVCの考え方に基づいた本格的なバックエンドの実装はZendで鍛えられました。
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* その他 */}
            <div className="inner">
                <div className="section-title-area">
                    <h3 className="section-title section-skill">Others</h3>
                </div>
            </div>
            <div className="inner">
                <div className="section-body card-wrapper">

                    {/* AWS */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-aws-96.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">AWS</h3>
                            <div className="rating">
                                <div className="rate rate3"></div>
                            </div>
                            <div className="section-text">
                                小規模なインフラ構成の設計からデプロイまで一気通貫してできます。HPリリース・セキュリティ対策・保守監視などを現在は担当しています。
                            </div>
                        </div>
                    </div>

                    {/* MySQL */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-mysql-96.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">MySQL</h3>
                            <div className="rating">
                                <div className="rate rate3"></div>
                            </div>
                            <div className="section-text">
                                実務では、調査や顧客要望対応のためにSQLを頻繁に使用しています。実際の開発ではテーブル設計から着手しています。
                            </div>
                        </div> 
                    </div>

                    {/* Docker */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-docker-96.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">Docker</h3>
                            <div className="rating">
                                <div className="rate rate2"></div>
                            </div>
                            <div className="section-text">
                                個人開発レベルですが、開発環境の統一から本番環境のデプロイまでDockerを活用したことがあります。また、実務でもDockerを使用して開発しています。
                            </div>
                        </div>
                    </div>

                    {/* Git */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-git-96.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">Git</h3>
                            <div className="rating">
                                <div className="rate rate4"></div>
                            </div>
                            <div className="section-text">
                                バージョン管理では3年以上Gitを使用し続けています。
                            </div>
                        </div>
                    </div>

                    {/* Github */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-github-100.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">Github</h3>
                            <div className="rating">
                                <div className="rate rate4"></div>
                            </div>
                            <div className="section-text">
                                一般的なGithubの使い方は一通り経験済みです。
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </section>
    );
}

export default Skills;