const SequelizeMock = require('sequelize-mock');

class DBProvider {
    
  public isDBConnected(): Promise<boolean>{
    return Promise.resolve(true);
  } 

  public getSBDBConnector(){
    const sequelize = new SequelizeMock()
    return sequelize
  }
 
}

export const dbProvider = new DBProvider()