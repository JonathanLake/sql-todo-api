
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('key').notNullable();
      table.string('secret').notNullable();
      table.string('status');
      table.timestamps();
      table.unique('key');
  });
};

exports.down = async (knex) => {
    const table = await knex.schema.dropTable('users');
};
