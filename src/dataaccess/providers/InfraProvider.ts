import { InfraPayload, SeatPayload, SeatType } from "../../models"
import { MongoServerError } from "mongodb"
import { logger } from "../../helpers/Logger"
import { AppError } from "../../errors/AppErrors"
import { Db, MongoClient, ServerApiVersion } from "mongodb"

export interface InfraProvider{
    isProviderConnected(): Promise<boolean>
    getInfra() : Promise<InfraPayload[]>
    getSeats() : Promise<SeatPayload[]>
}

class MongoProvider implements InfraProvider{
    
    private infraDB : Db
    private url: string
    private readonly database = 'infradb'

    private readonly col_locations = 'locations'

    private readonly col_seats = 'seats'

    constructor(){
        const user = process.env.INFRA_DB_USER || "sgddaran";
        const pwd = process.env.INFRA_PASSWORD || "dummy";
        this.url = `mongodb+srv://${user}:${pwd}@infradb.gohly8s.mongodb.net/?retryWrites=true&w=majority`
    }

    public isProviderConnected(): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            this.getInfraDB().then((db)=>{
                db.stats()
                .then((res)=> resolve(res.ok === 1))
                .catch((err)=>{reject(err)})
                resolve(true)
            }).catch((err)=>{
                reject(err)
            })
        })
    }

    private async getInfraDB(){
        if(!this.infraDB){
          const client = new MongoClient(this.url, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          })
          await client.connect()
          this.infraDB = client.db(this.database)
        }
        return this.infraDB
      }

    public async getInfra() : Promise<InfraPayload[]>{
       try{
            const db = await this.getInfraDB()
            const infraDocs = await db.collection(this.col_locations).find({},{projection:{"_id": 0 }}).toArray()
            const infraPayloads = infraDocs.map((doc)=>{
                return doc as any as InfraPayload
            })
            return infraPayloads
       }catch(err:any){
          const errMessage = err instanceof MongoServerError ? err.errmsg : err.message    
          logger.error(err)
          throw new AppError(500,errMessage)
       }
    }

    public async getSeats() : Promise<SeatPayload[]>{
        try{
             const db = await this.getInfraDB()
             const seatDocs = await db.collection(this.col_seats).find({},{projection:{"_id": 0 }}).toArray()
             const seatPayLoads = seatDocs.map((doc)=>{
                const seatPayLoad = new SeatPayload()
                seatPayLoad.seats = doc.seats as SeatType[]
                seatPayLoad.locationId = doc.locationId
                seatPayLoad.blockId = doc.blockId
                seatPayLoad.floorId = doc.floorId
                return seatPayLoad
             })
             return seatPayLoads
        }catch(err:any){
           const errMessage = err instanceof MongoServerError ? err.errmsg : err.message    
           logger.error(err)
           throw new AppError(500,errMessage)
        }
     }

}

export const infraProvider: InfraProvider = new MongoProvider();