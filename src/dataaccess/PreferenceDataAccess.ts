import { AppError } from "../errors/AppErrors";
import { PreferenceRequest } from "../models";
import { logger } from "../helpers/Logger"
import { ValidationError } from "sequelize";
import { Constants } from "../helpers/Constants";
import { PreferenceModel } from "../models/database/Preference";

export class PreferenceDataAccess {
  
  public async getPreferences(userId: string): Promise<PreferenceModel[]>{
  
    const preferences = await PreferenceModel.findAll({
      where: {userId}
    });
    return preferences;
  }

  public async createPreference(userId: string, req: PreferenceRequest): Promise<void> {
    try{
      const prefResp = await PreferenceModel.create({
          userId: userId,
          preferenceType: req.type,
          preferenceValue: req.value,
          preferenceActive: Constants.ACTIVE_YES   
      });
      logger.debug(prefResp)
    }catch(err: any){
      logger.error(err)
      const message = err instanceof ValidationError 
        ? err.errors.map((err)=>err.message).join("->") : err.message
      throw new AppError(500,message)
    }
  }

  public async updatePreference(preferenceId: number,statusCde: string='N'):Promise<boolean>{
    const [affectedCount] = await PreferenceModel.update(
        { preferenceActive: statusCde  },
        {
          where: {
            id:preferenceId
          }
        }
      )      
    return affectedCount > 0  
  }

}

export const preferenceDataAccess = new PreferenceDataAccess();
