const knex = require('../db/knex');
const {Model} = require('objection');

Model.knex(knex);

module.exports = class Base extends Model {
    static get modelPaths() {
        return [__dirname];
    };
};