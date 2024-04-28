import { FaStar } from "react-icons/fa";
import { MdTimelapse } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdDirectionsBike } from "react-icons/md";

const RestaurantInfo = ({ menuData }) => {
  return (
    <div>
      <div className="menuRestrodetail">
        <div className="menu-data" key={menuData.id}>
          <h2>{menuData.name}</h2>
          <p>{menuData.cuisines}</p>
          <p>
            {menuData.areaName} - {menuData.sla.lastMileTravelString}
          </p>
        </div>
        <div className="rating">
          <div className="rat">
            <FaStar />
            {menuData.avgRatingString}
          </div>
          <div className="trat">{menuData.totalRatingsString}</div>
        </div>
      </div>
      <div className="orderTime">
        <div className="ic">
          <MdDirectionsBike />
        </div>
        Order above 149 for discounted delivery fee
      </div>
      <div className="line"></div>
      <div className="deliveryData">
        <div className="delivery">
          <div className="ic">
            <MdTimelapse />
          </div>
          <div className="data">{menuData.sla.slaString}</div>
        </div>
        <div className="rupees">
          <div className="ic">
            <HiOutlineCurrencyRupee />
          </div>
          <div className="data">₹{menuData.costForTwo / 100} for two</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
