
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
}