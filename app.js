const express = require('express')
const app = express()

app.get('/index', function (req, res) {
  res.send('Hello World')
  console.log("baglanti basarilii hoooppp");
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log("sunucuya baglanti basarili...."))