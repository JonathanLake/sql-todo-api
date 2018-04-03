
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('key').unique().notNullable();
      table.string('secret').notNullable();
      table.string('status');
      table.timestamps();
  });
};

exports.down = async (knex) => {
    const table = await knex.schema.dropTable('users');
};
