import {infraDataAccess} from "../dataaccess/InfraDataAccess"
import { InfraPayload, InfraResponse } from "../models";

export class InfraService{

    public async getInfra(userId: string): Promise<InfraPayload>{
        return await infraDataAccess.getInfra(userId)
    }


}

export const infraService  = new InfraService()