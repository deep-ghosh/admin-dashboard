import { kmsClient } from '../config/kms';
export class EncryptionService {
    async encryptData(data, keyId) {
        return await kmsClient.encryptData(data, keyId);
    }
    async decryptData(encryptedData, keyId) {
        return await kmsClient.decryptData(encryptedData, keyId);
    }
}
//# sourceMappingURL=encryption.service.js.map