import axios from "axios";
import { DOMAIN } from "../../utils/config";
import { SET_DSFilms } from "../types/QuanLyPhimType";
import { quanLyPhimService } from "../../services/QuanLyPhimService";

export const layDanhSachPhimAction = () => {
    return async (dispatch) => {
      // You can await here
     try {
      //C1
      // const result = await axios({
      //   url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
      //   method: "GET",
      // });

      //C2
      //lấy dữ liệu từ API
      const result = await quanLyPhimService.layDanhSachPhim();
      // console.log("result", result);

      //Sau khi lấy dữ liệu từ api về => đưa dữ liệu đó lên redux (reducer)
      dispatch ({
        type: SET_DSFilms,
        arrFilms: result.data.content
      })
    } catch (errors) {
      console.log("errors:", errors);
    }

    }
     
}