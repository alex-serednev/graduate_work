import {expect, jest, test} from '@jest/globals';
import superagent from 'superagent';

import * as data from './expected_api_response';
import * as funct from './functions';

describe('create api tests', function() {
    test('checks 200 response', async () => {
        const res = await superagent.get('https://reqres.in/api/users/2');
        expect(res.status).toBe(200);
    })

    test('checks content of GET response', async () => {
        const get_user_data = await superagent.get('https://reqres.in/api/users/3');
        expect(get_user_data.status).toBe(200);

        expect(get_user_data.body).toEqual(data.user_3);
        expect(get_user_data.body.data).toMatchObject(data.user_3.data);
        expect(get_user_data.body.support).toMatchObject(data.user_3.support);
    })

    // test('404 error simplified', async () => {
    //     const get_user_data = await superagent.get('https://reqres.in/api/unknown/23');
    //     expect(get_user_data.status).toBe(200);
    // })

    test('performs POST request', async () => {
        const new_user = await funct
            .perform_post_request('https://reqres.in/api/users', {"name": "test", "job": "engineer"});
        expect(new_user.status).toBe(201);
        expect(new_user.body).toBeDefined();
            console.log(`Test 4. \nResponse status: ${new_user.status}\nPost request was sent to /api/users`);
            console.log(`Response body:\n${JSON.stringify(new_user.body)}`)
        expect(new_user.body.name).toEqual("test"); // но вообще здесь должно быть ...body.name).toEqual(expectedObjForPost.name)
        expect(new_user.body.job).toEqual("engineer"); // а здесь должно быть ...body.job).toEqual(expectedObjForPost.job)
    })                                                 // хотя я вообще разбил бы вторую переменную и вытащил из неё name и job

    test('catches error', async () => {
        const response = await funct.perform_get_request('https://reqres.in/api/unknown/23');
        expect(response.status).toBe(404);
        console.log(`Test 4. \nResponse status: ${response.status}\nGet request was sent to /api/unknown/23`);
    })

    afterAll(() => {
        let a = new Date();
        console.log(`The test was executed on ${a}`);
    })
});