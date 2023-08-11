import { IProduct } from "@/interface/IProduct"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const productAPI = createApi({
	reducerPath: 'productApi',
	baseQuery: fetchBaseQuery({baseUrl: "http://localhost:4080"}),
	endpoints: ( build ) => ({
		fetchProductById: build.query<IProduct[] , string | undefined>({
			query: (type) => ({
				url: `/products?type=${type}`
			}),
		})
	})
})