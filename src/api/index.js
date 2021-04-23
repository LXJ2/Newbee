
import http from '../util/http';

export function getAA(){
    return http.get('')
}
export function getBB(){
    return http.get('/api/v1/shop-cart')
}