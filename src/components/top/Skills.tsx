import React from "react";
import Image from "next/image";
import StarRating from "../StarRating";

const Skills = () => {
    return (
        <section id="skills" className="pt-[100px]">
            <div className="max-w-[1200px] w-4/5 mx-auto">
                <div className="text-center">
                    <h2 className="text-center text-[40px] max-md:text-[22px]">SKILLS</h2>
                    <div className="section-intro">
                    クラウドインフラ・フロントエンド・バックエンドなど領域関係なく日々学習に励んでおります。
                    <br />
                    以下のスキル一覧は私が取り組んできたスキルの習熟度を表現したものになります。
                    <br />
                    <div className="basis-[70%]">
                    </div>
                    </div>
                </div>
            </div>

            {/* Front-end */}
            <div className="max-w-[1200px] w-4/5 mx-auto">
                <div className="text-center">
                    <h3 className="text-center text-[30px] max-md:text-[18px]">FRONT-END</h3>
                </div>
            </div>
            <div className="max-w-[1200px] w-4/5 mx-auto">
                <div className="flex flex-wrap justify-between mx-auto">

                    {/* HTML */}
                    <div className="flex basis-[46%] flex-wrap justify-between mb-[50px]">
                        <div className="basis-[30%]">
                            <Image
                                src="/images/icons8-html-96.png"
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="my-[10px]">HTML5</h3>
                            <div className="rating">
                                <StarRating count={4} />
                            </div>
                            <div className="section-text">
                            高校生の時にプログラムに興味を持ったきっかけの言語です。
                            </div>
                        </div>
                    </div>

                    {/* CSS */}
                    <div className="flex basis-[46%] flex-wrap justify-between mb-[50px]">
                        <div className="basis-[30%]">
                            <Image
                                src="/images/icons8-css-96.png"
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="my-[10px]">CSS3</h3>
                            <div className="rating">
                                <StarRating count={4} />
                            </div>
                            <div className="section-text">
                                インターン時代はscss記法を用いた実装。個人開発ではtailwindを用いた開発を行なっています。サイト制作の案件で相当鍛えられました。
                            </div>
                        </div>
                    </div>

                    {/* JavaScript */}
                    <div className="flex basis-[46%] flex-wrap justify-between mb-[50px]">
                        <div className="basis-[30%]">
                            <Image
                                src="/images/icons8-javascript-96.png"
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="my-[10px]">JavaScript</h3>
                            <div className="rating">
                                <StarRating count={4} />
                            </div>
                            <div className="section-text">
                                インターン時代から合算すると3年ほど実務で経験しています。現在勤務している会社ではjQuryベースの開発を行なっております。AjaxやAPIの実装も経験済み。
                            </div>
                        </div>
                    </div>

                    {/* TypeScript */}
                    <div className="flex basis-[46%] flex-wrap justify-between mb-[50px]">
                        <div className="basis-[30%]">
                            <Image
                                src="/images/icons8-typescript-96.png"
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="my-[10px]">TypeScript</h3>
                            <div className="rating">
                                <StarRating count={3} />
                            </div>
                            <div className="section-text">
                                インターン時代の開発・個人開発で主に使用していました。一般的な概念は一通り学習済みで、型を利用した堅牢な実装を心がけています。
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back-end */}
            <div className="max-w-[1200px] w-4/5 mx-auto">
                <div className="text-center">
                    <h3 className="text-center text-[30px] max-md:text-[18px]">BACK-END</h3>
                </div>
            </div>
            <div className="max-w-[1200px] w-4/5 mx-auto">
                <div className="flex flex-wrap justify-between mx-auto">

                    {/* PHP */}
                    <div className="flex basis-[46%] flex-wrap justify-between mb-[50px]">
                        <div className="basis-[30%]">
                            <Image
                                src="/images/icons8-php-80.png"
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="my-[10px]">PHP</h3>
                            <div className="rating">
                                <StarRating count={4} />
                            </div>
                            <div className="section-text">
                                現在の会社ではPHPによる開発がメインです。基本設計から実装まで一通りこなした経験がございます。
                            </div>
                        </div>
                    </div>

                    <div className="flex basis-[46%] flex-wrap justify-between mb-[50px]">
                        <div className="basis-[30%]">
                            <Image
                                src="/images/icons8-python-96.png"
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="my-[10px]">Python</h3>
                            <div className="rating">
                                <StarRating count={3} />
                            </div>
                            <div className="section-text">
                                実務でChatGPTを使用したAI関連の開発は全てPythonを使用して行なっていました。
                            </div>
                        </div>
                    </div>

                    {/* C言語 */}
                    <div className="flex basis-[46%] flex-wrap justify-between mb-[50px]">
                        <div className="basis-[30%]">
                            <Image
                                src="/images/icons8-c-96.png"
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="my-[10px]">C</h3>
                            <div className="rating">
                                <StarRating count={2} />
                            </div>
                            <div className="section-text">
                                本格的なプログラミング学習とCS基礎は大学のC言語の講義から始まりました。
                            </div>
                        </div>
                    </div>

                    {/* Java */}
                    <div className="flex basis-[46%] flex-wrap justify-between mb-[50px]">
                        <div className="basis-[30%]">
                            <Image
                                src="/images/icons8-java-coffee-cup-96.png"
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="my-[10px]">Java</h3>
                            <div className="rating">
                                <StarRating count={2} />
                            </div>
                            <div className="section-text">
                                オブジェクト指向の実践的な考え方はJavaで学びました。
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* FrameWork */}
            <div className="max-w-[1200px] w-4/5 mx-auto">
                <div className="text-center">
                    <h3 className="text-center text-[30px] max-md:text-[18px]">FrameWork</h3>
                </div>
            </div>
            <div className="max-w-[1200px] w-4/5 mx-auto">
                <div className="flex flex-wrap justify-between mx-auto">

                    {/* NextJS */}
                    <div className="flex basis-[46%] flex-wrap justify-between mb-[50px]">
                        <div className="basis-[30%]">
                            <Image
                                src="/images/icons8-nextjs-96.png"
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="my-[10px]">NextJS</h3>
                            <div className="rating">
                                <StarRating count={3} />
                            </div>
                            <div className="section-text">
                                個人開発のフロントエンドはルーティングが便利なNextJSを使用しています。このサイトもNextJS構成で作成。
                            </div>
                        </div>
                    </div>

                    {/* AngularJS */}
                    <div className="flex basis-[46%] flex-wrap justify-between mb-[50px]">
                        <div className="basis-[30%]">
                            <Image
                                src="/images/icons8-angularjs-96.png"
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="my-[10px]">Angular</h3>
                            <div className="rating">
                                <StarRating count={2} />
                            </div>
                            <div className="section-text">
                                インターン時代はAngularを利用して開発していました。コンポーネント指向をこの時に知り、あまりの便利さにフレームワークに興味を持ち始めました。
                            </div>
                        </div>
                    </div>

                    {/* Zend */}
                    <div className="flex basis-[46%] flex-wrap justify-between mb-[50px]">
                        <div className="basis-[30%]">
                            <Image
                                src="/images/icons8-zend-96.png"
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="my-[10px]">Zend Framework</h3>
                            <div className="rating">
                                <StarRating count={4} />
                            </div>
                            <div className="section-text">
                                実務で使用しているMVCフレームワークです。MVCの考え方に基づいた本格的なバックエンドの実装はZendで鍛えられました。
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* その他 */}
            <div className="max-w-[1200px] w-4/5 mx-auto">
                <div className="text-center">
                    <h3 className="text-center text-[30px] max-md:text-[18px]">Others</h3>
                </div>
            </div>
            <div className="max-w-[1200px] w-4/5 mx-auto">
                <div className="flex flex-wrap justify-between mx-auto">

                    {/* AWS */}
                    <div className="flex basis-[46%] flex-wrap justify-between mb-[50px]">
                        <div className="basis-[30%]">
                            <Image
                                src="/images/icons8-aws-96.png"
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="my-[10px]">AWS</h3>
                            <div className="rating">
                                <StarRating count={3} />
                            </div>
                            <div className="section-text">
                                小規模なインフラ構成の設計からデプロイまで一気通貫してできます。HPリリース・セキュリティ対策・保守監視などを現在は担当しています。
                            </div>
                        </div>
                    </div>

                    {/* MySQL */}
                    <div className="flex basis-[46%] flex-wrap justify-between mb-[50px]">
                        <div className="basis-[30%]">
                            <Image
                                src="/images/icons8-mysql-96.png"
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="my-[10px]">MySQL</h3>
                            <div className="rating">
                                <StarRating count={3} />
                            </div>
                            <div className="section-text">
                                実務では、調査や顧客要望対応のためにSQLを頻繁に使用しています。実際の開発ではテーブル設計から着手しています。
                            </div>
                        </div>
                    </div>

                    {/* Docker */}
                    <div className="flex basis-[46%] flex-wrap justify-between mb-[50px]">
                        <div className="basis-[30%]">
                            <Image
                                src="/images/icons8-docker-96.png"
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="my-[10px]">Docker</h3>
                            <div className="rating">
                                <StarRating count={2} />
                            </div>
                            <div className="section-text">
                                個人開発レベルですが、開発環境の統一から本番環境のデプロイまでDockerを活用したことがあります。また、実務でもDockerを使用して開発しています。
                            </div>
                        </div>
                    </div>

                    {/* Git */}
                    <div className="flex basis-[46%] flex-wrap justify-between mb-[50px]">
                        <div className="basis-[30%]">
                            <Image
                                src="/images/icons8-git-96.png"
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="my-[10px]">Git</h3>
                            <div className="rating">
                                <StarRating count={4} />
                            </div>
                            <div className="section-text">
                                バージョン管理では3年以上Gitを使用し続けています。
                            </div>
                        </div>
                    </div>

                    {/* Github */}
                    <div className="flex basis-[46%] flex-wrap justify-between mb-[50px]">
                        <div className="basis-[30%]">
                            <Image
                                src="/images/icons8-github-100.png"
                                alt="Example Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="my-[10px]">Github</h3>
                            <div className="rating">
                                <StarRating count={4} />
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
