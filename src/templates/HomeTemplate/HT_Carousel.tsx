/**
 * https://ant.design/components/carousel
 * */

import React, { useEffect } from "react";
import { Carousel } from "antd";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getCarouselAction } from "../../redux/actions/CarouselActions";

function HomeCarousel(props) {
  const contentStyle = {
    height: "700px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };

  //lấy state from redux
  const { arrCarousel } = useSelector((state) => state.CarouselReducer);
  // console.log("arrCarousel", arrCarousel);

  //update state to redux
  const dispatch = useDispatch();

  //sẽ tự kích hoạt khi component load lên
  //C1:
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     try {
  //       const result = await axios({
  //         url: "https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner",
  //         method: "GET",
  //       });
  //       console.log("result", result);
  //       dispatch({
  //         type: "SET_CAROUSEL",
  //         arrCarousel: result.data.content,
  //       });
  //     } catch (errors) {
  //       console.log("errors:", errors);
  //     }
  //     // ...
  //   }
  //   fetchData();
  // }, []); // Or [] if effect doesn't need props or state

  //C2
  useEffect(() => {
    const action = getCarouselAction;
    dispatch(action);
  }, []); 

  //render list carousel
  const renderCarousel = () => {
    return arrCarousel.map((item, index) => {
      return (
        <div key={index}>
          <h3
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              src={item.hinhAnh}
              className="w-full opacity-0"
              alt={item.hinhAnh}
            ></img>
          </h3>
        </div>
      );
    });
  };

  return (
    <Carousel autoplay>
      {renderCarousel()}
      {/* <div>
        <h3 style={contentStyle}>
          <img src="https://picsum.photos/100" alt="123"></img>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="https://picsum.photos/200" alt="123"></img>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="https://picsum.photos/300" alt="123"></img>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="https://picsum.photos/400" alt="123"></img>
        </h3>
      </div> */}
    </Carousel>
  );
}

export default HomeCarousel;
