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

describe("BookingRouter",()=>{

    const path = "/v1/booking/seats"
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

    describe("Get Booked Seats",()=>{
        
        test("should return 200",async ()=>{
            const resp = await supertest(server).get(path).set({'test':'test'}).expect(200)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body.items).toBeDefined()
            expect(resp.body.items.length).toBeGreaterThan(0)
        })

        test("should return 400",async ()=>{
            const resp = await supertest(server).get(path).set({'test1':'test'}).expect(400)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta).toBeDefined()
            expect(resp.body._meta.status).toEqual(400)
        })

        test("should return 500",async ()=>{
            const resp = await supertest(server).get(path).set({'authorization':'bearer test'}).expect(500)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta).toBeDefined()
            expect(resp.body._meta.status).toEqual(500)
        })
        
    })    

    describe("Get Booked Seats for admin",()=>{
    
        test("should return 200",async ()=>{
            const resp = await supertest(server).get(`${path}?role=admin&viewRole=admin&locationId=TCO&blockId=SDB1fromDate=01-01-2023&toDate=30-08-2023`).set({'test':'test'}).expect(200)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta).toBeDefined()
            expect(resp.body._meta.status).toEqual(200)
            expect(resp.body.items).toBeDefined()
        })

        test("should return 400 validation fail",async ()=>{
            const resp = await supertest(server).get(`${path}?role=admin&viewRole=admin&locationId=TCO&blockId=SDB1&fromDate=''`).set({'test':'test'}).expect(400)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta).toBeDefined()
            expect(resp.body._meta.status).toEqual(400)
        })

                
    })

    describe("Book a Seat",()=>{
        
        test("should return 200",async ()=>{
            const resp = await supertest(server).post(path).send({locationId:'TCO',blockId:'SDB2',floorId:'F1',seatId:'A101',date:'12-12-2023'}).set({'test':'test'}).expect(200)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta).toBeDefined()
            expect(resp.body._meta.status).toEqual(200)
        })

        test("should return 409",async ()=>{
            const resp = await supertest(server).post(path).send({locationId:'TCO',blockId:'SDB2',floorId:'',seatId:'A101',date:'01-08-2023'}).set({'test':'test'}).expect(409)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta.status).toEqual(409)
        })

        test("should return 500",async ()=>{
            const resp = await supertest(server).post(path).send({}).set({'authorization':'bearer test'}).expect(500)
            expect(resp).toBeDefined()
            expect(resp.body).toBeDefined()
            expect(resp.body._meta.status).toEqual(500)
        })
        
    })

    describe("cancel booked seat",()=>{
        
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