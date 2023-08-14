import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/interface/IProduct";
import { toast } from "react-toastify";

interface BasketState {
  basket: IProduct[];
  isLoading: boolean;
  error: string;
}

const initialState: BasketState = {
  basket: [],
  isLoading: false,
  error: "",
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    AddProduct: (state, action: PayloadAction<IProduct>) => {
      if (state.basket.some((item) => item.name === action.payload.name)) {
        toast.error("🍔 Продукт уже есть  в корзине", {
          position: "top-right",
        });
      } else {
        state.basket.push(action.payload);
        toast.success("🍔 Продукт был добавлен в корзину ", {
          position: "top-right",
        });
      }
    },
    DeleteProduct: (state, action: PayloadAction<number>) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
      toast.success("🍔 Продукт был удалён из корзины", {
        position: "top-right",
      });
    },
    Increment: (state, action: PayloadAction<number>) => {
      const product  = state.basket.find((item) => item.id === action.payload);
      if ( product )  {
        product.count++;
        product.price
      }
    },
    Decrement: (state, action: PayloadAction<number>) => {
      const product = state.basket.find((item) => item.id === action.payload);
      if (product && product.count > 0) {
        product.count--;
        
      }
    },
  },
  extraReducers: {},
});

export default BasketSlice.reducer;
