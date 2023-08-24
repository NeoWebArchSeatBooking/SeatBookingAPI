export module Constants{
    export const VALID_SEAT_STATUS = ['active','cancel','inactive']
    
    export const SEAT_STATUS_CDE_ACTIVE = 'A'
    export const SEAT_STATUS_CDE_CANCEL = 'C'
    export const SEAT_STATUS_CDE_INACTIVE = 'I'
    export const SEAT_STATUS_CDE_UNKNOWN = 'U'

    export const SEAT_STATUS_TXT_CODE_MAP = new Map(Object.entries({
       "active": 'A' ,
       "cancelled": 'C',
       "unknown": 'U'
    }))

    export const SEAT_STATUS_CODE_TXT_MAP = new Map(Object.entries({
        'A': "active",
        'C': "cancelled",
        'U': "unknown"
    }))
}