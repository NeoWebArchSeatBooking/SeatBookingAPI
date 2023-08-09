import { ResponseHelper } from "../helpers"
import { InfraPayload, Location, SeatPayload } from "../models"
import {INFRA_JSON,SEATS_JOSN} from "./infra"

class InfraDataAccess{

        public async getInfra(userId: string) : Promise<InfraPayload>{
            const infra = new InfraPayload()
            infra.locations = INFRA_JSON
            return infra
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