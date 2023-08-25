import { InfraPayload, SeatPayload, SeatType } from "../../../models"
import { InfraProvider } from "../InfraProvider"
import { INFRA_JSON, SEATS_JOSN } from "./infra"

class MockProvider implements InfraProvider{
    
    public isProviderConnected(): Promise<boolean> {
        return Promise.resolve(true)
    }

    public async getInfra() : Promise<InfraPayload[]>{
       return Promise.resolve(INFRA_JSON)
    }

    public async getSeats() : Promise<SeatPayload[]>{
        return Promise.resolve(SEATS_JOSN.map((json)=>{
            const seatPayLoad = new SeatPayload()
                seatPayLoad.seats = json.seats as SeatType[]
                seatPayLoad.locationId = json.floorKey.substring(0,3)
                seatPayLoad.blockId = json.floorKey.substring(3,7)
                seatPayLoad.floorId = json.floorKey.substring(7)
                return seatPayLoad
        }))
     }

}

export const infraProvider: InfraProvider = new MockProvider();