import { defineStore } from 'pinia';
import axios, { AxiosResponse } from 'axios';
import RawProducts from '../../ts/Types/Product/TypeRawProducts';
import ProductsResponse from '../../ts/Interfaces/HttpResponse/ProductsResponse';

interface State {
    products: RawProducts,
}

const useShopStore = defineStore('shop', {
    state: (): State => ({
        products: null,
    }),
    getters: {
        productsFetched: (state) : boolean => {
            return state.products !== null;
        },
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
