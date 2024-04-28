import { useParams } from "react-router-dom";
import React, { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import "./RestaurantInfoStyle.css";
import { FaStar } from "react-icons/fa";
import { MdTimelapse } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdDirectionsBike } from "react-icons/md";
import MenuSimmer from "./MenuSimmer";
import RestaurantCategory from "./RestaurantCategory";
import { IoMdAdd } from "react-icons/io";
import RestaurantInfo from "./RestaurantInfo";
import { useSelector } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const { menuData, isLoding, Category } = useRestaurantMenu(resId);

  return isLoding ? (
    <MenuSimmer numberOfData={1} />
  ) : (
    <div className="menu-item">
      <div className="menu" key={menuData.id}>
        <RestaurantInfo menuData={menuData} />
        {/* categories accordions */}
        {Category?.map((cat, index) => (
          // control component from the parent
          <RestaurantCategory
            key={cat.card.card.title}
            data={cat.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
