import { baseService } from "./baseService";
import { GROUPID } from "../utils/config";

export class QuanLyPhimService extends baseService {

    constructor(){
        super();
    }

    layDanhSachBanner = () =>{
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
    }

    layDanhSachPhim = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }

}

//C1
// const qlPhimServie = new QuanLyPhimService();
// export const {layDanhSachBanner, layDanhSachPhim} = qlPhimServie;

//C2
export const quanLyPhimService = new QuanLyPhimService()


