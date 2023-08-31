import {BookingQueryHelper} from "../../src/helpers"

describe("BookingQueryHelper",()=>{

    describe("validate andLocationId()",()=>{
        test("with location Id",()=>{
            const cluase = BookingQueryHelper.getBuilder()
            .andLocationId('loc')
            .getWhere()

            expect(cluase).toBeTruthy()
            expect(cluase.bookingLocId).toBeDefined()
            expect(cluase.bookingLocId).toEqual('loc')
        })

        test("without location Id",()=>{
            const id=undefined;
            const cluase = BookingQueryHelper.getBuilder()
            .andLocationId(id)
            .getWhere()

            expect(cluase).toBeTruthy()
            expect(cluase.bookingLocId).toBeUndefined()
        })
    })  

    describe("validate andUserId()",()=>{
        test("with user Id",()=>{
            const cluase = BookingQueryHelper.getBuilder()
            .andUserId('test')
            .getWhere()

            expect(cluase).toBeTruthy()
            expect(cluase.bookingUserId).toBeDefined()
            expect(cluase.bookingUserId).toEqual('test')
        })

        test("without user Id",()=>{
            const id=undefined;
            const cluase = BookingQueryHelper.getBuilder()
            .andUserId(id)
            .getWhere()

            expect(cluase).toBeTruthy()
            expect(cluase.bookingUserId).toBeUndefined()
        })
    }) 

    describe("validate andDateisEq()",()=>{
        test("with date",()=>{
            const cluase = BookingQueryHelper.getBuilder()
            .andDateisEq('2023-12-12')
            .getWhere()

            expect(cluase).toBeTruthy()
            expect(cluase.bookingDate).toBeDefined()
            expect(cluase.bookingDate).toEqual('2023-12-12')
        })

        test("without date",()=>{
            const date=undefined;
            const cluase = BookingQueryHelper.getBuilder()
            .andDateisEq(date)
            .getWhere()

            expect(cluase).toBeTruthy()
            expect(cluase.bookingDate).toBeUndefined()
        })
    }) 

    describe("validate andFloorId()",()=>{
        test("with floor Id",()=>{
            const cluase = BookingQueryHelper.getBuilder()
            .andFloorId('F1')
            .getWhere()

            expect(cluase).toBeTruthy()
            expect(cluase.bookingFloorId).toBeDefined()
            expect(cluase.bookingFloorId).toEqual('F1')
        })

        test("without floor Id",()=>{
            const id=undefined;
            const cluase = BookingQueryHelper.getBuilder()
            .andFloorId(id)
            .getWhere()

            expect(cluase).toBeTruthy()
            expect(cluase.bookingFloorId).toBeUndefined()
        })
    }) 

    describe("validate andBlockId()",()=>{
        test("with block Id",()=>{
            const cluase = BookingQueryHelper.getBuilder()
            .andBlockId('loc')
            .getWhere()

            expect(cluase).toBeTruthy()
            expect(cluase.bookingBlockId).toBeDefined()
            expect(cluase.bookingBlockId).toEqual('loc')
        })

        test("without block Id",()=>{
            const id=undefined;
            const cluase = BookingQueryHelper.getBuilder()
            .andBlockId(id)
            .getWhere()

            expect(cluase).toBeTruthy()
            expect(cluase.bookingBlockId).toBeUndefined()
        })
    }) 

    describe("validate andDateBetween()",()=>{
        test("with from & to date",()=>{
            const cluase = BookingQueryHelper.getBuilder()
            .andDateBetween('2023-01-01','2023-01-01')
            .getWhere()

            expect(cluase).toBeTruthy()
            expect(cluase.bookingDate).toBeDefined()
        })

        test("with from & w/o to date",()=>{
            const cluase = BookingQueryHelper.getBuilder()
            .andDateBetween('2023-01-01')
            .getWhere()

            expect(cluase).toBeTruthy()
            expect(cluase.bookingDate).toBeUndefined()
        })

        test("without from & with to date",()=>{
            const date=undefined;
            const cluase = BookingQueryHelper.getBuilder()
            .andDateBetween(date,'2023-01-01')
            .getWhere()

            expect(cluase).toBeTruthy()
            expect(cluase.bookingDate).toBeUndefined()
        })

        test("without from & to date",()=>{
            const date=undefined;
            const cluase = BookingQueryHelper.getBuilder()
            .andDateBetween(date,date)
            .getWhere()

            expect(cluase).toBeTruthy()
            expect(cluase.bookingDate).toBeUndefined()
        })
    }) 
})