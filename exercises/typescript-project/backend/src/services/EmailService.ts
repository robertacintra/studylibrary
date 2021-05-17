interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: Array<string>; //ou: string[]
}

class EmailService {
    sendMail(to: IMailTo, message: IMailMessage) {
        console.log(`E-mail enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;