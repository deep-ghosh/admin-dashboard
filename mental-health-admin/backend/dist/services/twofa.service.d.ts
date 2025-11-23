export declare class TwoFAService {
    generateSecret(name: string): {
        secret: string;
        qrCode: string;
    };
    verifyToken(secret: string, token: string): boolean;
}
//# sourceMappingURL=twofa.service.d.ts.map