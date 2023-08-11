import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/interface/IProduct";



interface BasketState {
	basket: IProduct[];
	isLoading: boolean;
	error: string;
}

const initialState : BasketState = {
	basket: [],
	isLoading: false,
	error: '',
}


export const BasketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		AddProduct: (state , action: PayloadAction<IProduct>) => {
			state.basket.push(action.payload)
		},
		DeleteProduct: (state , action: PayloadAction<number | undefined | string>) => {
			state.basket = state.basket.filter((item) => item.id !== action.payload)
		},
	},
	extraReducers: {}
})

export default BasketSlice.reducer;