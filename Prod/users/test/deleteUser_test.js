const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name : 'Joe' });
    joe.save()
      .then(() => done());
  });

  it('model instance remove', (done) => {
    joe.remove()
      .then(() => User.findOne({name: 'Joe' }))
      .then((user) => {
        assert(user === null);
        done();
      });

      //or
      /*joe.remove()
        .then(() => {
          User.findOne({name: 'Joe' })
            .then((user) => {
              assert(user === null);
              done();
            });
        });*/
  });

  it('class method remove', (done) => {
    //Remove a bunch of records giving any criteria
    User.remove({name: 'Joe'})
      .then(() => User.findOne({name: 'Joe' }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method findOneAndRemove', (done) => {
    User.findOneAndRemove({name: 'Joe' })
      .then(() => User.findOne({name: 'Joe' }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method findByIdAndRemove', (done) => {
    User.findByIdAndRemove(joe._id)
      .then(() => User.findOne({_id: joe._id }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });
});
