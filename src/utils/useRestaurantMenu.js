import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);
  const [Category, setcategory] = useState(null);
  const [isLoding, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();

    console.log(json);
    setMenuData(json.data.cards[2].card.card.info);
    // console.log(json.data.cards[2].card.card.info);
    // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
    // console.log(itemCarts);
    let temp = [];
    json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.forEach(
      (ele) => {
        temp.push(ele);
      }
    );

    setIsLoading(false);
    const categories =
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) =>
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setcategory(categories);
    console.log(Category);
  };

  return { menuData, isLoding, Category };
};

export default useRestaurantMenu;
