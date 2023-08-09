export class NotFoundError extends Error{
    message: string
    code: number = 404
    constructor(message: string){
        super()
        this.message = message
    }
}



