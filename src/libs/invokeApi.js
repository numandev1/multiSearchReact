import axios from 'axios';
import { setCurrentUser, setAuthToken }  from '../redux/user/user.actions';
import { store } from '../redux/store';

export const static_server_uri = 'http://localhost:9005';
// export const base_uri = 'http://172.16.40.154:9010'; //naveed-mac
// export const base_uri = 'http://localhost:9010';
export const base_uri = 'http://172.16.40.173:9010'; //noman-mac

axios.defaults.headers.post['Content-Type'] = 'application/json';


export async function invokeApi(
    {
        path,
        method = 'GET',
        headers = {},
        queryParams = {},
        postData = {}
    }) {

    let reqObj = {
        method: method,
        url: base_uri + path,
        headers: headers
    };

    reqObj['params'] = queryParams;

    if (method === 'POST') {
        reqObj['data'] = postData;
    }

    let results = undefined;

    try {
        results = await axios(reqObj);
        return results.data;
    } catch(error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        }
        else if (error.response && error.response.status && error.response.statusText) {
            if (error.response.status === 401) {
                // store.dispatch(setCurrentUser(null));
                // store.dispatch(setAuthToken(null));
                // store.dispatch({
                //     type: 'RESET_STATE'
                // });
            }
            throw new Error(error.response.statusText);
        }
        else {
            console.log('invokeApi -> checkpoint-2 --> ', error);
            throw new Error('NETWORK ERROR : Some Thing Went Wrong!');
        }

    }
}