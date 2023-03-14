import { defineStore } from 'pinia';
import axios, { AxiosResponse } from 'axios';

type Products = null | [];

interface State {
    products: Products,
}

interface ProductsResponse {
    products: Products
}


const useShopStore = defineStore('shop', {
    state: (): State => ({
        products: null,
    }),
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
