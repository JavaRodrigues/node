import { MongoClient, ObjectId } from 'mongodb';
import 'dotenv/config'; // Carrega as variáveis do .env

const client = new MongoClient(process.env.MONGODB_URI);
let db;

/**
 * Conecta ao banco de dados. Reutiliza a conexão se já estiver ativa.
 */
async function connectToDatabase() {
    if (db) {
        return db;
    }
    try {
        await client.connect();
        console.log('Conectado com sucesso ao MongoDB');
        db = client.db(process.env.DB_NAME); // Defina o nome do banco no seu .env
        return db;
    } catch (error) {
        console.error('Não foi possível conectar ao MongoDB', error);
        process.exit(1); // Encerra a aplicação se não conseguir conectar ao DB
    }
}
/**
 * Insere um documento na coleção 'customers'.
 */
async function insert(customer) {
    const database = await connectToDatabase();
    const collection = database.collection('customers');
    return await collection.insertOne(customer);
}

/**
 * Busca documentos na coleção 'customers'.
 * @param {object} query - O filtro da busca. Deixe em branco ({}) para buscar todos.
 */
async function find(query) {
    const database = await connectToDatabase();
    const collection = database.collection('customers');
    return await collection.find(query).toArray();
}

/**
 * Atualiza um documento na coleção 'customers'.
 * @param {string} id - O ID do cliente a ser atualizado.
 * @param {object} customer - Os dados do cliente para atualizar.
 */
async function update(id, customer) {
    const database = await connectToDatabase();
    const collection = database.collection('customers');
    return await collection.updateOne({ _id: new ObjectId(id) }, { $set: customer });
}

/**
 * Remove um documento da coleção 'customers'.
 * @param {string} id - O ID do cliente a ser removido.
 */
async function remove(id) {
    const database = await connectToDatabase();
    const collection = database.collection('customers');
    return await collection.deleteOne({ _id: new ObjectId(id) });
}

export default { insert, find, update, remove };
