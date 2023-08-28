import { Preference } from "../Preference";
import { BaseResponse } from "./BaseResponse";

export class PreferenceResponse extends BaseResponse {
    preferences: Preference[]
}