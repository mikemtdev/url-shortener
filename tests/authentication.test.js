const auth = require('../app/util/authentication');
const user = require('../app/data/const');
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

describe('Authentication', () => {
  it('should return true if the all the checks pass', () => {
    expect(
      auth(
        user.userEmail,
        user.userPassword
      )
    ).toBe(true);
  });
});
