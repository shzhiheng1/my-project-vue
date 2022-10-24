import {Service} from "../utils/request";

// 上传文件夹
export function uploadFiles(data) {
  return Service({
    // baseURL:'/dusto-admin-api',
    url:'/product/importGoodsPicture',
    method:'post',
    data,
    headers: {'Content-Type': 'multipart/form-data'},
  })
}