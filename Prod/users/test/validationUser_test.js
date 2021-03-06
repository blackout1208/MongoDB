const assert = require('assert');
const User = require('../src/user');

describe('Validating User', () => {
  it('Requires a user name', () => {
    const user = new User({ name: undefined });
    const validationResult = user.validateSync(); //user.validate((validationResult) => { DO SOMETHING });
    const { message } = validationResult.errors.name; // const message = validationResult.erros.name.message;

    assert( message === 'Name is required.');
  });

  it('Requires user name longer than 2 characters', () => {
    const user = new User({ name: 'Al' });
    const validationResult = user.validateSync(); //user.validate((validationResult) => { DO SOMETHING });
    const { message } = validationResult.errors.name; // const message = validationResult.erros.name.message;

    assert( message === 'Name must be longer than 2 characters.');
  });

  it('disallows invalid records from being saved', (done) => {
    const user = new User({ name: 'Al' });
    user.save()
      .catch((validationResult) => {
        const { message } = validationResult.errors.name;
        assert( message === 'Name must be longer than 2 characters.');
        done();
      });
  });
});
