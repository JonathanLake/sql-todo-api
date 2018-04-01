const path = require('path');

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'server/db/auth.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'server/db/migrations')
    },
    useNullAsDefault: true
};