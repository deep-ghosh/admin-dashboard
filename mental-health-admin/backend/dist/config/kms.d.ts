declare const kmsClient: {
    encryptData: (data: string, keyId: string) => Promise<string>;
    decryptData: (encryptedData: string, keyId: string) => Promise<string>;
};
export { kmsClient };
//# sourceMappingURL=kms.d.ts.map