import "./RestoCardStyle.css";
import { CDN_URL } from "../utils/constants";
import { FcRating } from "react-icons/fc";
import { FaStar } from "react-icons/fa";

const RestoCard = ({ resData }) => {
  return (
    <div className="res-card">
      <div className="img">
        <img
          className="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
      </div>

      <h3>{resData.info.name}</h3>
      <div className="restoinfo">
        <p>{resData.info.sla.deliveryTime} minutes</p>
        <button>
          <p className="ratingc">
            {resData.info.avgRating}{" "}
            <div className="icon">
              <FaStar />
            </div>
          </p>
        </button>
      </div>
      {/* <p>{resData.info.costForTwo}</p> */}
      <p>{resData.info.cuisines.join(", ")}</p>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard ==> RestaurantCardPromoted.
export default RestoCard;
