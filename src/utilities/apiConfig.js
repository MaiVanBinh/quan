const API_ROOT = 'http://my-website.com/'

const apiName = {
    login: 'login',
}

const getApiAuth = (method, apiNameOption, param) => {
    switch (method) {
        case 'GET':
            return API_ROOT + 'auth/' + apiName[apiNameOption];
        case 'GET_WITH_PARAM':
            return API_ROOT + 'auth/' + apiName[apiNameOption] + '/' + param;
        case 'POST':
            return API_ROOT + 'auth/' + apiName[apiNameOption];
        case 'PUT':
            return API_ROOT + 'auth/' + apiName[apiNameOption] + '/' + param;
        case 'DELETE':
            return API_ROOT + 'auth/' + apiName[apiNameOption] + '/' + param;
        case 'DELETE_MANY':
            return API_ROOT + 'auth/' + apiName[apiNameOption] + '/' + param;
        default:
            return '';
    }
}

const getApi = (method, apiNameOption, param) => {
    switch (method) {
        case 'GET':
            return API_ROOT + apiName[apiNameOption];
        case 'GET_WITH_PARAM':
            return API_ROOT + apiName[apiNameOption] + '/' + param;
        case 'POST':
            return API_ROOT + apiName[apiNameOption];
        case 'PUT':
            return API_ROOT + apiName[apiNameOption] + '/' + param;
        case 'DELETE':
            return API_ROOT + apiName[apiNameOption] + '/' + param;
        case 'DELETE_MANY':
            return API_ROOT + apiName[apiNameOption] + '/' + param;
        default:
            return '';
    }
}

const getOptionsApiAuth = (method, token, data) => {
    switch (method) {
        case 'GET':
            return {
                method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'access-token': token
                }
            }
        case 'POST':
            return {
                method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'access-token': token
                },
                body: JSON.stringify(data)
            }
        case 'PUT':
            return {
                method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'access-token': token
                },
                body: JSON.stringify(data)
            }
        case 'DELETE':
            return {
                method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'access-token': token
                }
            }
        default:
        //
    }
}

const getOptionsApi = (method, data) => {
    switch (method) {
        case 'GET':
            return {
                method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        case 'POST':
            return {
                method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        case 'PUT':
            return {
                method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        case 'DELETE':
            return {
                method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        default:
        //
    }
}

export {
    getApi,
    getApiAuth,
    getOptionsApiAuth,
    getOptionsApi
}