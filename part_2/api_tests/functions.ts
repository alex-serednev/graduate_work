import superagent from 'superagent';

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
        console.log(response);
    } catch (err: any) {
        console.log(err.message);
        throw err;
    } 
};