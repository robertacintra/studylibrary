interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: Array<string>; //ou: string[]
}

interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailService {
    sendMail(requeste: IMessageDTO): void;
}

class EmailService implements IEmailService {
    sendMail({ to, message }: IMessageDTO) {
        console.log(`E-mail enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;