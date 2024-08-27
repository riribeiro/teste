const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Configura o diretório 'public' para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

