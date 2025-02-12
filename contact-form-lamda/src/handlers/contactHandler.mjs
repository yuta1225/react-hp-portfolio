// contactHandler.mjs 
// lamda関数。お問合せ内容を処理
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
const sesClient = new SESClient({ region: 'ap-northeast-1' });

export async function handler(event) {
    const { name, email, message} = JSON.parse(event.body);
    
    // 送信結果を管理する変数
    let senderSuccess = false;
    let adminSuccess = false;
    let senderError = null;
    let adminError = null;
    
    // 送信者（お問合せした人）へ確認メールを送信
    try {
        const responseMessage = `お問合せいただき、誠にありがとうございます。\n確認次第、折り返しご連絡させていただきます。\n大変恐縮ですが、お待ちいただけますと幸いです。\n\n【お問合せ内容】\nお名前：${name} \n内容：${message}`;
        const senderResponse = {
            Destination: { ToAddresses: [email] },
            Message: {
                Body: { Text: { Data: responseMessage}},
                Subject: { Data: 'お問合せありがとうございます' },
            },
            Source: 'info@yuta-handa.com',
        };
        const command = new SendEmailCommand(senderResponse);
        await sesClient.send(command);
        
        senderSuccess = true;
    } catch (error) {
        senderSuccess = false;
        senderError = error.message;
    }

    // 受信者（半田優太）へお問合せ内容を送信。プライベートアドレス（Gmail）で受信する
    // このままだと、直接ドメインに対してお問合せがきたら確認できないので、S3に保存されたメールを転送するプログラムを書く
    try {
        const adminMessage = `お問合せが来ました。\n返信してください。\n\n【お問合せ内容】\nお名前：${name}\nメール：${email}内容：${message}`;
        const adminResponse = {
            Destination: { ToAddresses: ['yuta.h5221@gmail.com'] },
            Message: {
                Body: { Text: { Data: adminMessage}},
                Subject: { Data: 'お問合せがきました' },
            },
            Source: ['info@yuta-handa.com'],
            ReplyToAddresses: [email],
        };
        const command = new SendEmailCommand(adminResponse);
        await sesClient.send(command);
        adminSuccess = true;
    } catch (error) {
        adminSuccess = false;
        adminError = error.message;
    }
    return {
        statusCode: senderSuccess && adminSuccess ? 200 : 500,
        body: JSON.stringify({
            senderSuccess,
            adminSuccess,
            senderError,
            adminError,
        })
    }
}
// ローカルテスト用の event データ
const testEvents = {
    body: JSON.stringify({
        name: '半田優太',
        email: 'yuta.h5221@gmail.com',
        message: 'これは半田優太から送ったテストメッセージです', 
    }),
};
// ローカル実行でテストするために即時実行関数を定義
(async() => {
    const response = await handler(testEvents);
    console.log(response);
})();