import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./RestaurantCategoryStyle.css";
import ItemList from "./ItemList";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);
  // const [localShowItems, setLocalShowItems] = useState(false);
  const handleClick = () => {
    // setLocalShowItems(!localShowItems);
    setShowIndex();
  };

  return (
    <div className="title">
      <div className="itemscategory" onClick={handleClick}>
        <span>
          {data.title} {""} ({data.itemCards.length})
        </span>
        <span>{showItems ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
