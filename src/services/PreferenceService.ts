import { preferenceDataAccess } from "../dataaccess/PreferenceDataAccess";
import { Constants } from "../helpers";
import { Preference, PreferenceRequest } from "../models";
import { PreferenceModel } from "../models/database/Preference";


class PreferenceService{

    public async createPreference(userId: string, preferenceReq: PreferenceRequest){
        await preferenceDataAccess.createPreference(userId,preferenceReq)
    }

    public async getPreferences(userId: string){
        const preferences = await preferenceDataAccess.getPreferences(userId)
        return this.mapToResponse(preferences)
    }

    public async cancelPreference(id:number){
        return await preferenceDataAccess.updatePreference(id,Constants.ACTIVE_NO)
    }

    private mapToResponse(preferences: PreferenceModel[]): Preference[]{
        return preferences.map((pref)=>{
            const preference = new Preference()
            preference.id = pref.id
            preference.type = pref.preferenceType
            preference.value = pref.preferenceValue
            preference.status = pref.preferenceActive
            return preference
        })
    }

}

export const preferenceService = new PreferenceService()