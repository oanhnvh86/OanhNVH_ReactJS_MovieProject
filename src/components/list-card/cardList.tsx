/**
 * https://tailblocks.cc/:  List Movie
 */

import React, { useEffect } from "react";
import CardMovie from "./card";

//kết nối redux
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { QuanLyPhimAction } from "../../redux/actions/QuanLyPhimAction";
import { SET_DSFilms_DC, SET_DSFilms_SC } from "../../redux/types/QuanLyPhimType";


import MultipleRows from "../../components/RSlick/MultipleRowSlick";

function CardList(props) {
  //get state from redux
  const { arrFilms } = useSelector((state) => state.DSFilmsReducer);
  // console.log("arrFilms test nha", arrFilms);

  //update state to redux
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getDSFilmsAction;
    dispatch(action);
  }, []);

  //render list films
  const renderDSFilms = () => {
    return arrFilms.map((phim, index) => {
      return (
        <div key={index} className="p-5 lg:w-1/4">
          <CardMovie tenPhim={phim.tenPhim} hinhAnh={phim.hinhAnh} />
        </div>
      );
    });
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <button
          type="button"
          className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 mr-2"
          onClick={()=>{
            const action = {type:SET_DSFilms_DC};
            console.log('SET_DSFilms_DC',action);
            dispatch(action);

          }}
        >
          PHIM ĐANG CHIẾU
        </button>
        <button
          type="button"
          className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
          onClick={()=>{
            const action = {type:SET_DSFilms_SC};
            console.log('SET_DSFilms_SC',action);
            dispatch(action);}}
        >
          PHIM SẮP CHIẾU
        </button>

        <div className="flex flex-wrap -m-4">
          {/* <div className="p-5 lg:w-1/4">
            <CardMovie />
          </div> */}
          {/* <MultipleRows arrFilms = {arrFilms}/> */}
          {renderDSFilms()}
        </div>
      </div>
    </section>
  );
}

export default CardList;
