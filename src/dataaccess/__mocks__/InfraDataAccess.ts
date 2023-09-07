import { InfraPayload, SeatPayload } from "../../models"
import { INFRA_JSON,SEATS_JOSN}  from "../providers/__mocks__/infra"
class InfraDataAccess {
    
    public async getInfra() : Promise<InfraPayload[]>{
        return INFRA_JSON
     }
 
     public async getSeatsByFields(locId: string,blkId: string,flrId:string) : Promise<SeatPayload[]>{
         const seatDoc = new SeatPayload()
         seatDoc.locationId = locId
         seatDoc.blockId = blkId
         seatDoc.floorId = flrId
         seatDoc.seats = SEATS_JOSN.find((seats)=>seats.locationId === locId && seatDoc.blockId === blkId && seatDoc.floorId === flrId)?.seats ?? []
         return Promise.resolve([seatDoc])
      }
}

export const infraDataAccess = new InfraDataAccess();