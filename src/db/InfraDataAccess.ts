import { ResponseHelper } from "../helpers"
import { InfraPayload, Location } from "../models"
import {BlockJSON,LocationJSON,SeatJSON,FloorJSON,WingJSON} from "./infra"

class InfraDataAccess{

        public async getInfra(userId: string) : Promise<InfraPayload>{
            const infra = new InfraPayload()
            infra.locations = LocationJSON
            infra.blocks = BlockJSON
            infra.floors = FloorJSON
            infra.wings = WingJSON
            infra.seats = SeatJSON
            return infra
        }

}

export const infraDataAccess = new InfraDataAccess();