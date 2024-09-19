import { DataSource } from 'typeorm';

export const connectServidorNoBD = async () => {
  const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'nodejs',
    entities: [],
    synchronize: true,
  });

  try {
    await dataSource.initialize();
    console.log(`App conectado ao banco de dados: ${dataSource.options.database}`);
    
    process.on('SIGINT', () => {
      dataSource.destroy().then(() => console.log('Conexão com o BD fechada'));
    });
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados', err);
  }
};