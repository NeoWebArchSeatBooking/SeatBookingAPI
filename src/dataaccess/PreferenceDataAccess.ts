import { AppError } from "../errors/AppErrors";
import { PreferenceRequest } from "../models";
import { logger } from "../helpers/Logger"
import { ValidationError } from "sequelize";
import { Constants } from "../helpers/Constants";
import { PreferenceModel } from "../models/database/Preference";
const cls = {class : "PreferenceDataAccess"}

export class PreferenceDataAccess {
  
  public async getPreferences(userId: string): Promise<PreferenceModel[]>{
    logger.debug(cls,`fetching preferences for ${userId}`)    
    const preferences = await PreferenceModel.findAll({
      where: {userId,preferenceActive:Constants.ACTIVE_YES},
      order: ['id']
    });
    return preferences;
  }

  public async createPreference(userId: string, req: PreferenceRequest): Promise<void> {
    try{
      logger.debug(cls,`creating preference for ${userId}`) 
      const prefResp = await PreferenceModel.create({
          userId: userId,
          preferenceType: req.key,
          preferenceValue: req.value,
          preferenceActive: Constants.ACTIVE_YES   
      });
      logger.debug({cls,...prefResp})
    }catch(err: any){
      logger.error({...cls,...err})
      const message = err instanceof ValidationError 
        ? err.errors.map((err)=>err.message).join("->") : err.message
      throw new AppError(500,message)
    }
  }

  public async updatePreference(preferenceId: number,statusCde: string='N'):Promise<boolean>{
    logger.debug(cls,`updating preference status for id ${preferenceId}`)    
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
