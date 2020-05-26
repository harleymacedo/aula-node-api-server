const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.json({
        nome: 'Harley',
        instituicao: 'IFCE',
        area: 'Desenvolvimento Web e Mobile',
        campus: 'Crato',
    })
})

app.listen(3000, function() {
    console.log('App rodando na porta 3000!')
})