import { Sequelize } from "sequelize"

class DBProvider {
    
  private sequelizeConn: Sequelize

  private getBooking_DBURL(){
    const host = process.env.DB_HOST || "127.0.0.1";
    const user = process.env.DB_USER || "sbuser";
    const pwd = process.env.DB_PASSWORD || "seatbookingpwd";
    const scheme = process.env.DB_SCHEME || "seatbooking";
    return `mysql://${user}:${pwd}@${host}:3306/${scheme}`
  }

  public isDBConnected(): Promise<boolean>{
    return new Promise((resolve,reject)=>{
        this.getSBDBConnector().authenticate()
        .then(()=>resolve(true))    
        .catch((err) => reject(err))
    });
  } 

  public getSBDBConnector(){
    if(!this.sequelizeConn){
      this.sequelizeConn = new Sequelize(this.getBooking_DBURL(),{
        logging:false,
        pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }})
    }
    return this.sequelizeConn
  }
 

}

export const dbProvider = new DBProvider()