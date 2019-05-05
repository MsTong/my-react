import axios from "axios";
import qs from "qs";
import config from "./config";

axios.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response));

function checkStatus(response) {
    // if (response.status === 200 || response.status === 304) {
    //     return response;
    // }
    // return {
    //     data: {
    //         code: -404,
    //         message: response.statusText,
    //         data: ""
    //     }
    // };
    return response.data
}

function checkCode(res) {
    // if (res.status === -500) {
    //     window.location.href = "/";
    // } else if (res.status === -400) {
    //     window.location.href = "/";
    // } else if (res.status !== 200) {}
  // if(res.msg&&res.msg==='UNSIGN'){
  //   goLogin()
  // }
    return res;
}

export default {
    post(url, params) {
        console.log(params)
        return axios({
            method: "POST",
            url: config.api + url,
            // header: {
            //     'Content-Type': 'application/x-www-form-urlencoded'
            // },
            data: params,
            // timeout: config.timeout,
            transformRequest: [function (data) {
                data = qs.stringify(data, {
                        serializeDate: (date) => {
                          return date.toString()
                        }
                      })
                return data;
            }],
            // withCredentials: true
        }).then(checkStatus).then(checkCode);
    },
    post2(url, params) {
        console.log(params)
        return axios({
            method: "POST",
            url: config.api + url,
            header: {
                'Content-Type': 'application/json'
            },
            dataType:'json',
            data: params,
        }).then(checkStatus).then(checkCode);
    },
    postWithHead(url, params) {
      console.log(params)
      return axios({
        method: "POST",
        url: config.api + url,
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params,
        // timeout: config.timeout,
        transformRequest: [function (data) {
          data = qs.stringify(data, {
            serializeDate: (date) => {
              return date.toString()
            }
          })
          return data;
        }],
        // withCredentials: true
      }).then(checkStatus).then(checkCode);
    },

    get(url, params = {}) {
        return axios({
            method: "get",
            url: config.api + url,
            params,
            timeout: config.timeout,
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(checkStatus).then(checkCode);
    }
};
