import { defineStore } from 'pinia';
import axios, { AxiosResponse } from 'axios';
import RawProducts from '../../ts/Types/Product/TypeRawProducts';
import ProductsResponse from '../../ts/Interfaces/HttpResponse/ProductsResponse';
import RawProductData from '../../ts/Types/Product/RawProductData';

interface State {
    products: RawProducts,
    productsInBasket: RawProductData,
}

const useShopStore = defineStore('shop', {
    state: (): State => ({
        products: null,
        productsInBasket: [],
    }),
    getters: {
        productsFetched: (state) : boolean => {
            return state.products !== null;
        },
        getAmountOfProductsInBasket: (state) : number => {
            return state.productsInBasket.length;
        }
    },
    actions: {
        async getProducts(): Promise<AxiosResponse<ProductsResponse>> {
            try {
                const products = await axios.get('https://efuktshirts.com/products.json');
                this.products = products.data.products;
                return products;
            } catch (error) {
                // TODO: do something with error?
                throw error;
            }
        },
    }
});

export { State };

export default useShopStore;
