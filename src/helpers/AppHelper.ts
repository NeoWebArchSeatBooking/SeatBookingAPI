import {Constants} from "./Constants"

const FORMATS = {
    DDMMYYYY : new RegExp(/^\d{2}-\d{2}-\d{4}$/),
    YYYYMMDD: new RegExp(/^\d{4}-\d{2}-\d{2}$/)
}


export class AppHelper{

    public static reformateDate(date: string){
        let returnVal = ""
        if(FORMATS.DDMMYYYY.test(date) || FORMATS.YYYYMMDD.test(date)){
            returnVal = AppHelper.reverseFormat(date);
        }
        return returnVal;
    }

    private static reverseFormat(sqlDate: string) {
        const items = sqlDate.split("-");
        return `${items[2]}-${items[1]}-${items[0]}`;
    }

    public static getStatusCode(statusTxt: string){
        if(Constants.SEAT_STATUS_TXT_CODE_MAP.has(statusTxt)){
            return Constants.SEAT_STATUS_TXT_CODE_MAP.get(statusTxt)
        }else{
            return Constants.SEAT_STATUS_TXT_CODE_MAP.get('unknown')
        }
    }

    public static getStatusTxt(statusCde: string): string{
        return Constants.SEAT_STATUS_CODE_TXT_MAP.get(statusCde) ?? 
            "unknown"
    }

    public static isGreaterThanCurrentDate(date: Date, days: number){
        date.setHours(0,0,0,0)
        const currentDate = new Date()
        currentDate.setHours(0,0,0,0)
        currentDate.setDate(currentDate.getDate()+days)
        return date >= currentDate
    }

}