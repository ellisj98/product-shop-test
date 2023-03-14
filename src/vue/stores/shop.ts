import { defineStore } from 'pinia';
import axios, { AxiosResponse } from 'axios';
import RawProducts from '../../ts/Types/Product/TypeRawProducts';
import ProductsResponse from '../../ts/Interfaces/HttpResponse/ProductsResponse';
import ProductVariant from '../../ts/Interfaces/Product/ProductVariant';

interface State {
    products: RawProducts,
    basketVariantProducts: ProductVariant[],
}

const useShopStore = defineStore('shop', {
    state: (): State => ({
        products: null,
        basketVariantProducts: [],
    }),
    getters: {
        productsFetched: (state) : boolean => {
            return state.products !== null;
        },
        getBasketTotalItems: (state) : number => {
            return state.basketVariantProducts.length;
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
