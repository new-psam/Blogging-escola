require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

// Conecta ao banco de dados REAL (não o de memória dos testes)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/blogging_escola');
        console.log('MongoDB conectado!');
    } catch (error) {
        console.error('Erro ao conectar no MongoDB', err);
        process.exit(1);
    }
};

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});