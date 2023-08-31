import { PreferenceRequest } from "../../models";
import { PreferenceModel } from "../../models/database/Preference";

export class PreferenceDataAccess {
  
  public async getPreferences(userId: string): Promise<PreferenceModel[]>{
    const preferences:any = [{id:1,userId:'test',preferenceType:'locationId',preferenceValue:'loc',preferenceActive:'Y'}]
    return Promise.resolve(preferences.filter((pref:any)=>pref.userId === userId));
  }

  public async createPreference(userId: string, req: PreferenceRequest): Promise<void> {
    return Promise.resolve()
  }

  public async updatePreference(preferenceId: number,statusCde: string='N'):Promise<boolean>{
    return Promise.resolve(true)
  }

}

export const preferenceDataAccess = new PreferenceDataAccess();
