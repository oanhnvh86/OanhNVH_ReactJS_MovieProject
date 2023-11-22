import {
  SET_DSFilms,
  SET_DSFilms_DC,
  SET_DSFilms_SC,
} from "../types/QuanLyPhimType";

const stateDefault = {
  arrFilms: [
    {
      maPhim: 11088,
      tenPhim: "SÁT THỦ JOHN WICK 2 TEST",
      biDanh: "sat-thu-john-wick-2",
      trailer: "https://www.youtube.com/watch?v=yjRHZEUamCc",
      hinhAnh:
        "http://movieapi.cyberlearn.vn/hinhanh/sat-thu-john-wick-2_gp01.jpg",
      moTa: "John Wick là một sát thủ khét tiếng trong giới xã hội đen. Những kẻ trong nghề thường truyền tai nhau rằng: “Hắn không phải là ác quỷ. Hắn là người được cử đi để giết ác quỷ”. Phần hai của John Wick bắt đầu khi nhân vật sát thủ máu lạnh của Keanu Reeves đặt chân tới thành phố Rome, Italy và không may đụng độ với một gã gangster khét tiếng tại đất nước này.",
      maNhom: "GP01",
      ngayKhoiChieu: "2023-11-14T17:32:03.953",
      danhGia: 10,
      hot: false,
      dangChieu: true,
      sapChieu: false,
    },
    {
      maPhim: 11088,
      tenPhim: "SÁT THỦ JOHN WICK 2 TEST",
      biDanh: "sat-thu-john-wick-2",
      trailer: "https://www.youtube.com/watch?v=yjRHZEUamCc",
      hinhAnh:
        "http://movieapi.cyberlearn.vn/hinhanh/sat-thu-john-wick-2_gp01.jpg",
      moTa: "John Wick là một sát thủ khét tiếng trong giới xã hội đen. Những kẻ trong nghề thường truyền tai nhau rằng: “Hắn không phải là ác quỷ. Hắn là người được cử đi để giết ác quỷ”. Phần hai của John Wick bắt đầu khi nhân vật sát thủ máu lạnh của Keanu Reeves đặt chân tới thành phố Rome, Italy và không may đụng độ với một gã gangster khét tiếng tại đất nước này.",
      maNhom: "GP01",
      ngayKhoiChieu: "2023-11-14T17:32:03.953",
      danhGia: 10,
      hot: false,
      dangChieu: true,
      sapChieu: false,
    },
  ],
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DSFilms: {
      state.arrFilms = action.arrFilms; //.filter(film => film.dangChieu === state.dangChieu && film.sapChieu === state.sapChieu);
      state.arrFilmDefault = state.arrFilms;
      return { ...state };
    }

    case SET_DSFilms_DC: {
      state.dangChieu = !state.dangChieu;
      state.arrFilms = action.arrFilmDefault.filter((film) => film.dangChieu === state.dangChieu);
      return { ...state };
    }

    case SET_DSFilms_SC: {
      state.sapChieu = !state.sapChieu;
      state.arrFilms = action.arrFilmDefault.filter((film) => film.sapChieu === state.sapChieu);
      return { ...state };
    }

    // break;

    default:
      return { ...state };
  }
};
