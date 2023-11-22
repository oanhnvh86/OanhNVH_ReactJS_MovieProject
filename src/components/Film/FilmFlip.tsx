import React from "react";
import "./FilmFlip.css";
import {PlayCircleOutlined} from "@ant-design/icons"
import { NavLink } from "react-router-dom";

export default function FilmFlip(props) {
  const { film } = props;
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {/* <div
            style={{
              background: `url(${film.hinhAnh}) , url(https://picsum.photos/300`,
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
            }}
          > */}
            <img
            //   className="opacity-0"
              src={film.hinhAnh}
              alt={film.tenPhim}
              style={{ width: 300, height: 300 }}
            />
          {/* </div> */}
        </div>
        <div
          className="flip-card-back"
          style={{ position: "relative", backgroundColor: "rgba(0,0,0,.9)" }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              style={{ width: 300, height: 300 }}
            />
          </div>
          <div
            className="w-full h-full"
            style={{
              position: "absolute",
              backgroundColor: "rgba(0,0,0,.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <div className="rounded-full cursor-pointer">
                <PlayCircleOutlined style={{ fontsize: "50px" }} />
              </div>
              <div className="text-2xl mt-2 font-bold">{film.tenPhim}</div>
              <p>
                {film.moTa.length > 100 ? (
                  <span>{film.moTa.slice(0, 100)}...</span>
                ) : (
                  <span>{film.moTa} </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <NavLink to={`/home/detail/${film.maPhim}`} className="bg-orange-300 text-center cursor-pointer bg-indigo-300 mb-5 text-success-50 font-bold" style={{display:"block"}}>
        Đặt Vé
      </NavLink>
    </div>
  );
}
