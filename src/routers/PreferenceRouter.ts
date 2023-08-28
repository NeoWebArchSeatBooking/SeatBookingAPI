import { Body, Controller, Get, Param, Patch, Post, QueryParams } from "routing-controllers";
import { BaseResponse, UserRequest,PreferenceRequest,PreferenceResponse } from "../models";
import { ResponseHelper, logger } from "../helpers";
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
        @QueryParams() userRequest : UserRequest,
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