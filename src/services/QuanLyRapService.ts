import { baseService } from "./baseService";
import { GROUPID } from "../utils/config";

export class QuanLyRapService extends baseService {

    constructor(){
        super();
    }

    layDanhSachHeThongRap = () =>{
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`) 
    }

   

}

//C1
// const qlPhimServie = new QuanLyRapService();
// export const {layDanhSachBanner} = qlPhimServie;

//C2
export const quanLyRapService = new QuanLyRapService()


