module.exports = (query) => {
  async function home (req, res) {
    try {
      // Will load the default single page to update info
      res.send('Just tomake sure its working')
    } catch (err) {

    }
  }
  async function all (req, res) {
    try{
      const result = await query.allData();
      res.json({
        status : 'success',
        response : result
      })
    } catch(err) {
      res.json({
        status : 'error',
        response : err.stack
      })
    }
  }
  return {
    home,
    all
  }
}
