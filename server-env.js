const app = require('http')
  .createServer((req, res)=> res.sendDate('oh hi there!'))

// app.listen(3000, ()=> {
//     console.log('Server is listening on port 3000')
// });

// const PORT = process.env.PORT
// app.listen(PORT, ()=> {
//     console.log(`Server is listening on port ${PORT}`)
// });

const DATABASE_URL = process.env.DATABASE_URL 
app.listen(3000, ()=> {
    console.log(`Server is listening on port ${DATABASE_URL}`)
});

// console.log(process.env)
console.log(3000)