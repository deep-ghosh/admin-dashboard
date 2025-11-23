export class NotificationService {
    async sendEmail(to, subject, _body) {
        console.log(`Sending email to ${to}: ${subject}`);
    }
    async sendSMS(phoneNumber, message) {
        console.log(`Sending SMS to ${phoneNumber}: ${message}`);
    }
}
//# sourceMappingURL=notification.service.js.map