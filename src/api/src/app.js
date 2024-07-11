import express from "express";
const app = express();

//Indicar para o express ler o body com json
app.use(express.json());

//MOCK
const SELECOES = [
    { id: 1, selecao: "Brasil", grupo: 'G' },
    { id: 2, selecao: "Suiça", grupo: 'G' },
    { id: 3, selecao: "Sérvia", grupo: 'G' },
    { id: 4, selecao: "Camarões", grupo: 'G' },
]
//Função que busca por um id especifico
function buscarSelecaoPorId(id) {
    return SELECOES.filter(selecao => selecao.id == id)
}


function buscaIndexSelecao(id){
    return SELECOES.findIndex(selecao => selecao.id == id)
}

//Define a rota padrão da minha API
app.get('/', (req, res) => {
    res.send('ola mundo!');
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(SELECOES)
})

app.get('/selecoes/:id', (req, res) => {
    // let index = req.params.id
    res.json(buscarSelecaoPorId(req.params.id))
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscaIndexSelecao(req.params.id)
    SELECOES.splice(index, 1)
    res.send(`Seleçao com id ${req.params.id} excluida com sucesso`)
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscaIndexSelecao(req.params.id);
    SELECOES[index].selecao = req.body.selecao;
    SELECOES[index].grupo = req.body.grupo;
    res.json(SELECOES);
    // res.send(`Seleção com id ${res.params.id} foi substituido com sucesso!!`)
})

app.post('/selecoes', (req, res) => {
    SELECOES.push(req.body);
    res.status(201).send('Armazenado com sucesso na base de dados')
})

export default app;