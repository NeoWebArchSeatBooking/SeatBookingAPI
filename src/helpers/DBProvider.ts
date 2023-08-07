import {Sequelize } from "sequelize"
import { BookingDB } from "../models/internal/BookingDB"

class DBHelper{
    
  private static sequelizeConn: Sequelize

  public static getSBDBConn(){
    if(! this.sequelizeConn){
      this.sequelizeConn = new Sequelize(BookingDB.getBooking_DBURL(),{
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

export const sbConnector = DBHelper.getSBDBConn()