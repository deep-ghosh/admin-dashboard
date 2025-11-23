export class StudentModel {
    static async findBySeverity(_minSeverity, _limit = 50, _offset = 0) {
        // Query implementation
    }
    static async findById(_anonId) {
        // Query implementation
    }
    static async getAll(_limit = 50, _offset = 0) {
        // Query implementation
    }
}
StudentModel.tableName = 'anon_students';
export class AuditLogModel {
    static async create(_data) {
        // Insert implementation
    }
    static async find(_filters) {
        // Query implementation
    }
}
AuditLogModel.tableName = 'audit_logs';
export class RevealRequestModel {
    static async create(_data) {
        // Insert implementation
    }
    static async findById(_requestId) {
        // Query implementation
    }
    static async update(_requestId, _data) {
        // Update implementation
    }
}
RevealRequestModel.tableName = 'reveal_requests';
//# sourceMappingURL=index.js.map