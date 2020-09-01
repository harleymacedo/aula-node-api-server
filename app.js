const express = require('express')
const app = express()
const cors = require('cors')

//Domínios autorizados
app.use(cors({
	origin: '*',
}))

app.get('/api/:termo', function(req, res) {
    //Dados mockados
    let profs = [
        {nome: 'Harley', instituicao: 'IFCE', area: 'Desenvolvimento Web e Móvel', campus: 'Crato'},
        {nome: 'Ana', instituicao: 'IFCE', area: 'Computação Gráfica', campus: 'Crato'},
        {nome: 'Talles', instituicao: 'IFCE', area: 'Estrutura de Dados', campus: 'Crato'},
        {nome: 'Robson', instituicao: 'IFCE', area: 'Inteligência Artificial', campus: 'Crato'},
    ]

    //Pesquida de dados usando termo
    let termo = req.params.termo
    let resultado = []
    profs.map( (item) => {
        console.log('Teste')
        if (item.nome === termo || item.area.search(termo) > 0) {
            resultado.push(item)
        }
    })
    
    //Resposta final
    res.json(resultado)

    
})

//Worker do Node
app.listen(process.env.PORT || 3000, function() {
    console.log('App rodando na porta 3000!')
})