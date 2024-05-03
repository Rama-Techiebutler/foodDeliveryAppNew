import React from "react";
import "./MenuSimmerStyle.css";

const MenuSimmer = ({ numberOfData }) => {
  const dataArray = new Array(numberOfData).fill(null);

  return (
    <div className="menusimmer">
      {dataArray.map((cardIndex) => (
        <div key={cardIndex} className="menusimmer-card">
          <div className="restodata"></div>
          {/* {data.map((item, index) => (
            <> */}
          <div className="con">
            <div className="img-con"></div>
          </div>
          <div className="con">
            <div className="img-con"></div>
          </div>
          <div className="con">
            <div className="img-con"></div>
          </div>
          {/* </>
          ))} */}
        </div>
      ))}
    </div>
  );
};

export default MenuSimmer;
