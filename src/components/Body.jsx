import { useEffect, useState } from "react";
import RestoCard from "./RestoCard.jsx";
import Shimmer from "./Shimmer.jsx";
import "./BodyStyle.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import useOnlineStatus from "../utils/useOnlineStatus.js";

// import resList from "../utils/mockdata.js";
//uyy2xze0b9sb8qmitg5o

// not using Keys(not acceptable) <<< index as key <<<<<<<<unique id(best practice)..

// whnever state variables update, react triggers a reconciliation cycle(re-renders the component)
const Body = () => {
  // local state variable - super powerful varible. is listofrestaurant.
  const [listOfRestaurants, setListOFRestaurant] = useState([]);
  const [filteredrestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // const [listOfRestaurants, setListOFRestaurant] = arr;
  // arr[0]= listOfRestaurants
  // arr[1]= setListOFRestaurant  this is the array destructuring.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.29040&lng=70.79150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    let temp = [];
    // optional chaining
    json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
      (ele) => {
        temp.push(ele);
      }
    );
    setListOFRestaurant(temp);
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>
        Looks Like You are Offline!! please check Your Internet Connection.
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer numberOfCards={10} />
  ) : (
    <div className="Body">
      <div className="body1">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="searchBox"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                console.log(searchText);
                const filteredRes = listOfRestaurants.filter(
                  (res) =>
                    res.info.cuisines
                      .join(", ")
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRes);
                console.log(filteredRes);
                console.log(listOfRestaurants);
              }}
            >
              <FaSearch />
            </button>
          </div>
          <div className="filterb">
            <button
              className="filter-btn"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > "4.4"
                );
                setFilteredRestaurant(filteredList);
              }}
            >
              Top Rated Restaurant
            </button>
          </div>
        </div>
      </div>

      <div className="res-Container">
        {filteredrestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* if the restaurant is promoted then add a promoted label to it */}
            <RestoCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

{
  /* // useeffect is like a callback function. when use this function in script first body script is reder. after some time useeffect callback function will called. it is hook concept. */
}
