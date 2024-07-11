import app from "./src/app.js";

const PORT = 3300;

//Escutar a porta 3000
app.listen(PORT, ()=>{
    console.log(`servidor rodando no endereço: http://localhost: ${PORT}`);
})

