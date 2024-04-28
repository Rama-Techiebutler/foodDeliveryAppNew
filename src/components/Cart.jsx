import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { Box, Button } from "@mui/material";
import { addItem, clearCart } from "../utils/cartSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Cart = ({}) => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems.length);
  console.log(cartItems, "cart items");
  const quantity = [];
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((accumulator, currentItem) => {
      return (
        accumulator +
        currentItem.card.info.price * currentItem.card.info.quantity
      );
    }, 0);
    const finalPrice = (totalPrice / 100).toString();
    const result = parseInt(finalPrice);

    console.log(result);
    const options = {
      key: "rzp_test_rwK1MrxRLsNGfS",
      key_secret: "mAEXezfDuOKpBOT8W8n5Rpoa",
      amount: result * 100,
      currency: "INR",
      Name: "Food Delivery App",
      description: "tesing payments",
      handler(response) {
        console.log(response);
        handleClearCart();
      },
      theme: {
        color: "#da6517",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };
  return (
    <Box>
      <Box sx={{ ml: 46 }}>
        <h1>Cart</h1>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: 800 }}>
          {<ItemList items={cartItems} quantity={quantity} />}
        </Box>
      </Box>
      <Box>
        {cartItems.length != 0 ? (
          <Box
            sx={{ ml: 46, display: "flex", justifyContent: "space-between" }}
          >
            <h4>total amount </h4>
            <Button
              sx={{ width: 140, background: "#da6517", color: "black" }}
              onClick={handleClearCart}
            >
              Clear Cart
            </Button>
            <Button
              onClick={getTotalPrice}
              sx={{ width: 140, background: "#da6517", color: "black" }}
            >
              Pay now
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <h2>Please Add Item In Cart</h2>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Cart;

// const ItemId = cartItems.map((e) => e.card.info.id);
// console.log(ItemId);
// cartItems.map((element) => {
//   const temp = ItemId.filter((ele) => {
//     return ele == element.card.info.id;
//   });
//   console.log(temp);
//   // quantity.push(temp.length);
//   quantity.push({ id: element.card.info.id, quantity: temp.length });
//   const temp1 = quantity.filter((ele) => {});
//   // console.log(que);
// });
// const qua = quantity.filter((e) => console.log(e));
// console.log(qua);
// const itemquntity = quantity.filter((e) => console.log(e));
// console.log(itemquntity)
