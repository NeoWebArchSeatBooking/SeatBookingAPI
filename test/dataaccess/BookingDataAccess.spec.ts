import {bookingDataAccess } from "../../src/dataaccess/BookingDataAccess"
import { SeatBookRequest, SeatSearchRequest } from "../../src/models"

jest.mock("../../src/models/database/Booking")
import {BookingModel} from "../../src/models/database/Booking"

describe("validate BookingDAO",()=>{

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
        const resp = await bookingDataAccess.getBookedSeatsByUserAndDate("","")
        expect(resp).toBeTruthy()
    })

    test("validate getBookedSeatsByUserAndDate() for empty",async ()=>{
        BookingModel.findAll = jest.fn().mockImplementation(()=>{
            return Promise.resolve([])
        })
        const resp = await bookingDataAccess.getBookedSeatsByUserAndDate("","")
        expect(resp).toBeFalsy()
    })

    test("validate updateSeat()",async ()=>{
        try{
            BookingModel.create = jest.fn().mockImplementation(()=>{
                return Promise.resolve({})
            })
            await bookingDataAccess.updateSeat(new SeatBookRequest())
        }catch(err){
            expect(err).toBeFalsy()
        }
    })

    test("validate failure updateSeat()",async ()=>{
        try{
            BookingModel.create = jest.fn().mockImplementation(()=>{
                return Promise.reject({})
            })
            await bookingDataAccess.updateSeat(new SeatBookRequest())
        }catch(err){
            expect(err).toBeTruthy
        }
    })

})