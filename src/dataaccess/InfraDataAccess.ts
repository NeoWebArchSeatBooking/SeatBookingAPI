import { InfraPayload, SeatPayload } from "../models"
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
            const infras = await infraProvider.getInfra()
            this.storage.set('INFRA',infras)
            return infras
        }
       }catch(err:any){
          logger.error(err)
          throw new AppError(500,err.message)
       }
    }

    public async getSeatsByFields(locId: string,blkId: string,flrId?:string) : Promise<SeatPayload[]>{
        try{
            let seatDocs : SeatPayload []
            if(this.storage.has('SEATS')){
                seatDocs = this.storage.get('SEATS') ?? []
            }else{
                seatDocs = await infraProvider.getSeats() 
                this.storage.set('SEATS',seatDocs)
            }    
            
            const filteredSeats = seatDocs.filter((seat)=>{
                return seat.locationId === locId
                && ( !blkId || seat.blockId === blkId )
                && ( !flrId || seat.floorId === flrId )
            })
            return filteredSeats
        }catch(err:any){
            logger.error(err)
            throw new AppError(500,err.message)
        }
     }

}

export const infraDataAccess = new InfraDataAccess();
