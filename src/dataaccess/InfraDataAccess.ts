import { InfraPayload, SeatPayload } from "../models"
import {INFRA_JSON,SEATS_JOSN} from "./infra"

class InfraDataAccess{

        public async getInfra() : Promise<InfraPayload[]>{
            return INFRA_JSON
        }

        public async getSeats(locId: string,blkId: string,flrId:string) : Promise<SeatPayload>{
            const seatPayload = new SeatPayload()
            const seats = SEATS_JOSN.filter((floor)=> floor.floorKey === `${locId}${blkId}${flrId}`)[0]
            seatPayload.seats = seats.seats
            seatPayload.locationId = locId
            seatPayload.blockId = blkId
            seatPayload.floorId = flrId
            return seatPayload
        }

}

export const infraDataAccess = new InfraDataAccess();