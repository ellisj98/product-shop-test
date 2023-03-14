import ProductImage from "./ProductImage";
import ProductVariant from "./ProductVariant";

interface RawProduct {
    id: number,
    title: string,
    handle: string,
    body_html: string,
    published_at: string,
    created_at: string,
    updated_at: string,
    vendor: string,
    product_type: string,
    tags: Array<string>,
    variants: Array<ProductVariant>,
    images: Array<ProductImage>
}

export default RawProduct;