import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer"

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};
export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div id="App">
      <Head>
        <title>{title || "YUTA HANDA｜エンジニアポートフォリオ"}</title>
        <meta name="description" content={description || "エンジニアポートフォリオサイトです。新卒でIT企業に就職し、SE/PGとして主に製造業の基幹系システム開発に約4年間携わりました。AWS/GCP/Azureなどのパブリッククラウドにも興味があり日々技術習得中です。本ポートフォリオサイトは、私の現在のITスキルや経験内容を見える化してまとめたいと考え制作しました。3ヶ月毎にスキル棚卸しのためにサイト更新しています。"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <div id="wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}