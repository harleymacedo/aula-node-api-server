const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
	origin: '*',
}))

app.get('/api/:id', function(req, res) {
    let profs = [
        {nome: 'Harley', instituicao: 'IFCE', area: 'Desenvolvimento Web e Móvel',campus: 'Crato'},
        {nome: 'Ana', instituicao: 'IFCE', area: 'Computação Gráfica',campus: 'Crato'},
        {nome: 'Talles', instituicao: 'IFCE', area: 'Estrutura de Dados',campus: 'Crato'},
        {nome: 'Robson', instituicao: 'IFCE', area: 'Inteligência Artificial',campus: 'Crato'},
    ]
    let id = req.params.id
    res.json(profs[id])

    
})

app.listen(process.env.PORT || 3000, function() {
    console.log('App rodando na porta 3000!')
})