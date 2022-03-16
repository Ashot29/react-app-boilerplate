import axios, {AxiosRequestConfig, Method} from 'axios';
import qs from 'qs';
import constants from "../settings/constant";

class NetworkService {

    get = (url: string[], options: AxiosRequestConfig<any>) => {
        options = options || {};
        return this.makeAPIRequest(url, options, 'GET');
    };

    post = (url: string[], options: AxiosRequestConfig<any>) => {
        options = options || {};
        return this.makeAPIRequest(url, options, 'POST');
    };

    put = (url: string[], options: AxiosRequestConfig<any>) => {
        options = options || {};
        return this.makeAPIRequest(url, options, 'PUT');
    };

    delete = (url: string[], options: AxiosRequestConfig<any>) => {
        options = options || {};
        return this.makeAPIRequest(url, options, 'DELETE');
    };

    patch = (url: string[], options: AxiosRequestConfig<any>) => {
        options = options || {};
        return this.makeAPIRequest(url, options, 'PATCH');
    };

    createUrl = (arg: string[]) => {
        return [constants.network.API_URL, ...arg].join('/')
    };

    makeAPIRequest = (url: string[], options: AxiosRequestConfig<any>, method: Method) => {
        return new Promise((resolve, reject) => {
            if (!url) {
                return reject('INVALID_REQUEST_PARAMS');
            }

            let _url = this.createUrl(url);

            let fetch_options: AxiosRequestConfig<any> = {
                url: _url,
                method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                data: options.data || {},
                params: options.params || '',
                paramsSerializer: (params) => qs.stringify(params),
                timeout: options?.timeout ?? 10000,
            };

            if (options.headers) {
                fetch_options.headers = options.headers;
            }

            axios(fetch_options)
                .then(async (response) => {
                    if (!response) {
                        return reject('INVALID_RESPONSE_DATA');
                    }

                    let {data} = response;

                    return resolve(data);
                })
                .catch((err) => {
                    err = JSON.parse(JSON.stringify(err));
                    if (err.message !== 'The user aborted a request.') {
                        // let check_result = await this._validation_service.validate(data);
                        return reject(err);
                    }
                });
        })
    }
}

export default new NetworkService();
