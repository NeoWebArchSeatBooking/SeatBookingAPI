import { IsNotEmpty } from "class-validator";

export class PreferenceRequest {
    @IsNotEmpty()
    key: string;
    @IsNotEmpty()
    value: string;    
}