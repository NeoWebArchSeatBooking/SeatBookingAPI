import { Model, ValidationError, ValidationErrorItem } from "sequelize"
import {bookingDataAccess } from "../../src/dataaccess/BookingDataAccess"
import { SeatBookRequest, SeatSearchRequest } from "../../src/models"

jest.mock("../../src/models/database/Booking")
import {BookingModel} from "../../src/models/database/Booking"
import { AppError } from "../../src/errors/AppErrors"

describe("validate BookingDAO",()=>{

    beforeEach(()=>{
    })

    test("validate user booked seats",async ()=>{
        BookingModel.findAndCountAll = jest.fn().mockImplementation(()=>{
            return Promise.resolve({rows:[{
                id: 2,
                bookingUserId: "testuser",
                bookingDate: "13-08-2023",
                bookingStatus: "A",
                bookingLocId: "L1",
                bookingBlockId: "B1",
                bookingFloorId: "F1",
                bookingSeatId: "A102",
                bookingUpdateTime: "",
              }],count:1})
        })
        const resp = await bookingDataAccess.getBookedSeatsByUser("dummy")
        expect(resp).toBeTruthy()
        expect(resp.bookingSeats.length).toEqual(1)
        expect(resp.bookingSeats[0].bookingSeatId).toEqual("A102")
    })

    

    test("validate getBookedSeats()",async ()=>{
        BookingModel.findAll = jest.fn().mockImplementation(()=>{
            return Promise.resolve([{
                id: 1,
                bookingUserId: "testuser",
                bookingDate: "11-08-2023",
                bookingStatus: "A",
                bookingLocId: "L1",
                bookingBlockId: "B1",
                bookingFloorId: "F1",
                bookingSeatId: "A102",
                bookingUpdateTime: "",
              },
              {
                id: 2,
                bookingUserId: "testuser",
                bookingDate: "13-08-2023",
                bookingStatus: "A",
                bookingLocId: "L1",
                bookingBlockId: "B1",
                bookingFloorId: "F1",
                bookingSeatId: "A102",
                bookingUpdateTime: "",
              },{
                id: 3,
                bookingUserId: "testuser",
                bookingDate: "12-08-2023",
                bookingStatus: "A",
                bookingLocId: "L1",
                bookingBlockId: "B1",
                bookingFloorId: "F1",
                bookingSeatId: "A102",
                bookingUpdateTime: "",
              }])
        })
        const req = new SeatSearchRequest()
        req.blockId = 'B1'
        req.locationId = 'L1'
        req.floorId = 'F1'
        req.date = '12-08-2023'
        const resp = await bookingDataAccess.getBookedSeatsByFacilities(new SeatSearchRequest())
        expect(resp).toBeTruthy()
        expect(resp.length).toEqual(3)
        expect(resp[0]).toEqual("A102")
    })

    test("validate getBookedSeats() for empty",async ()=>{
        BookingModel.findAll = jest.fn().mockImplementation(()=>{
            return Promise.resolve([])
        })
        const resp = await bookingDataAccess.getBookedSeatsByFacilities(new SeatSearchRequest())
        expect(resp).toBeTruthy()
        expect(resp.length).toEqual(0)
    })

    test("validate getBookedSeatsByUserAndDate()",async ()=>{
        BookingModel.findAll = jest.fn().mockImplementation(()=>{
            return Promise.resolve([{
                id: 1,
                bookingUserId: "testuser",
                bookingDate: "11-08-2023",
                bookingStatus: "A",
                bookingLocId: "L1",
                bookingBlockId: "B1",
                bookingFloorId: "F1",
                bookingSeatId: "A102",
                bookingUpdateTime: "",
              },
              {
                id: 2,
                bookingUserId: "testuser",
                bookingDate: "13-08-2023",
                bookingStatus: "A",
                bookingLocId: "L1",
                bookingBlockId: "B1",
                bookingFloorId: "F1",
                bookingSeatId: "A102",
                bookingUpdateTime: "",
              },{
                id: 3,
                bookingUserId: "testuser",
                bookingDate: "12-08-2023",
                bookingStatus: "A",
                bookingLocId: "L1",
                bookingBlockId: "B1",
                bookingFloorId: "F1",
                bookingSeatId: "A102",
                bookingUpdateTime: "",
              }])
        })
        const resp = await bookingDataAccess.getBookedSeatsByUserAndDate("","","")
        expect(resp).toBeTruthy()
        expect(resp.length).toEqual(3)
        expect(resp[1].bookingDate).toEqual("13-08-2023")
    })

    test("validate getBookedSeatsByUserAndDate() for empty",async ()=>{
        BookingModel.findAll = jest.fn().mockImplementation(()=>{
            return Promise.resolve([])
        })
        const resp = await bookingDataAccess.getBookedSeatsByUserAndDate("","","")
        expect(resp).toBeTruthy()
        expect(resp.length).toEqual(0)
    })

    test("validate updateSeat()",async ()=>{
        try{
            BookingModel.update = jest.fn().mockImplementation(()=>{
                return Promise.resolve([1])
            })
            const resp = await bookingDataAccess.updateSeatStatusById(1,"C")
            expect(resp).toBeTruthy()
        }catch(err){
            expect(err).toBeFalsy()
        }
    })

    test("validate failure updateSeat()",async ()=>{
        try{
            BookingModel.create = jest.fn().mockImplementation(()=>{
                return Promise.reject({})
            })
            await bookingDataAccess.updateSeatStatusById(1,"C")
        }catch(err){
            expect(err).toBeTruthy
        }
    })

    test("validate failure getBookedSeatById()",async ()=>{
        try{
            BookingModel.findByPk = jest.fn().mockImplementation(()=>{
                return Promise.reject({})
            })
            await bookingDataAccess.getBookedSeatById(1)
        }catch(err){
            expect(err).toBeTruthy
        }
    })

    test("validate valid getBookedSeatById()",async ()=>{
        try{
            BookingModel.findByPk = jest.fn().mockImplementation(()=>{
                return Promise.resolve({})
            })
            await bookingDataAccess.getBookedSeatById(1)
        }catch(err){
            expect(err).toBeFalsy()
        }
    })

    test("validate createBooking()",async ()=>{
        try{
            BookingModel.create = jest.fn().mockImplementation(()=>{
                return Promise.resolve({})
            })
            await bookingDataAccess.createBooking(new SeatBookRequest())
        }catch(err){
            expect(err).toBeFalsy()
        }
    })

    test("invalidate createBooking()",async ()=>{
        try{
            BookingModel.create = jest.fn().mockImplementation(()=>{
                const item = new ValidationErrorItem("message: string",
                     "validation error" , 
                     "string", 
                     "value: string", 
                     "" as any as Model, 
                     "validatorKey: string", 
                     "fnName: string", 
                     [])
                return Promise.reject(new ValidationError('validation error',[item]))
            })
            await bookingDataAccess.createBooking(new SeatBookRequest())
        }catch(err:any){
            expect(err).toBeTruthy()
            expect(err).toBeInstanceOf(AppError)
            expect(err.message).toEqual("message: string")
        }
    })
})