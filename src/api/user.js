import http from '../util/http'

//登录
export function login(params){
    return http.post('api/v1/user/login',params)
};
//注册
export function register(params){
    return http.post('api/v1/user/register',params)
};