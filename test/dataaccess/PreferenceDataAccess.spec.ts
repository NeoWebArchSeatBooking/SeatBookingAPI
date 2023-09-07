import { Model, ValidationError, ValidationErrorItem } from "sequelize";
import { preferenceDataAccess } from "../../src/dataaccess/PreferenceDataAccess"

jest.mock("../../src/models/database/Preference")
import {PreferenceModel} from "../../src/models/database/Preference"

describe("PreferenceDataAccess",()=>{
    
    afterAll(() => {
       jest.clearAllMocks();
    });

    describe("validate getPreferences()",()=>{

        test("validate valid fetch of preferences",async ()=>{

            PreferenceModel.findAll = jest.fn().mockImplementation(()=>{
                return Promise.resolve([])
            }) 
            const preferences = await preferenceDataAccess.getPreferences('test')
            expect(preferences).toBeTruthy()
            expect(preferences.length).toEqual(0)
        })

        test("validate valid fetch of preferences",async ()=>{
            PreferenceModel.findAll = jest.fn().mockImplementation(()=>{
                return Promise.resolve([
                    {
                        id:1,
                        userId:'test',
                        preferenceType:'locationId',
                        preferenceValue:'TCO',
                        preferenceActive:'Y',
                    }

                ])
            }) 
            const preferences = await preferenceDataAccess.getPreferences('test')
            expect(preferences).toBeTruthy()
            expect(preferences.length).toEqual(1)
        })

    })

    describe("validate createPreference()",()=>{

        test("validate valid creation of preference",async ()=>{
            try{
                PreferenceModel.create = jest.fn().mockImplementation(()=>{
                    return Promise.resolve({})
                }) 
                await preferenceDataAccess.createPreference('test',{key:'',value:''})
            }catch(err:any){
                expect(err).toBeFalsy()
            }
        })

        test("validate seq error case of creation of preferences",async ()=>{
            try{
                PreferenceModel.create = jest.fn().mockImplementation(()=>{
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
                await preferenceDataAccess.createPreference('test',{key:'',value:''})
            }catch(err:any){
                expect(err).toBeTruthy()
                expect(err.message).toEqual("message: string")
            }
        })

        test("validate sys error case of creation of preferences",async ()=>{
            try{
                PreferenceModel.create = jest.fn().mockImplementation(()=>{
                return Promise.reject(new Error('validation error'))
                }) 
                await preferenceDataAccess.createPreference('test',{key:'',value:''})
            }catch(err:any){
                expect(err).toBeTruthy()
                expect(err.message).toEqual("validation error")
            }
        })

    })

    describe("validate updatePreference()",()=>{

        test("validate valid update of preferences",async ()=>{

            PreferenceModel.update = jest.fn().mockImplementation(()=>{
                return Promise.resolve([1])
            }) 
            const preferences = await preferenceDataAccess.updatePreference(1,'C')
            expect(preferences).toBeTruthy()
        })
        
        test("validate invalid update of preferences",async ()=>{

            PreferenceModel.update = jest.fn().mockImplementation(()=>{
                return Promise.resolve([0])
            }) 
            const preferences = await preferenceDataAccess.updatePreference(1,'C')
            expect(preferences).toBeFalsy()
        })
        
    })
})  