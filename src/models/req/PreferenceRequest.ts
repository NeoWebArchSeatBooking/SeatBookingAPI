import { IsNotEmpty } from "class-validator";

export class PreferenceRequest {
    @IsNotEmpty()
    type: string;
    @IsNotEmpty()
    value: string;    
}