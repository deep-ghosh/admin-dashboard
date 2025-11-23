import speakeasy from 'speakeasy';
export class TwoFAService {
    generateSecret(name) {
        const secret = speakeasy.generateSecret({ name });
        return {
            secret: secret.base32,
            qrCode: secret.otpauth_url || ''
        };
    }
    verifyToken(secret, token) {
        return speakeasy.totp.verify({
            secret,
            encoding: 'base32',
            token,
            window: 2
        });
    }
}
//# sourceMappingURL=twofa.service.js.map