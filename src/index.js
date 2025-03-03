import { initMongoConnection } from './db/initMongoConnection.js';
import { setUpServer } from './server.js';

const startServ = async () => {
  await initMongoConnection();
  setUpServer();
};
startServ();
