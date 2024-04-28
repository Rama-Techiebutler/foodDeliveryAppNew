import "./ItemListStyle.css";
import { LuVegan } from "react-icons/lu";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CleaningServices } from "@mui/icons-material";

const ItemList = ({ items, quantity }) => {
  const dispatch = useDispatch();
  console.log(quantity);

  // const itemquntity = quantity.filter((e) => console.log(e));
  const handleAddItem = (item) => {
    console.log("button clicked");
    console.log(item);
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    console.log("remove");
    // console.log(item.card.info.id);
    console.log(item.card.info);
    dispatch(removeItem(item.card.info));
  };

  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, []);
  return (
    <div>
      <div>
        {items.map((item) => (
          <div key={item.card.info.id} className="itemlist">
            <div className="itemdetail">
              <div className="itemdata">
                <span className="itemname">
                  <div className="ico">
                    {item.card.info.itemAttribute.vegClassifier && <LuVegan />}

                    <span>
                      {item.card.info.ribbon.text && (
                        <>
                          <span className="bic">
                            <FaStar />
                          </span>
                          {item.card.info.ribbon.text}
                        </>
                      )}
                    </span>
                  </div>
                  {item.card.info.name}
                </span>
                <span>{item.card.info.price / 100}</span>
              </div>
              <div>
                {location.pathname == "/cart" && (
                  <span>Quantity: {item.card.info.quantity}</span>
                )}
              </div>
              <div className="imgbtn">
                {item.card.info.imageId ? (
                  <div className="itemimg">
                    <img
                      className="img-logo"
                      src={CDN_URL + item.card.info.imageId}
                      alt="Item Image"
                    />

                    {location.pathname != "/cart" ? (
                      <button
                        className="add"
                        onClick={() => handleAddItem(item)}
                      >
                        Add
                      </button>
                    ) : (
                      <button
                        className="add"
                        onClick={() => handleRemoveItem(item)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="itemimg1">
                    {location.pathname != "/cart" ? (
                      <button
                        className="add"
                        onClick={() => handleAddItem(item)}
                      >
                        Add
                      </button>
                    ) : (
                      <button
                        className="add"
                        onClick={() => handleRemoveItem(item)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
            <p>{item.card?.info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
