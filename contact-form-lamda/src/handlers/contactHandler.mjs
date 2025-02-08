import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({ region: 'ap-northeast-1' })

export async function handler(event) {
    try {
        const { name, email, message} = JSON.parse(event.body);

        const params = {
            Destination: { ToAddresses: ['yuta.h5221@gmail.com'] },
            Message: {
                Body: { Text: { Data: `From: ${name} (${email}\n\n${message})`}},
                Subject: { Data: 'お問合せフォーム' },
            },
            Source: 'info@yuta-handa.com',
        };
        
        const command = new SendEmailCommand(params);
        await sesClient.send(command);
        
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'メール送信成功' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'メール送信失敗', details: error.message }),
        }       
    }
}
// ローカルテスト用の event データ
const testEvents = {
    body: JSON.stringify({
        name: 'テストユーザー',
        email: 'test@example.com',
        message: 'これはテストメッセージです', 
    }),
};
// ローカル実行
(async() => {
    const response = await handler(testEvents);
    console.log(response);
})();