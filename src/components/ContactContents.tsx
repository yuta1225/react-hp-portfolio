// components/ContactContent.js
export default function ContactContent() {
    return (
      <div>
        <h1>お問い合わせページ</h1>
        <form>
          <div>
            <label htmlFor="name">お名前</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">メールアドレス</label>
            <input type="email" id="email" name="email" />
          </div>
          <button type="submit">送信</button>
        </form>
      </div>
    );
  }  