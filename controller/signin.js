// const handleSignin = function(db ,bcrypt) {
//     return function(req, res) {
//         return db.select('email', 'hash').from('login')
//                 .where('email', '=', req.body.email)
//                 .then(data => {
//                     bcrypt.compareSync(req.body.password, data[0].hash);
//                     const isVaild = bcrypt.compareSync(req.body.password, data[0].hash);
//                     if (isVaild) {
//                         return db.select('*').from('users')
//                         .where('email', '=', req.body.email)
//                         .then(user => {
//                             res.json(user[0])
//                         })
//                         .catch(err => res.status(400).json('unable to get user information'))  
//                     } else {
//                         console.log('wrong...')
//                         return res.status(400).json('wrong keying of signin')
//                     }
//                 })
//                 .catch(err => res.status(400).json('wrong keying of signin'))
//     }
// }  

const handleSignin = (db ,bcrypt) => (req, res) => {
  const { email, password } = req.body;
  // empty valued check
  if (!email || !password) {
    return res.status(400).json('incorrect summit information')
  }
  db.select('email', 'hash').from('login')
  .where('email', '=', email)
  .then(data => {
      bcrypt.compareSync(password, data[0].hash);
      const isVaild = bcrypt.compareSync(password, data[0].hash);
      if (isVaild) {
        return db.select('*').from('users')
          .where('email', '=', email)
          .then(user => {
              res.json(user[0])
          })
          .catch(err => res.status(400).json('unable to get user information'))  
      } else {
          console.log('wrong...')
          return res.status(400).json('wrong keying of signin')
      }
  })
  .catch(err => res.status(400).json('wrong keying of signin'))
}

module.exports = {
    handleSignin
};