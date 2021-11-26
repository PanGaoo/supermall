import axios from "axios";
export function request(config) {
    // 1. 创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',
        timeout: 60000
    })
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log('错误原因:'+err);
    })
    //响应拦截
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log('错误原因:'+err);
    })
    return instance(config)

}
