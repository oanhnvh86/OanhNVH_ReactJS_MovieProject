/**
 * https://react-slick.neostack.com/docs/example/multiple-rows
 * https://react-slick.neostack.com/docs/example/custom-arrows
 */

import React, { Component } from "react";
import Slider from "react-slick";

import styleSlick from "./MultipleRowSlick.css";
import CardMovie from "../list-card/card";
import FilmFlip from "../Film/FilmFlip";
import { SET_DSFilms_DC, SET_DSFilms_SC } from "../../redux/types/QuanLyPhimType";
import { useDispatch, useSelector } from "react-redux";
import { act } from "react-dom/test-utils";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const MultipleRows = (props) => {
  //get data from redux
  const {dangChieu, sapChieu} = useSelector(state => state.QuanLyPhimReducer)
  let activeClassDC = dangChieu === true ? 'active_Film': 'none_active_Film';
  let activeClassSC = sapChieu === true ? 'active_Film': 'none_active_Film';
  
  //push data to redux
  const dispatch = useDispatch();

  //render list films
  const renderFilms = () => {
    // console.log("arrPhim hehe:", this.props.arrFilms);
    //C1
    // return props.arrFilms.map((item, index) => {
    //   return (
    //     <div key={index} className={`${styleSlick['width-item']}`} >
    //       <CardMovie film ={item}   />
    //     </div>
    //   );
    //C2
    return props.arrFilms.map((item, index) => {
      return (
        <div key={index} className="mt-2">
          <FilmFlip film={item} />
        </div>
      );
    });
  };

  // render() {
  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      {/* <h2>Multiple Rows</h2> */}
      <div>
        <button
          type="button"
          className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100 mr-2`}
          onClick={()=>{
            const action = {type: SET_DSFilms_DC}
            dispatch(action)
          }}
        >
          PHIM ĐANG CHIẾU
        </button>
        <button
          type="button"
          className={`${styleSlick[activeClassSC]}px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border`}
          onClick={()=>{
            const action = {type: SET_DSFilms_SC}
            dispatch(action)
          }}
        >
          PHIM SẮP CHIẾU
        </button>
      </div>

      <Slider {...settings}>
        {renderFilms()}

        {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
          <div>
            <h3>11</h3>
          </div>
          <div>
            <h3>12</h3>
          </div>
          <div>
            <h3>13</h3>
          </div>
          <div>
            <h3>14</h3>
          </div>
          <div>
            <h3>15</h3>
          </div>
          <div>
            <h3>16</h3>
          </div> */}
      </Slider>
    </div>
  );
};
// }

export default MultipleRows;
