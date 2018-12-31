module.exports = (app, query) => {
  async function all (req, res) {
    try {
      res.send('I got it working')
    } catch (err) {

    }
  }

  return {
    all
  }
}
