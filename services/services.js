module.exports = (pool) => {
  
  async function allData() {
    const result = await pool.query(`select id, name, username, age, r1, r1paid, game, gamepaid, address1
    from clients
    join debts on
    clients.id = debts.user_id`);
    return result.rows;
  }

  // Client table queries
  async function insertUserData (data) {
    await pool.query(`insert into clients (name,username,age,address1,address2,address3) 
    values 
    ($1,$2,$3,$4,$5,$6)`,[data.name,data.username,data.age,data.address1,data.address2,data.address3])
  }
  async function insertUserDetails (data){
    const userData = await getUserData(data.username);
    
    if (userData.length !=0 ) {
      return false
    } else {
      await insertUserData(data);
      return true;
    }
  }
  async function getUserData(username) {
    const result = await pool.query(`select * from clients where username=$1`,[username]);
    return result.rows;
  }

  // Debts table services / queries
  async function insertDebt(data) {
    await pool.query(`insert into debts (r1,r1paid,game,gamepaid,user_id) 
    values
    ($1,$2,$3,$4,$5)`, [data.r1, data.r1paid, data.game, data.gamepaid, data.user_id]);
  } 
  async function getUserDebts(id) {
    const result = await pool.query(`select * from debts where user_id = $1`, [id]);
    return result.rows; 
  }
  async function insertUserDebts(data){
    const userData = await getUserDebts(data.user_id);
    if(userData.length != 0) {
      // Update the info for the current user
      
      return false;
    } else {
      await insertDebt(data);
    }
  }
  return {
    allData,
    insertUserDetails,
    getUserData,
    insertUserDebts,
    getUserDebts
  }
}