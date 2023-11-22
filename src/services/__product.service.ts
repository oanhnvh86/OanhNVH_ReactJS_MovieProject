import { axiosWithoutAuth } from "./__axios.config";

/**
 * Get all movies
 */
//C1: DÙNG Promise
export const getAllProduct = () => {
    
    //Promise : dùng khi call API 
    return new Promise((resolve,reject)=>{
        axiosWithoutAuth("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01").then(
            (resp) => {
                resolve(resp.data.content);
            }
        ).catch(reject)
    })
}

//C2: DUNG async: kết quả trả về trong function async là 1 promise
// export const getAllProduct = async () => {
//   try {
//    const resp = await   axiosWithoutAuth("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
//    return resp.data.content; //resove(resp.data.content)
//     }
//     catch (error: any){
//         return error; //resole(error)
//         throw new Error(error); //reject(error)
//         )
//     }
// }

