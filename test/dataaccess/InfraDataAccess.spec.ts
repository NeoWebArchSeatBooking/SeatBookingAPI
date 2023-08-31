import { MongoServerError } from "mongodb"
import { infraDataAccess } from "../../src/dataaccess/InfraDataAccess"

jest.mock("../../src/dataaccess/providers/InfraProvider")
import {infraProvider} from "../../src/dataaccess/providers/InfraProvider"

describe("InfraDataAccess",()=>{
    afterAll(() => {
        jest.clearAllMocks();
      });

    describe("validate getInfra()",()=>{

        test("validate valid fetch of infras from provider",async ()=>{
            try{
                const infras = await infraDataAccess.getInfra()
                expect(infras).toBeTruthy()
                expect(infras.length).toEqual(2)
            }catch(err){
                expect(err).toBeFalsy()
            }
        })

        test("validate valid fetch of infras from cache",async ()=>{
            try{
                const infras = await infraDataAccess.getInfra()
                expect(infras).toBeTruthy()
                expect(infras.length).toEqual(2)
            }catch(err){
                expect(err).toBeFalsy()
            }
        })

        test("validate db error case for infras",async ()=>{
            try{
                infraProvider.getInfra = jest
                .fn()
                .mockImplementation(() => {
                  return Promise.reject(new MongoServerError({errmsg:'mongo connection error'}));
                });
                const infras = await infraDataAccess.getInfra()
                expect(infras).toBeFalsy()
            }catch(err){
                expect(err).toBeTruthy()
            }
        })

        test("validate sys error case for infras",async ()=>{
            try{
                infraProvider.getInfra = jest.fn().mockImplementation(()=>{
                    return Promise.reject(new Error('no monogd'))
                })
                const infras = await infraDataAccess.getInfra()
                expect(infras).toBeFalsy()
            }catch(err){
               expect(err).toBeTruthy()
            }
        })

    })

    describe("validate getSeatsByFields()",()=>{

        test("validate valid fetch of seats from provider",async ()=>{
            try{
                const seats = await infraDataAccess.getSeatsByFields('TCO','SDB1')
                expect(seats).toBeTruthy()
                expect(seats.length).toEqual(2)
                expect(seats[0].seats).toBeTruthy()
                expect(seats[0].seats.length).toBeGreaterThan(0)
            }catch(err){
                expect(err).toBeFalsy()
            }
        })

        test("validate valid fetch of seats from cache",async ()=>{
            try{
                const seats = await infraDataAccess.getSeatsByFields('TCO','SDB1','F1')
                expect(seats).toBeTruthy()
                expect(seats.length).toEqual(1)
                expect(seats[0].seats).toBeTruthy()
                expect(seats[0].seats.length).toBeGreaterThan(0)
            }catch(err){
                expect(err).toBeFalsy()
            }
        })

        test("validate db error case for seats",async ()=>{
            try{
                infraProvider.getSeats = jest.fn().mockImplementation(()=>{
                    return Promise.reject(new MongoServerError({errmsg:'mongo connection error'}))
                })
                const seats = await infraDataAccess.getSeatsByFields('TCO','SDB1','F1')
                expect(seats).toBeFalsy()
            }catch(err){
                expect(err).toBeTruthy()
            }
        })

        test("validate sys error case for seats",async ()=>{
            try{
                infraProvider.getSeats = jest.fn().mockImplementation(()=>{
                    return Promise.reject(new Error('no monogd'))
                })
                const seats = await infraDataAccess.getSeatsByFields('TCO','SDB1','F1')
                expect(seats).toBeFalsy()
            }catch(err){
                expect(err).toBeTruthy()
            }
        })

    })

})