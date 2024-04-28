import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.findIndex(
        (item) => item?.card?.info?.id === newItem?.card.info.id
      );

      if (existingItem !== -1) {
        let data = state.items;
        let item = data[existingItem].card?.info?.quantity;
        item += 1;
        data[existingItem].card.info.quantity = item;
        console.log(item);
        state.items = data;
      } else {
        newItem.card.info.quantity = 1;
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      console.log(itemIdToRemove.id);
      console.log(state.items);
      const existingItem = state.items.findIndex(
        (item) => item.card.info.id === itemIdToRemove.id
      );
      console.log(existingItem);
      if (existingItem !== -1) {
        let itemQuantity = state.items[existingItem].card.info.quantity;
        itemQuantity -= 1;

        if (itemQuantity === 0) {
          state.items = state.items.filter(
            (item) => item.card.info.id !== itemIdToRemove.id
          );
        } else {
          state.items[existingItem].card.info.quantity = itemQuantity;
          console.log(itemQuantity);
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
