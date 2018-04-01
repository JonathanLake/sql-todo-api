const User = require('../../server/models/user');
const {expect} = require('chai');
const uuid = require('uuid');

describe('User model', function() {
    it('should create a new user', async function() {
        const now = new Date().toISOString();
        const attrs = {
            key: uuid.v4(),
            secret: 'password!',
            status: 'Active',
            created_at: now,
            updated_at: now
        };
    const user = await User.query().insert(attrs);
    expect(user.id).to.be.a('number');
    expect(user.key).to.equal(attrs.key);
    });
});