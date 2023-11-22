/**
 * https://ant.design/components/card
 */

import React from "react";
// import { Card } from "antd";

// const { Meta } = Card;

function CardMovie(props) {
  console.log("Movie props:", props);
  const { film } = props;
  return (
    // <Card
    //   hoverable
    //   // style={{ width: 240}}
    //   cover={
    //     <img
    //       alt="example"
    //       src= {props.hinhAnh}
    //     />
    //   }
    // >
    //   <Meta title={props.tenPhim} description="www.instagram.com" />
    // </Card>

    // <div className="p-4 lg:w-1/3">
    <div className="mr-2 h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <div
        style={{
          background: `url(${film.hinhAnh}) , url(https://picsum.photos/300`,
          backgroundPosition: "center",
          backgroundSize: "100%, 100%",
        }}
      >
        <img
          src={film.hinhAnh}
          alt={film.tenPhim}
          style={{ height: "300px" }}
          className="opacity-0 w-full"
        />
      </div>
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 h-16 mt-5">
        <b>{film.tenPhim}</b>
      </h1>
      <p className="leading-relaxed mb-3 ">
        {film.moTa.length > 100 ? (
          <span>{film.moTa.slice(0, 100)}...</span>
        ) : (
          <span>{film.moTa} </span>
        )}
        {/* test desc */}
      </p>
      <div className="mt-10">
        <a className="text-indigo-500 inline-flex items-center ">
          ĐẶT VÉ
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
    // </div>
  );
}

export default CardMovie;
