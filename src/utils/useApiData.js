const useApiData = () => {
  const [listOfRestaurants, setListOFRestaurant] = useState([]);
  const [filteredrestaurant, setFilteredRestaurant] = useState([]);
};
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
  return { listOfRestaurants, filteredrestaurant };
};

const filterBySearchText = () => {
  const filteredRes = listOfRestaurants.filter(
    (res) =>
      res.info.cuisines
        .join(", ")
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  setFilteredRestaurant(filteredRes);
  console.log(filteredRes);
  console.log(listOfRestaurants);
};

const filterByTopRated = () => {
  const filteredList = listOfRestaurants.filter(
    (res) => res.info.avgRating > "4.4"
  );
  setFilteredRestaurant(filteredList);
};

export default useApiData;
