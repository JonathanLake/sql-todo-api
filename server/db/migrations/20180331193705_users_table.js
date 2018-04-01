
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('key');
      table.unique('key');
      table.string('secret');
      table.string('status');
      table.timestamps();
  });
};

exports.down = async (knex) => {
    const table = await knex.schema.dropTable('users');
};
