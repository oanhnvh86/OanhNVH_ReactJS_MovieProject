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

export const QuanLyRapReducer = (sate = stateDefault, action) => {
    switch(action.type) {
        default: return {...state}
            break;
    }
}