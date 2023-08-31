import { Body, Controller, Get, Param, Patch, Post, QueryParams } from "routing-controllers";
import { ResponseHelper, Validator, logger } from "../helpers";
import { BaseResponse, PreferenceRequest, PreferenceResponse, UserRequest } from "../models";
import { preferenceService } from "../services/PreferenceService";

@Controller("/preference")
export class PreferenceRouter {

    @Get()
    public async getPreferences(
        @QueryParams() userRequest : UserRequest
    ):Promise<PreferenceResponse>{
        const response  = new PreferenceResponse()
        try{
            response.preferences = await preferenceService.getPreferences(userRequest.userId)
            ResponseHelper.setSuccessResponse(response);
        }catch(err:any){
            logger.error(err)
            ResponseHelper.setFailureResponse(response,err);
        }
        return response;
    }

    @Post()
    public async updatePreferences(
        @QueryParams() userRequest : UserRequest,
        @Body() preferenceRequest: PreferenceRequest
    ):Promise<BaseResponse>{
        const response  = new BaseResponse()
        try{
            await Validator.validatePreferenceRequest(preferenceRequest)
            await preferenceService.createPreference(userRequest.userId,preferenceRequest)
            ResponseHelper.setSuccessResponse(response);
        }catch(err:any){
            logger.error(err)
            ResponseHelper.setFailureResponse(response,err);
        }
        return response;
    }

    @Patch('/:Id/cancel')
    public async cancelPreference(
        @Param('Id') id: number
    ):Promise<BaseResponse>{
        const response  = new BaseResponse()
        try{
            await preferenceService.cancelPreference(id)
            ResponseHelper.setSuccessResponse(response);
        }catch(err:any){
            logger.error(err)
            ResponseHelper.setFailureResponse(response,err);
        }
        return response;
    }
}