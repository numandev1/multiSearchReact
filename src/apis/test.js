import { invokeApi } from '../libs/invokeApi';

export const listBuildApi = (authToken) => {
	let requestObj = {
		path: '/abc',
		method: 'GET',
		headers: {
			'x-sh-auth': authToken
		}
	};
	requestObj['queryParams'] = {};
	return invokeApi(requestObj);
};
