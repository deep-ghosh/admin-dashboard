export declare class StudentModel {
    static tableName: string;
    static findBySeverity(_minSeverity: number, _limit?: number, _offset?: number): Promise<void>;
    static findById(_anonId: string): Promise<void>;
    static getAll(_limit?: number, _offset?: number): Promise<void>;
}
export declare class AuditLogModel {
    static tableName: string;
    static create(_data: any): Promise<void>;
    static find(_filters: any): Promise<void>;
}
export declare class RevealRequestModel {
    static tableName: string;
    static create(_data: any): Promise<void>;
    static findById(_requestId: string): Promise<void>;
    static update(_requestId: string, _data: any): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map