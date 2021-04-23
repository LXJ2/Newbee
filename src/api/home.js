import http from '../util/http'


//首页信息
export function indexInfo(){
    return http.get('/api/v1/index-infos')
}