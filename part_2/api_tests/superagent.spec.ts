import {expect, jest, test} from '@jest/globals';
import superagent from 'superagent';

import * as data from './utils/constants';
import * as funct from './utils/functions';

describe('Check GET /api/users/{id} request', () => {
    test('OK checks 200 response', async () => {
        const response = await funct.perform_get_request('https://reqres.in/api/users/2');
        expect(response.status).toBe(200);
    })

    test('checks content of GET response', async () => {
        const get_user_data = await funct.perform_get_request('https://reqres.in/api/users/3');
        expect(get_user_data.status).toBe(200);

        expect(get_user_data.body).toEqual(data.user_3);
        expect(get_user_data.body.data).toMatchObject(data.user_3.data);
        expect(get_user_data.body.support).toMatchObject(data.user_3.support);
    })
    
    test('validates date of creation', async () => {
        const put_response = await funct.perform_put_request('https://reqres.in/api/users/2', {})
        .then(res => (res.body));
        const checkIfDateIsCorrect = funct.getDateTimeOfUpdate(put_response);
        expect(checkIfDateIsCorrect).toEqual("Correct");
    })

    test('should catch error', async () => {
        const response = await funct.perform_get_request('https://reqres.in/api/unknown/23');
        expect(response.status).toBe(404);
        console.log(`Test 4. \nResponse status: ${response.status}\nGet request was sent to /api/unknown/23`);
    });

describe('Check GET /api/unknown/{id} request', () => {
      
    test('should return status 200', async () => {
        const res = await funct.perform_get_request('https://reqres.in/api/unknown/2')
        expect(res.status).toBe(200);
    });

    test('should return correct data', async () => {
        const res = await funct.perform_get_request('https://reqres.in/api/unknown/2')
        expect(res.body.data).toEqual(data.getUnknownUserResponse.data);
    });
      
    test('should return correct support information', async () => {
        const res = await funct.perform_get_request('https://reqres.in/api/unknown/2')
        expect(res.body.support).toEqual(data.getUnknownUserResponse.support);
    });

    test('should return correct support information', async () => {
        const res = await funct.perform_get_request('https://reqres.in/api/unknown/23')
        expect(res.status).toBe(404);
    });
});

describe('Check Patch request /api/users/2', () => {
    
    test('should return status 200', async () => {
        const res = await funct.perform_patch_request('https://reqres.in/api/users/5', data.userDataForPatchRequest);
        expect(res.status).toBe(200);
    });
    
    test('should return correct data', async () => {
        const res = await funct.perform_patch_request('https://reqres.in/api/users/5', data.userDataForPatchRequest);
        expect(res.body.name).toEqual(data.expectedPatchRespose.name);
        expect(res.body.job).toEqual(data.expectedPatchRespose.job);
    });
    
    test('should return updatedAt field in response', async () => {
        const res = await funct.perform_patch_request('https://reqres.in/api/users/5', data.userDataForPatchRequest);
        expect(res.body).toHaveProperty('updatedAt');
    })
});

describe('Check Delete Request /api/users/2', () => {

    test('should return status 204', async () => {
        const res = await funct.perform_delete_request('https://reqres.in/api/users/5');
        expect(res.status).toBe(204);
    });
    
    test('should return no content', async () => {
        const res = await funct.perform_delete_request('https://reqres.in/api/users/5');
        expect(res.body).toEqual({});
    })
});

describe('Check POST Reqest /api/users/2', () => {
    test('should return status 201', async () => {
        const res = await funct.perform_post_request('https://reqres.in/api/users/2', data.userDataForPostRequest);
        expect(res.status).toBe(201);
    });
    
    test('should return correct data', async () => {
        const res = await funct.perform_post_request('https://reqres.in/api/users/2', data.userDataForPostRequest);
        expect(res.body.email).toBe(data.userDataForPostRequest.email);
        expect(res.body.password).toBe(data.userDataForPostRequest.password);
    });
    
    test('should return id and createdAt fields in response', async () => {
        const res = await funct.perform_post_request('https://reqres.in/api/users/2', data.userDataForPostRequest);
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('createdAt');
    })
});

describe('Check POST Request /api/register', () => {
    test('should return status 400', async () => {
        const userObj = funct.create_new_user_without_pass();
        const res = await funct.perform_post_request('https://reqres.in/api/register', funct.create_new_user_without_pass());
        expect(res.status).toBe(400);
    });
    
    test('should return error message "Missing email or username"', async () => {
        const res = await funct.perform_post_request('https://reqres.in/api/register', funct.create_new_user_without_pass());
        // console.log(res.body);
        // console.log(res.response)
        expect(res.response._body.error).toBe('Missing email or username');
    })
});

describe('Test Post Request https://reqres.in/api/login', () => { 
    test('should return status 200', async () => {
        const res = await funct.perform_post_request('https://reqres.in/api/login', data.dataForSuccessfulLogin)
        expect(res.status).toBe(200);
    });
    
    test('should check that response has token and id', async () => {
        const res = await funct.perform_post_request('https://reqres.in/api/login', data.dataForSuccessfulLogin)
        // console.log(res);
        expect(res.body).toHaveProperty('token');
    });

    test('should respond that user not found', async () => {
        const res = await funct.perform_post_request('https://reqres.in/api/login', data.dataForUnsuccessfulLogin)
        expect(res.response._body.error).toBe('user not found');
    });
});

    afterAll(() => {
        let a = new Date();
        console.log(`The test was executed on ${a}`);
    })
});