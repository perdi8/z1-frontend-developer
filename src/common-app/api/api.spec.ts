/* eslint-disable jest/no-conditional-expect */

import Axios from 'axios';
import {service} from './api';

describe('api spec',() => {
    
    it ('Should return Approved or To much .... it resolves the request successfully', async () => {
        //Arrange
        const status = [{outcome:"Too Much Glare"}]
        const value = "foto";
        // stub 
        const getStub = jest.spyOn(Axios, 'post'). mockResolvedValue({data:status});
        //Act
        service(value);
        const result = await service(value);

        //Assert
        expect(getStub).toHaveBeenCalledWith("https://front-exercise.z1.digital/evaluations", {"imgSrc": "foto"})
        expect(result).toEqual(status[1])
    })

    it ('Should throw  an error with "To much front-exercise.z1.digital API calls!" when it rejects the rquest with 403 status code', async () => {
        //Arrange
        // stub 
        const getStub = jest.spyOn(Axios, 'post'). mockRejectedValue({
            response: {
                status: 403
            }});
        //Act
            try{
                const result = await service("foto");
            } catch (error) {
               expect(getStub).toHaveBeenCalledWith("https://front-exercise.z1.digital/evaluations", {"imgSrc": "foto"})
               expect(error).toEqual("Too much front-exercise.z1.digital API calls!")
            }
    })

    it ('Should throw  an error with "To much front-exercise.z1.digital API calls!" when it rejects the rquest with 503 status code', async () => {
        //Arrange
        // stub 
        const getStub = jest.spyOn(Axios, 'post'). mockRejectedValue({
            response: {
                status: 503
            }});
        //Act
            try{
                const result = await service("foto");
            } catch (error) {
               expect(getStub).toHaveBeenCalledWith("https://front-exercise.z1.digital/evaluations", {"imgSrc": "foto"})
               expect(error).toEqual("Unavailable service")
            }
    })
})

