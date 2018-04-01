const Base = require('./base');

module.exports = class User extends Base {
    static get tableName() {
        return 'users';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['key', 'secret'],
            properties: {
                id: {
                    type: 'integer'
                },
                key: {
                    type: 'string'
                },
                secret: {
                    type: 'string'
                },
                status: {
                    type: 'string'
                },
                createdAt: {
                    format: 'date-time'
                },
                updatedAt: {
                    format: 'date-time'
                }
            }
        }
    }
};