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

describe("InfraRouter",()=>{

    const path = "/v1/facilities"
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

    describe("Get Facilities",()=>{
        
        test("should return 200",async ()=>{
            const resp = await supertest(server).get(path).set({'test':'test'}).expect(200)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body.infras).toBeDefined()
            expect(resp.body.infras.length).toBeGreaterThan(0)
        })

        test("should return 400",async ()=>{
            const resp = await supertest(server).get(path).set({'test1':'test'}).expect(400)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body.infras).toBeUndefined()
        })

        test("should return 500",async ()=>{
            const resp = await supertest(server).get(path).set({'authorization':'bearer test'}).expect(500)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body.preferences).toBeUndefined()
        })
        
    })    

    describe("Get Available Seats",()=>{
    
        test("should return 200",async ()=>{
            const resp = await supertest(server).get(`${path}/seats?locationId=TCO&blockId=SDB1&date=12-12-2033`).set({'test':'test'}).expect(200)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta).toBeDefined()
            expect(resp.body._meta.status).toEqual(200)
            expect(resp.body.seats).toBeDefined()
        })

        test("should return 404 location not found",async ()=>{
            const resp = await supertest(server).get(`${path}/seats?locationId=tco&blockId=b1&date=12-12-2033`).set({'test':'test'}).expect(404)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta).toBeDefined()
            expect(resp.body._meta.status).toEqual(404)
            expect(resp.body._meta.message).toEqual('location not found')
        })

        test("should return 404 block not found",async ()=>{
            const resp = await supertest(server).get(`${path}/seats?locationId=TCO&blockId=b1&date=12-12-2033`).set({'test':'test'}).expect(404)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta).toBeDefined()
            expect(resp.body._meta.status).toEqual(404)
            expect(resp.body._meta.message).toEqual('block not found')
        })

        test("should return 400",async ()=>{
            const resp = await supertest(server).get(`${path}/seats`).set({'test1':'test'}).expect(400)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta.status).toEqual(400)
        })

        test("should return 500",async ()=>{
            const resp = await supertest(server).get(`${path}/seats`).set({'authorization':'bearer test'}).expect(500)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta.status).toEqual(500)
        })
        
    })

})