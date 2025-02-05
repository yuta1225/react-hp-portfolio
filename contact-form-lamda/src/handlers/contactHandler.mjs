import AWS from 'aws-sdk';

AWS.config.update( { region: 'ap-northeast-1' } );
const ses = new AWS.SES();

export async function handler(event) {
    try {
        const { name, email, message} = JSON.parse(event.body);

        const params = {
            Destination: { ToAddresses: ['yuta.h5221@gmail.com'] },
            Message: {
                Body: { Text: { Data: `From: ${name} (${email}\n\n${message})`}},
                Subject: { Data: 'お問合せフォーム' },
            },
            Source: 'noreply@example.com',
        };
        await ses.sendEmail(params).promise();
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