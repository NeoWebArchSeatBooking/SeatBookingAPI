export class BookingDB{
    
    public static getBooking_DBURL(){
        const host = process.env.DB_HOST || "127.0.0.1";
        const user = process.env.DB_USER || "sbuser";
        const pwd = process.env.DB_PASSWORD || "seatbookingpwd";
        const scheme = process.env.DB_SCHEME || "seatbooking";
        return `mysql://${user}:${pwd}@${host}:3306/${scheme}`
    }

}