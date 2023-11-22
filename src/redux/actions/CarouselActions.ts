import axios from "axios";
import { DOMAIN } from "../../utils/config";
import { SET_CAROUSEL } from "../types/CaroselType";
import { quanLyPhimService } from "../../services/QuanLyPhimService";

export const getCarouselAction = async(dispatch) => {
     // You can await here
     try {
        //C1
        // const result = await axios({
        //   url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
        //   method: "GET",
        // });

        //C2
        const result = await quanLyPhimService.layDanhSachBanner();

        // console.log("result", result);
        dispatch ({
          type: SET_CAROUSEL,
          arrCarousel: result.data.content
        })
      } catch (errors) {
        console.log("errors:", errors);
      }
}