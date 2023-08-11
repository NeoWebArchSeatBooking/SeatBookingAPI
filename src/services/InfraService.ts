import {infraDataAccess} from "../dataaccess/InfraDataAccess"
import { InfraPayload } from "../models";

export class InfraService{

    public async getInfra(): Promise<InfraPayload[]>{
        return await infraDataAccess.getInfra()
    }


}

export const infraService  = new InfraService()