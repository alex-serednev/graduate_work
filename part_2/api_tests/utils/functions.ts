import superagent from 'superagent';
import { usernames, jobs, username, job } from './constants';

export async function perform_get_request(url: any): Promise<any> {
    try {
        const user_data = await superagent.get(url);
        return user_data;
    } catch (err: any) {
        // console.log(err.message);
        // throw err;
        return(err)
    }
};

export async function perform_post_request(url: any, body: any): Promise<any> {
    try {
        const response = await superagent
            .post(url)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .send(body);
        return response;
    } catch (err: any) {
        // console.log(err.message);
        // throw err;
        return(err)
    } 
};

export async function perform_patch_request(url: any, body: any): Promise<any> {
    try {
        const response = await superagent
            .patch(url)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .send(body);
        return response;
    } catch (err: any) {
        // console.log(err.message);
        // throw err;
        return(err)
    } 
};

export async function perform_put_request(url: any, body: any): Promise<any> {
    try {
        const response = await superagent
            .put(url)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .send(body);
        return response;
    } catch (err: any) {
        // console.log(err.message);
        // throw err;
        return(err)
    } 
};

export async function perform_delete_request(url: any): Promise<any> {
    try {
        const response = await superagent
            .delete(url)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
        return response;
    } catch (err: any) {
        // console.log(err.message);
        // throw err;
        return(err)
    } 
}

function findRandomNumber(lowerBound: any, upperBound: any): any {
    let initialResult = Math.random() * (upperBound - lowerBound) + lowerBound;
    return (Math.round(initialResult));
};

export async function create_new_user_without_pass() {
    let random_number = function generateRandomNumber() {
        const body = {
            "password": `pass${findRandomNumber(100, 10000)}`
        }
        return body;
    };
};

export async function create_new_user() {
            const body = {
            "email": `mailto${findRandomNumber(100, 100000)}@gmail.com`,
            "password": "userpass"
        }
        return body;
    };


export function getDateTimeOfUpdate(response: any): any {
    const updatedAt = response.updatedAt;
    const updateTime = new Date(updatedAt).getTime();
    const now = new Date().getTime();
    const diff = Math.abs(now - updateTime);
    const oneMinute = 60 * 1000;
    if (diff <= oneMinute) {
        return("Correct");
    } else {
        return("Incorrect");
    }
};