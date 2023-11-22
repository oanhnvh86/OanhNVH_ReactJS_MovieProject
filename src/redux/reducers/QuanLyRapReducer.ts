import { SET_HE_THONG_RAP_CHIEU } from "../types/QuanLyRapType";


const stateDefault = {
  heThongRapChieu: [
    {
      maHeThongRap: "BHDStar",
      tenHeThongRap: "BHD Star Cineplex",
      biDanh: "bhd-star-cineplex",
      logo: "http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png",
    },
  ],
};

export const QuanLyRapReducer = (state = stateDefault, action) => {
    switch(action.type) {

        case SET_HE_THONG_RAP_CHIEU: {
          state.heThongRapChieu = action.heThongRapChieu;
          return {...state}
        }

        default: return {...state}
            break;
    }
}