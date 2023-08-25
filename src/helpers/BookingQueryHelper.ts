export class BookingQueryHelper{

    private whereClause: any
    private constructor(){
        this.whereClause = {}
    }

    public static getBuilder() {
        return new BookingQueryHelper()
    }

    public getWhere(){
        return this.whereClause
    }

    public andLocationId(locationId: string){
        if(locationId){
            this.whereClause.bookingLocId = locationId
        }
        return this
    }

    public andBlockId(blockId: string){
        if(blockId){
            this.whereClause.bookingBlockId = blockId
        }
        return this
    }

    public andFloorId(floorId: string){
        if(floorId){
            this.whereClause.bookingFloorId = floorId
        }
        return this
    }

    public andDateisEq(date: string){
        if(date){
            this.whereClause.bookingDate = date
        }
        return this
    }

}