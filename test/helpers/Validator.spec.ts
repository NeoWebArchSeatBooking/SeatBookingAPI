import { Validator } from "../../src/helpers"
import { CancelRequest, SeatSearchRequest, UserSeatRequest } from "../../src/models"

describe("Validator",()=>{

    describe("validateUserSeatRequest",()=>{
        
        test("invalid user seat request",async ()=>{
            try{
                const request = new UserSeatRequest()
                await Validator.validateUserSeatRequest(request)
            }catch(err:any){
                expect(err).toBeTruthy()
                expect(err.message).toBeDefined()
            }
        })

        test("valid user seat request",async ()=>{
            try{
                const request = new UserSeatRequest()
                request.userId = 'sgd.daran@gmail'
                request.role = 'admin'
                request.viewRole = 'admin'
                request.fromDate = '12-12-2023'
                request.toDate = '13-12-2023'
                request.offset = 0
                await Validator.validateUserSeatRequest(request)
            }catch(err:any){
                expect(err).toBeFalsy()
            }
        })
    })

    describe("validateSeatSearchRequest",()=>{
        
        test("invalid user seat search request",async ()=>{
            try{
                const request = new SeatSearchRequest()
                await Validator.validateSeatSearchRequest(request)
            }catch(err:any){
                expect(err).toBeTruthy()
                expect(err.message).toBeDefined()
            }
        })

        test("valid user seat search request",async ()=>{
            try{
                const request = new SeatSearchRequest()
                request.userId = 'sgd.daran@gmail'
                request.role = 'admin'
                request.blockId = 'admin'
                request.locationId = 'admin'
                request.date = '12-12-2023'
                request.offset = 0
                await Validator.validateSeatSearchRequest(request)
            }catch(err:any){
                expect(err).toBeFalsy()
            }
        })
    })

    describe("validateCancelRequest",()=>{
        test("invalid user seat cancel request",async ()=>{
            try{
                const request = new CancelRequest()
                await Validator.validateCancelRequest(request)
            }catch(err:any){
                expect(err).toBeTruthy()
                expect(err.message).toBeDefined()
            }
        })

        test("valid user seat cancel request",async ()=>{
            try{
                const request = new CancelRequest()
                request.userId = 'sgd.daran@gmail'
                request.role = 'admin'
                request.seatId = 1
                await Validator.validateCancelRequest(request)
            }catch(err:any){
                expect(err).toBeFalsy()
            }
        })
    })
})