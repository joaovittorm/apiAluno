const express = require('express');
const alunoRoutes = require('./routes/alunoRoutes');

// Cria uma instância da aplicação Express
const app = express();
app.use(express.json());

app.use('/alunos', alunoRoutes);

// Define a porta em que o servidor vai rodar (porta 3000)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});