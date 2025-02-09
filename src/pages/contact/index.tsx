// pages/contact.js
import React from "react";
import dynamic from "next/dynamic";

// 動的に読み込むコンポーネント
const ContactContent = dynamic(() => import("../../components/ContactContents"), {
  loading: () => <p>読み込み中...</p>, // ローディング表示
});

export default function Contact() {
  return (
    <div>
      <ContactContent />
    </div>
  );
}