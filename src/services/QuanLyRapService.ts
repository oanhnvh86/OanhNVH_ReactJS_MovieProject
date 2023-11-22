import { baseService } from "./baseService";
import { GROUPID } from "../utils/config";

export class QuanLyRapService extends baseService {

    constructor(){
        super();
    }

    layDanhSachBanner = () =>{
        return this.get(`/api/QuanLyRap/LayThongTinHeThongRap`)
    }

   

}

//C1
// const qlPhimServie = new QuanLyRapService();
// export const {layDanhSachBanner} = qlPhimServie;

//C2
export const quanLyRapService = new QuanLyRapService()


