const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('hello, this is my first!')
})

const server = app.listen(8080, function(){
    const host = server.address().address
    const port = server.address().port

    console.log('host:' + host + ', port:' + port)
})

