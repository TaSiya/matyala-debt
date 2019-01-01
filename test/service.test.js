const Services = require('../services/services')
const pool = require('../src/db-config')
const assert = require('assert')
describe('Debt management App', () => {
  describe('testing the client table', () => {
    it('check if siyanda is in the table', async () => {
      const service = Services(pool);
      const userData = {
        name : 'odwa',
        username : 'o.d',
        age : 18,
        address1 : `M19 Bonkolo Street`
      }
      await service.insertUserDetails(userData);
      const data = await service.getUserData('o.d');
      const name = data[0].name;
      assert.strictEqual(name, 'odwa')
    })
  })
  describe('Testing the debt table', () => {
    it ('should return r1 owned by tasiya', async ()=> {
      const service = Services(pool);
      const data = {
        r1 : 10,
        r1paid : 20,
        game : 15,
        gamepaid : 10,
        user_id : 1
      }
      await service.insertUserDebts(data);
      const userData = await service.getUserDebts(1);
      const debt = userData[0];
      assert.deepStrictEqual(debt,data);
    })
  })

})
