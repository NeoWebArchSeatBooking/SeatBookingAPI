import supertest from "supertest";
import { bookingDataAccess } from "../../src/dataaccess/BookingDataAccess";
import { preferenceDataAccess } from "../../src/dataaccess/PreferenceDataAccess";
import { dbProvider } from "../../src/dataaccess/providers/DBProvider";
import { infraProvider } from "../../src/dataaccess/providers/InfraProvider";
import { server } from "../../src/index";

jest.mock("../../src/dataaccess/BookingDataAccess")
jest.mock("../../src/dataaccess/PreferenceDataAccess")
jest.mock("../../src/dataaccess/providers/DBProvider")
jest.mock("../../src/dataaccess/providers/InfraProvider")

describe("PreferenceRouter",()=>{

    const path = "/v1/preference"
    beforeAll(()=>{
        preferenceDataAccess
        dbProvider
        infraProvider
        bookingDataAccess
    })

    afterAll(()=>{
        server.close()
        jest.clearAllMocks()
    })

    describe("Get Preferences",()=>{
        
        test("should return 200",async ()=>{
            const resp = await supertest(server).get(path).set({'test':'test'}).expect(200)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body.preferences).toBeDefined()
            expect(resp.body.preferences.length).toEqual(0)
        })

        test("should return 400",async ()=>{
            const resp = await supertest(server).get(path).set({'test1':'test'}).expect(400)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body.preferences).toBeUndefined()
        })

        test("should return 500",async ()=>{
            const resp = await supertest(server).get(path).set({'authorization':'bearer test'}).expect(500)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body.preferences).toBeUndefined()
        })
        
    })    

    describe("Update Preferences",()=>{
        
        test("should return 200",async ()=>{
            const resp = await supertest(server).post(path).send({key:'locId',value:'TCO'}).set({'test':'test'}).expect(200)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta).toBeDefined()
            expect(resp.body._meta.status).toEqual(200)
        })

        test("should return 400",async ()=>{
            const resp = await supertest(server).post(path).send({key:'locId',value:''}).set({'test':'test'}).expect(400)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta.status).toEqual(400)
        })

        test("should return 500",async ()=>{
            const resp = await supertest(server).post(path).send({key:'locId',value:'TCO'}).set({'authorization':'bearer test'}).expect(500)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta.status).toEqual(500)
        })
        
    })

    describe("cancel Preferences",()=>{
        
        test("should return 200",async ()=>{
            const resp = await supertest(server).patch(`${path}/1/cancel`).set({'test':'test'}).expect(200)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta).toBeDefined()
            expect(resp.body._meta.status).toEqual(200)
        })

        test("should return 400",async ()=>{
            const resp = await supertest(server).patch(`${path}/1/cancel`).set({'test1':'test'}).expect(400)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta.status).toEqual(400)
        })

        test("should return 500",async ()=>{
            const resp = await supertest(server).patch(`${path}/1/cancel`).set({'authorization':'bearer test'}).expect(500)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta.status).toEqual(500)
        })
        
    })

})