import { InfraPayload, SeatPayload } from "../models"
import { MongoServerError } from "mongodb"
import { logger } from "../helpers/Logger"
import { AppError } from "../errors/AppErrors"
import {infraProvider} from "./providers/InfraProvider"
import NodeCache from "node-cache"

class InfraDataAccess{

    private storage:NodeCache
    constructor(){
        this.storage = new NodeCache()
    }

    public async getInfra() : Promise<InfraPayload[]>{
       try{
        if(this.storage.has('INFRA')){
            return this.storage.get('INFRA') ?? []
        }else{
            const infras = infraProvider.getInfra()
            this.storage.set('INFRA',infras)
            return infras
        }
       }catch(err:any){
          const errMessage = err instanceof MongoServerError ? err.errmsg : err.message    
          logger.error(err)
          throw new AppError(500,errMessage)
       }
    }

    public async getSeatsByFields(locId: string,blkId?: string,flrId?:string) : Promise<SeatPayload[]>{
        let seatDocs : SeatPayload []
        if(this.storage.has('SEATS')){
            seatDocs = this.storage.get('SEATS') ?? []
        }else{
            seatDocs = await infraProvider.getSeats() 
            this.storage.set('SEATS',seatDocs)
        }    
        
        const filteredSeats = seatDocs.filter((seat)=>{
            return seat.locationId === locId
             && seat.blockId === blkId
             && ( !flrId || seat.floorId === flrId )
        })
        return filteredSeats
     }

}

export const infraDataAccess = new InfraDataAccess();