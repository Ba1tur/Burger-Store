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
			if(state.basket.some((item) => item.name === action.payload.name)) {
				state.error = "Бро сори"
			} else {
				state.basket.push(action.payload)
			}
		},
		DeleteProduct: (state , action: PayloadAction<number | undefined | string>) => {
			state.basket = state.basket.filter((item) => item.id !== action.payload)
		},
		Increment: (state , action: PayloadAction<number>) => {

			const product = state.basket.find((item) => item.id === action.payload)
			if(product){
				product.count++;
			}
		},
		Decrement: (state , action : PayloadAction<number>) => {
			const product = state.basket.find((item) => item.id === action.payload)
			if (product && product.count > 0) {
				product.count--;
			 }
		}
	},
	extraReducers: {}
})

export default BasketSlice.reducer;