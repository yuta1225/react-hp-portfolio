import React from "react";
import Image from "next/image";

const Skills = () => {
    return (
        <section id="skills">
            <div className="inner">
                <div className="section-title-area">
                    <h2 className="section-title">SKILL</h2>
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
                                src="/images/icons8-html-100.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
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
                            HTMLの独学をきっかけにオープン系開発に興味を持ちました。
                            </div>
                        </div>
                    </div>

                    {/* CSS */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-css-100.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
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
                            CSSの独学をきっかけにオープン系開発に興味を持ちました。
                            </div>
                        </div>
                    </div>

                    {/* JavaScript */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-javascript-100.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
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
                            JavaScriptの独学をきっかけにオープン系開発に興味を持ちました。
                            </div>
                        </div> 
                    </div>

                    {/* TypeScript */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-typescript-100.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">TypeScript</h3>
                            <div className="rating">
                            <div className="rate rate4"></div>
                            </div>
                            <div className="section-text">
                            JavaScriptの独学をきっかけにオープン系開発に興味を持ちました。
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
                                src="/images/icons8-php-100.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
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
                            現在の会社ではPHPによる開発がメインです
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-python-100.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
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
                            ChatGPTを使用したAI関連の開発は全てPythonを使用して行なっていました
                            </div>
                        </div> 
                    </div>

                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-typescript-100.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">C</h3>
                            <div className="rating">
                            <div className="rate rate4"></div>
                            </div>
                            <div className="section-text">
                            これはCです
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-typescript-100.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">Java</h3>
                            <div className="rating">
                            <div className="rate rate4"></div>
                            </div>
                            <div className="section-text">
                            これはJavaです
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
                                src="/images/icons8-php-100.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">NextJS</h3>
                            <div className="rating">
                            <div className="rate rate4"></div>
                            </div>
                            <div className="section-text">
                            これはNextJSの説明文です
                            </div>
                        </div>
                    </div>

                    {/* AngularJS */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-python-100.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">AngularJS</h3>
                            <div className="rating">
                            <div className="rate rate4"></div>
                            </div>
                            <div className="section-text">
                            これはAngularJSの説明文です
                            </div>
                        </div> 
                    </div>

                    {/* Zend */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-typescript-100.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
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
                            これはZend Frameworkの説明文です
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
                                src="/images/icons8-php-100.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">AWS</h3>
                            <div className="rating">
                            <div className="rate rate4"></div>
                            </div>
                            <div className="section-text">
                            これはAWSの説明文です
                            </div>
                        </div>
                    </div>

                    {/* MySQL */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-python-100.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">MySQL</h3>
                            <div className="rating">
                            <div className="rate rate4"></div>
                            </div>
                            <div className="section-text">
                            これはMySQLの説明文です
                            </div>
                        </div> 
                    </div>

                    {/* Docker */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-typescript-100.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
                                alt="Example Image" // 画像の代替テキスト
                                width={100} // 必須: 画像の幅
                                height={100} // 必須: 画像の高さ
                            />
                        </div>
                        <div className="skill-desc">
                            <h3 className="skill-desc-title">Docker</h3>
                            <div className="rating">
                            <div className="rate rate4"></div>
                            </div>
                            <div className="section-text">
                            これはDockerの説明文です
                            </div>
                        </div>
                    </div>

                    {/* Git */}
                    <div className="card">
                        <div className="skill-icon">
                            <Image
                                src="/images/icons8-typescript-100.png" // 画像のパス（パブリックディレクトリの場合は絶対パス）
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
                            これはGitの説明文です
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </section>
    );
}

export default Skills;